import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { postApi, redToast, url } from "../api/Api";
import UseHelmet from "../utils/UseHelmet";

const SingleBlog = () => {

	const { single } = useParams()
	const [loading, setLoading] = useState(false);
	const [blog, setBlog] = useState('');
	const [similarBlogs, setSimilarBlogs] = useState([]);

	const singleBlogFetch = async () => {
		setLoading(true)
		const { data, status } = await postApi.get(`/single/${single}`, { withCredentials: true })
		if (status === 200) {
			setLoading(false)
			setBlog(data?.post)
			setSimilarBlogs(data?.similar)
		} else {
			setLoading(false)
			redToast(data?.err)
		}
	}




	useEffect(() => {
		singleBlogFetch()
	}, []);


	return (
		<div className='container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 px-5'>
			{loading && <div className=" py-20 w-full justify-center items-center flex"> <SyncLoader color="blue" size={25} /> </div>}

			{blog &&
				<>
					<UseHelmet param={`blogs/${blog?._id}`} title={blog?.title} description={blog?.description} />
					<div className={`${similarBlogs.length === 0 ? "col-span-3" : 'col-span-2'}`}>
						<div className="mb-10">
							<img
								src={`${url}/uploads/${blog?.img}`}
								alt=''
								className='w-full h-[270px] md:h-[350px] rounded-lg object-cover'
							/>
							<div className='mt-2 text-sm my-2'>
								<strong>{blog?.category}</strong>-{" "}
								{moment(blog?.createAt).format("LL")}
							</div>
							<h2 className='text-2xl font-bold py-1'>{blog?.title}</h2>
							<p>{blog?.description}</p>
						</div>
						<div className="content" dangerouslySetInnerHTML={{ __html: blog?.content }} />

						<br /> <br /> <br /> <br />
						{/* extra content section */}
						{/* <div>

						<section className='mb-6'>
							<h2 className='text-xl md:text-2xl font-bold'>
								15 Email Marketing Benefits
							</h2>
							<p className='mt-2'>
								Email marketing remains one of the most effective digital marketing
								strategies. Here are the top 15 benefits of email marketing in 2024:
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								1. Website Traffic
							</h3>
							<p className='mt-2'>
								Emails can drive significant traffic to your website, especially
								when they contain strong calls to action. Regularly sending emails
								with links to your site can keep your audience engaged and encourage
								repeat visits.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								2. Brand Awareness
							</h3>
							<p className='mt-2'>
								Consistently appearing in your audience is inbox helps keep your
								brand top of mind. Well-designed emails can make your brand more
								recognizable and familiar to your audience.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								3. Increase in ROI
							</h3>
							<p className='mt-2'>
								Email marketing has one of the highest returns on investment (ROI)
								among digital marketing strategies.  a cost-effective way to
								reach a large audience with personalized messages.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								4. Customer Engagement
							</h3>
							<p className='mt-2'>
								Emails allow for direct engagement with your audience. Interactive
								elements like surveys, polls, and personalized offers can increase
								customer engagement and loyalty.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								5. Building Your Own Contact List
							</h3>
							<p className='mt-2'>
								Owning your contact list gives you control over your marketing
								efforts. Unlike social media platforms where algorithms dictate
								visibility, your email list is yours to manage and use as you see
								fit.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								6. Brand Authority
							</h3>
							<p className='mt-2'>
								Regularly sharing valuable content through emails helps establish
								your brand as an authority in your industry. Informative and helpful
								emails build trust with your audience.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								7. Product Promotion
							</h3>
							<p className='mt-2'>
								Emails are an excellent way to promote new products or services. You
								can reach your audience directly with promotional offers, increasing
								the chances of conversions.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								8. Building Professional Network
							</h3>
							<p className='mt-2'>
								Email marketing can also help in building professional networks. By
								regularly updating your professional contacts about your business,
								you can strengthen these relationships and open up new
								opportunities.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								9. Improve Customer Experience and Retention
							</h3>
							<p className='mt-2'>
								Personalized and timely emails can improve the customer experience.
								By addressing customer needs and preferences, you can increase
								customer retention and loyalty.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								10. Gather Feedback on Your Product
							</h3>
							<p className='mt-2'>
								Emails are a great way to gather feedback from your customers.
								Surveys and feedback forms can provide valuable insights into
								customer satisfaction and areas for improvement.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>11. Low Cost</h3>
							<p className='mt-2'>
								Compared to other marketing channels, email marketing is relatively
								inexpensive. It requires minimal investment and can yield
								significant returns.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								12. Measurable Results
							</h3>
							<p className='mt-2'>
								Email marketing provides measurable results. You can track open
								rates, click-through rates, conversions, and more to gauge the
								effectiveness of your campaigns.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								13. Allows You to Automate Emails
							</h3>
							<p className='mt-2'>
								Automation tools can streamline your email marketing efforts,
								allowing you to send personalized and timely messages without manual
								intervention.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								14. Reaching New Audiences
							</h3>
							<p className='mt-2'>
								Emails can help you reach new audiences by encouraging recipients to
								share your content. Referral programs and social sharing buttons can
								extend your reach.
							</p>
						</section>

						<section className='mb-6'>
							<h3 className='text-lg md:text-xl font-semibold'>
								15. Self-Ownership
							</h3>
							<p className='mt-2'>
								Owning your email list gives you complete control over your
								communication channels. You are not subject to the rules and
								algorithms of third-party platforms.
							</p>
						</section>

						<section className='mb-6'>
							<h2 className='text-xl md:text-2xl font-bold'>
								Tips to Improve Your Email Marketing Campaign
							</h2>
							<ul className='list-disc list-inside mt-2'>
								<li>Segment your email list to send targeted messages.</li>
								<li>Personalize your emails to increase engagement.</li>
								<li>Optimize your emails for mobile devices.</li>
								<li>Use A/B testing to find the best strategies.</li>
								<li>Monitor your email analytics to measure success.</li>
							</ul>
						</section>

						<section className='mb-6'>
							<h2 className='text-xl md:text-2xl font-bold'>Conclusion</h2>
							<p className='mt-2'>
								Email marketing continues to be a powerful tool for businesses. By
								leveraging its benefits and following best practices, you can
								enhance your marketing efforts and achieve your business goals.
							</p>
						</section>
					</div> */}

					</div>

					{/* similar product */}
					{similarBlogs.length > 0 &&
						<div className='container mx-auto col-span-1 space-y-2 px-5'>
							<h3 className='text-xl font-bold text-slate-600 inline-block ml-3 border-slate-600'>
								Similar Blog
							</h3>
							{similarBlogs?.length > 0 && similarBlogs?.map((sBlog, index) => (
								<div
									key={index}
									className='cursor-pointer hover:shadow-lg hover:transition-all duration-300 p-3 rounded-md'
								>
									<img
										src={`${url}/uploads/${sBlog?.img}`}
										alt=''
										className='w-full h-[270px] md:h-[250px] rounded-lg object-cover'
									/>
									<div className='p-2'>
										<div className='mt-1 text-sm'>
											<strong>{sBlog?.category}</strong>-{" "}
											{moment(sBlog.createAt).format("LL")}
										</div>
										<h2 className='text-2xl font-bold py-1'>{sBlog?.title}</h2>
										<p>{sBlog.description}</p>
									</div>
								</div>
							))}
						</div>
					}
				</>
			}
		</div>
	);
};

export default SingleBlog;
