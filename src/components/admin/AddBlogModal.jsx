import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import { MdClose, MdDelete, MdPersonAdd } from "react-icons/md";
import { greenToast, postApi, redToast, url } from "../../api/Api";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa";

const AddBlogModal = ({ blogs, setBlogs }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [addBlogLoading, setAddBlogLoading] = useState(false);

    const [img, setImg] = useState('');
    const [title, setTitle] = useState('atick');
    const [category, setCategory] = useState('category');
    const [description, setDescription] = useState('description');
    const [tags, setTags] = useState(['one', 'two']);
    const [content, setContent] = useState([`<h1>Hello world..!</h1> <br/>\n <p>Compared to other marketing channels, email marketing is relatively inexpensive. It requires minimal investment and can yield significant returns.</p>`,]);


    const handleAddBlog = async () => {
        if (!img) return alert('not work.')


        try {
            setAddBlogLoading(true)
            const { data, status } = await postApi.post('/post', { img, title, category, description, tags, content }, { withCredentials: true })
            if (status === 201) {
                greenToast(data.msg)
                setBlogs([...blogs, data?.post])
                setImg('')
                setTitle('')
                setDescription('')
                onClose();
                setAddBlogLoading(false)
            } else {
                onOpen()
                setAddBlogLoading(false)
                redToast(data.err)
            }
        } catch (error) {
            setAddBlogLoading(false)
        }

    };


    const [uploadLoading, setUploadLoading] = useState(false);
    const HandleImgUpload = async (e) => {
        const file = e.target.files[0]
        if (file) {
            setUploadLoading(true)
            const formData = new FormData();
            formData.append('file', file);
            const { data, status } = await axios.post(`${url}/img-upload`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            if (status === 201) {
                setImg(data?.img)
                greenToast(data?.img)
                setUploadLoading(false)
            }
        }
    }


    return (
        <>
            <Button
                // leftIcon={<MdPersonAdd />}
                colorScheme='blue'
                size='sm'
                position={'sticky'}
                left={'20px'}
                mt={4}
                onClick={onOpen}
            >
                Add Blog
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Add New Blog</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className='space-y-2'>
                        <Input
                            placeholder='Enter Title'
                            fontSize={15}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder='Enter Category Name'
                            fontSize={15}
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />
                        <Textarea
                            placeholder='Enter Description'
                            fontSize={15}
                            height={100}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />

                        <div className=" flex flex-col gap-3 w-full justify-center items-center">

                            {
                                img &&
                                <img src={`${url}/uploads/${img}`} className="" alt="" />
                            }

                            <label htmlFor="file" className="py-3  cursor-pointer my-2 bg-primary rounded-md w-full text-white text-center text-sm flex justify-center items-center gap-2"> {uploadLoading ? 'loading ...' : ' Choose image'} <FaFileUpload className='text-xl' /> </label>

                            <Input
                                type="file"
                                id="file"
                                className=" cursor-pointer hidden"
                                onChange={HandleImgUpload}
                            />
                        </div>
                        <Textarea
                            placeholder='Enter content'
                            fontSize={15}
                            height={160}
                            value={content[0]}
                            onChange={e => setContent([e.target.value])}
                        />
                        <div className="flex gap-1 items-center gap-x-2 border-2 p-3 rounded-lg flex-wrap">
                            {
                                tags?.length > 0 ? tags.map((tag, index) => (
                                    <div key={index} className="bg-purple-100 flex items-center gap-1 border-2 border-purple-400 text-black p-2 rounded-full text-sm ">
                                        {tag} <button onClick={() => setTags(tags.filter(t => t !== tag))} className=" cursor-pointer font-bold  rotate-45 text-xl hover:scale-125 duration-300">+</button>
                                    </div>
                                )) : <p className=" w-full pl-2">add tags!</p>
                            }
                            {/* <button className=" rounded-full border-purple-400 bg-purple-100 h-9 w-9 text-center text-2xl font-[400] border-2">+</button> */}
                            <div className="flex items-center">
                                <input placeholder="enter tag name " onKeyDown={(e) => {
                                    if (e.code === 'Enter') {
                                        setTags([...tags, e.target.value])
                                        e.target.value = ''

                                    }
                                }} className="mt-2 px-2 py-1 mx-2 focus:outline-none border-2 border-blue-400 rounded-md" type="text" />
                                {tags.length > 0 &&
                                    <button onClick={() => setTags([])}>
                                        {/* <MdDelete className=" text-purple-600 text-2xl" />  */}
                                        D
                                    </button>
                                }
                            </div>
                        </div>


                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleAddBlog()}>
                            {addBlogLoading ? 'loading...' : 'add'}
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddBlogModal;
