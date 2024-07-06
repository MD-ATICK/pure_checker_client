import {
    Box, Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader,
    ModalOverlay, Table, Tbody, Td, Textarea, Th, Thead, Tr,
    useDisclosure
} from "@chakra-ui/react";
import moment from "moment";
import { default as React, useEffect, useState } from 'react';
import { FaEdit, FaFileUpload } from "react-icons/fa";
import { MdClose, MdDelete } from "react-icons/md";
import { greenToast, postApi, redToast, url } from "../../api/Api";
import axios from "axios";
import AddBlogModal from "../../components/admin/AddBlogModal";
import ReactPaginate from "react-paginate";


function BlogsPanel() {

    const { isOpen, onOpen, onClose } = useDisclosure();


    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [activeBlog, setActiveBlog] = useState('');

    const [title, setTitle] = useState('atick');
    const [category, setCategory] = useState('category');
    const [description, setDescription] = useState('description');
    const [tags, setTags] = useState(['one', 'two']);
    const [content, setContent] = useState([`<h1>Hello world..!</h1> <br/>\n <p>Compared to other marketing channels, email marketing is relatively inexpensive. It requires minimal investment and can yield significant returns.</p>`,]);
    const [img, setImg] = useState('');
    const [countBlogs, setCountBlogs] = useState(0);


    const blogsFetch = async ({ page }) => {
        setLoading(true)
        const { data, status } = await postApi.get(`/all?page=${page}`, { withCredentials: true })
        if (status === 200) {
            setLoading(false)
            setCountBlogs(data?.count)
            setBlogs(data?.posts)
        } else {
            setLoading(false)
            redToast(data?.err)
        }
    }

    const handleDeletePost = async (_id) => {
        const { data, status } = await postApi.delete(`/delete/${_id}`)
        if (status === 200) {
            setBlogs(prev => prev.filter(post => post._id !== _id))
            greenToast(data?.msg)
        }
    }

    const [updateBlogLoading, setUpdateBlogLoading] = useState(false);
    const handleUpdateBlog = async () => {
        setUpdateBlogLoading(true)
        if (!activeBlog) return alert('not found id')
        const _id = activeBlog._id
        const { data, status } = await postApi.put(`/update`, { _id, img, title, category, description, tags, content }, { withCredentials: true })
        if (status === 201) {
            setUpdateBlogLoading(false)
            greenToast(data?.msg)
            setBlogs(prev => prev.map(blog => blog._id === activeBlog._id ? data.post : blog))
            onClose()
        } else {
            setUpdateBlogLoading(false)
            redToast(data?.err)
        }
    }


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

    useEffect(() => {
        if (activeBlog) {
            setTitle(activeBlog?.title)
            setCategory(activeBlog?.category)
            setDescription(activeBlog?.description)
            setImg(activeBlog?.img)
            setContent(activeBlog?.content)
            setTags(activeBlog?.tags)
        }
    }, [activeBlog]);

    const handlePageClick = async (event) => {
        await blogsFetch({ page: event.selected })
    }


    useEffect(() => {
        blogsFetch({ page: 1 })
    }, []);

    return (
        <div className=" w-full px-10">
            <h1 className="font-bold text-2xl text-primary">All Blogs</h1>
            {loading && <div className=" py-20 w-full justify-center items-center flex"> loading ... </div>}

            <div className=" overflow-x-scroll w-full   overflow-hidden relative">
                <Box py={8}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>
                                    No
                                </Th>
                                <Th className=" whitespace-nowrap">
                                    Blog-Image
                                </Th>
                                <Th className=" whitespace-nowrap">Id</Th>
                                <Th className=" whitespace-nowrap">Title</Th>
                                <Th className=" whitespace-nowrap">Category</Th>
                                <Th>description</Th>
                                <Th>Created At</Th>
                                <Th>action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                blogs.length > 0 ?
                                    blogs?.map((blog, i) => {
                                        const { img, _id, title, category, description, createdAt } = blog
                                        return <Tr key={_id}>
                                            <Td className=" whitespace-nowrap">{i + 1}</Td>
                                            <Td className="">
                                                <img className=" rounded-md shadow-md hover:scale-150 h-[80px] w-full duration-300" src={`${url}/uploads/${img}`} alt="" />
                                            </Td>
                                            <Td className=" text-[13px] text-primary font-[500] whitespace-nowrap lowercase">{_id}</Td>
                                            <Td className=" whitespace-nowrap">{title}</Td>
                                            <Td className=" text-sm whitespace-nowrap">{category}</Td>
                                            <Td className=" text-sm text-gray-600">{description.length > 200 ? `${description.splice(0, 200)}...` : description} </Td>
                                            <Td className=" text-sm">{moment(createdAt).format('DD/MM/YYYY')}</Td>
                                            <Td className="  text-center">
                                                <div className="flex gap-3">

                                                    <p onClick={() => {
                                                        setActiveBlog(blog)
                                                        onOpen()
                                                    }} className=" w-full h-full flex justify-center items-center"><FaEdit className=" text-2xl cursor-pointer hover:scale-125 duration-300 text-green-600" /> </p>
                                                    <p onClick={() => handleDeletePost(_id)} className=" w-full h-full flex justify-center items-center"><MdDelete className=" text-2xl cursor-pointer hover:scale-125 duration-300 text-orange-600" /> </p>
                                                </div>
                                            </Td>
                                        </Tr>
                                    })
                                    :
                                    <p>no blog found.</p>
                            }
                        </Tbody>
                    </Table>


                    <AddBlogModal blogs={blogs} setBlogs={setBlogs} />

                    {
                        activeBlog &&
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent >
                                <ModalHeader>Update Blog</ModalHeader>
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

                                    <div className=" flex flex-col gap-x-2 items-center">

                                        {
                                            img &&
                                            <img src={`${url}/uploads/${img}`} className=" w-full w-40" alt="" />
                                        }
                                        <label htmlFor="file" className="py-3  cursor-pointer my-2 bg-primary rounded-md w-full text-white text-center text-sm flex justify-center items-center gap-2">{uploadLoading ? 'loading ...' : ' Choose image'} <FaFileUpload className='text-xl' /> </label>
                                        <Input
                                            id="file"
                                            name="file"
                                            type="file"
                                            className="cursor-pointer hidden"
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
                                                    {tag} <MdClose onClick={() => setTags(tags.filter(t => t !== tag))} className=" cursor-pointer font-bold text-xl hover:scale-125 duration-300" />
                                                </div>
                                            )) : <p className=" w-full pl-2">add tags!</p>
                                        }
                                        {/* <button className=" rounded-full border-purple-400 bg-purple-100 h-9 w-9 text-center text-2xl font-[400] border-2">+</button> */}
                                        <div className="flex items-center">
                                            <input placeholder="enter tag name " onKeyDown={(e) => {
                                                console.log(e)
                                                if (e.code === 'Enter') {
                                                    setTags([...tags, e.target.value])
                                                    e.target.value = ''

                                                }
                                            }} className="mt-2 px-2 py-1 mx-2 focus:outline-none border-2 border-blue-400 rounded-md" type="text" />
                                            {tags.length > 0 &&
                                                <button onClick={() => setTags([])}> <MdDelete className=" text-purple-600 text-2xl" /> </button>
                                            }
                                        </div>
                                    </div>


                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={() => handleUpdateBlog()}>
                                        {updateBlogLoading ? 'loading...' : 'update'}
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    }

                </Box>

            </div>
            <div className=" w-full  flex justify-center py-3 items-center">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    className=" flex items-center my-3 gap-3"
                    pageClassName=" duration-300 hover:scale-150 hover:px-4 cursor:pointer"
                    nextClassName=" bg-primary text-white px-4 py-2 hover:scale-105 rounded-full"
                    previousClassName=" bg-primary text-white px-4 py-2 hover:scale-105 rounded-full"
                    activeClassName=" bg-primary text-white h-10 w-10 flex justify-center items-center font-[600] rounded-full"
                    pageCount={Math.ceil(countBlogs / 10)}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default BlogsPanel
