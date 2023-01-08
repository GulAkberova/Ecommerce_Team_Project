import React, { useContext } from 'react'
import { allProductContext } from '../context/allProductContext'
import '../UI/itemsSlider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function ItemsSlider() {
    let { product } = useContext(allProductContext)
    console.log(product);
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					type: 'progressbar',
				}}
				breakpoints={{
					'@0.00': {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					'@0.75': {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					'@1.00': {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					'@1.50': {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				navigation={true}
                className="mySwiper"
				modules={[Navigation]}
			>
        {product && product.map((prv)=>(
            <SwiperSlide key={prv.id}>
                <div className='itemsSlideAllBox'>
                <div className='itemsSlideBox'>
            <div className='itemsSlideleftBox'>
                <img src={prv.image}/>
            </div>
            <div className='itemsSliderightBox'>
            <p>{prv.title.substring(0, 20)}</p>
            <p>{prv.price}</p>
            </div>   
        </div>
                </div>
            </SwiperSlide> 
        ))}
  </Swiper>
		</>
	);
}

export default ItemsSlider