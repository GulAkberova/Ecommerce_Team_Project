import React from 'react'
import hero from '../assets/image/8 1.svg'
import canonCamera from '../assets/logo/Canon camera.svg'
import '../UI/heroCart.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

function HeroCart() {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '"></span>';
		},
	};

	return (
		<>
    <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
				<SwiperSlide>
        <div className='heroCart'>
          <div className='heroCartLeft'>
          <div className='canonCameraImg'>
          <img src={canonCamera}/>
          </div>
        <div className='heroBtn'>
        <button variant="contained" className='shopBtn'>Shop now</button>
        <button variant="outlined" className='viewBtn'>View more</button>
        </div>
          </div>
        <div className='heroCartRight'>
        <img src={hero}/>
        </div>
        </div>
				</SwiperSlide>
				<SwiperSlide>
        <div className='canonCameraImg'>
          <img src={canonCamera}/>
          </div>
        <div className='heroBtn'>
        <button variant="contained" className='shopBtn'>Shop now</button>
        <button variant="outlined" className='viewBtn'>View more</button>
        </div>
        <div className='heroImg'>
        <img src={hero}/>
        </div>
				</SwiperSlide>
				<SwiperSlide>
        <div className='canonCameraImg'>
          <img src={canonCamera}/>
          </div>
        <div className='heroBtn'>
        <button variant="contained" className='shopBtn'>Shop now</button>
        <button variant="outlined" className='viewBtn'>View more</button>
        </div>
        <div className='heroImg'>
        <img src={hero}/>
        </div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default HeroCart;
    