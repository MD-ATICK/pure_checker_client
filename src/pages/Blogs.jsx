import moment from "moment";
import React, { useEffect, useState } from "react";
import { postApi, redToast, url } from "../api/Api";
import { SyncLoader } from 'react-spinners'
import { Link } from 'react-router-dom'


const Blogs = () => {

	const [loading, setLoading] = useState(false);
	const [blogs, setBlogs] = useState([]);

	const blogsFetch = async () => {
		setLoading(true)
		const { data, status } = await postApi.get('/all', { withCredentials: true })
		if (status === 200) {
			setLoading(false)
			setBlogs(data?.posts)
		} else {
			setLoading(false)
			redToast(data?.err)
		}
	}

	useEffect(() => {
		blogsFetch({ page: 1 })
	}, []);

	return (
		<section>
			<div className='bg-primary themeClip h-[300px]'>
				<div className='container mx-auto flex flex-col text-center items-center justify-center h-[80%]'>
					<h1 className='text-5xl font-extrabold text-secondary'>Blogs</h1>
					<p className='text-secondary mt-5'>
						Read our blog and put valuable tips into practice.{" "}
					</p>
				</div>
			</div>
			{loading && <div className=" py-20 w-full justify-center items-center flex"> <SyncLoader color="blue" size={25} /> </div>}
			<div className='container mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10 px-5'>
				{blogs?.length > 0 && blogs?.map((blog, index) => {
					const { _id, img, title, category, description, createAt } = blog
					return (
						<Link to={`/blogs/${_id}`}
							key={index}
							className='cursor-pointer hover:shadow-lg hover:transition-all duration-300 p-3 rounded-md'
						>
							<img
								src={`${url}/uploads/${img}`}
								alt=''
								className='w-full h-[270px] md:h-[250px] rounded-lg object-cover'
							/>
							<div className="p-2">
								<div className='mt-1 text-sm'>
									<strong>{category}</strong>-{" "}
									{moment(createAt).format("LL")}
								</div>
								<h2 className='text-2xl font-bold py-1'>{title}</h2>
								<p>{description}</p>
							</div>
						</Link>
					)
				})}
			</div>
			
		</section >
	);
};

export default Blogs;
