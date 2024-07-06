import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
	return (
		<div className='w-full md:w-2/3 mx-auto relative mt-10'>
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					// pagination={{
					// 	clickable: true,
					// }}
					navigation={true}
					modules={[Navigation]}
					className='mySwiper'
				>
					<SwiperSlide className='p-14 md:p-20 overflow-hidden'>
						<div className='relative min-h-[20vh] flex flex-col items-center h-full justify-between'>
							<img src="/increase.png" className=" mb-10 max-w-[300px]" alt="" />
							<p className=" text-lg text-gray-600">
								Our delivery rates jumped to 99.6% so the ROI of our email
								campaigns keeps growing. ELV does exactly what it's made for and
								the pricing is incredible compared to other tools.
							</p>

							<h2 className='text-2xl font-extrabold mt-5'>MD Arif.</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide>
				</Swiper>
		</div>
	);
};

export default Testimonial;
