import React from 'react'
import latest from '../UI/latest.module.css'
import PIT from '../assets/image/productImgTest.png' 
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function Latest() {
  return (
    <>
    <div className={latest.container}>
        <div className={latest.headerdiv}>
            <h2>Latest news</h2>
           <p>View all</p>

        </div>
        <div className={latest.latestBigDiv}>
           <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={latest.latestBigDivCarusel}
      >
        <SwiperSlide>
        <div className={latest.latestMiniDiv}>
                <div className={latest.latestMiniImg}>
                    <img src={PIT}/>

                </div>
                <div className={latest.latestTextDiv}>
                    <span className={latest.latestTextDate}>22,oct,2021</span>
                    <h2>Who avoids a 
pain that produces?</h2>
<p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
<p className={latest.latestTextBy}>By spacing tech</p>
                </div>

            </div>
            <div className={latest.latestMiniDiv}>
                <div className={latest.latestMiniImg}>
                    <img src={PIT}/>

                </div>
                <div className={latest.latestTextDiv}>
                    <span className={latest.latestTextDate}>22,oct,2021</span>
                    <h2>Who avoids a 
pain that produces?</h2>
<p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
<p className={latest.latestTextBy}>By spacing tech</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={latest.latestMiniDiv}>
                <div className={latest.latestMiniImg}>
                    <img src={PIT}/>

                </div>
                <div className={latest.latestTextDiv}>
                    <span className={latest.latestTextDate}>22,oct,2021</span>
                    <h2>Who avoids a 
pain that produces?</h2>
<p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
<p className={latest.latestTextBy}>By spacing tech</p>
                </div>

            </div>
            <div className={latest.latestMiniDiv}>
                <div className={latest.latestMiniImg}>
                    <img src={PIT}/>

                </div>
                <div className={latest.latestTextDiv}>
                    <span className={latest.latestTextDate}>22,oct,2021</span>
                    <h2>Who avoids a 
pain that produces?</h2>
<p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
<p className={latest.latestTextBy}>By spacing tech</p>
                </div>

            </div>
        </SwiperSlide>
      
      </Swiper>
          
           </div>

        </div>
    </>
  )
}

export default Latest