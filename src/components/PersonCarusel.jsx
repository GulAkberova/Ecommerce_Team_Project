import React from 'react'
import person from '../UI/person.module.css'
import personImg1 from '../assets/image/Ellipse 4 (1).png'
import personImg2 from '../assets/image/Ellipse 4 (2).png'
import personImg3 from '../assets/image/Ellipse 4 (3).png'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function PersonCarusel() {
  return (
    <>
    <div className={person.container}>
        <div className={person.bigdiv}>
           <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={person.bigdivcarusel}
      >
        <SwiperSlide>
        <div className={person.minidiv}>
           <div className={person.personInfoDiv}>
                <div className={person.personimg}>
                    <img src={personImg1}/>
                </div>
                <h3>Savannah Nguyen</h3>
            </div>
            <div className={person.textdiv}>
                <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>

            </div>

           </div>
           <div className={person.minidiv}>
           <div className={person.personInfoDiv}>
                <div className={person.personimg}>
                    <img src={personImg2}/>
                </div>
                <h3>Esther Howard</h3>
            </div>
            <div className={person.textdiv}>
                <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>

            </div>

           </div>
           <div className={person.minidiv}>
           <div className={person.personInfoDiv}>
                <div className={person.personimg}>
                    <img src={personImg3}/>
                </div>
                <h3>Savannah Nguyen</h3>
            </div>
            <div className={person.textdiv}>
                <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>

            </div>

           </div>
         
        </SwiperSlide>
        <SwiperSlide>
        <div className={person.minidiv}>
           <div className={person.personInfoDiv}>
                <div className={person.personimg}>
                    <img src={personImg1}/>
                </div>
                <h3>Savannah Nguyen</h3>
            </div>
            <div className={person.textdiv}>
                <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>

            </div>

           </div>
           <div className={person.minidiv}>
           <div className={person.personInfoDiv}>
                <div className={person.personimg}>
                    <img src={personImg2}/>
                </div>
                <h3>Esther Howard</h3>
            </div>
            <div className={person.textdiv}>
                <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>

            </div>

           </div>
           <div className={person.minidiv}>
           <div className={person.personInfoDiv}>
                <div className={person.personimg}>
                    <img src={personImg3}/>
                </div>
                <h3>Savannah Nguyen</h3>
            </div>
            <div className={person.textdiv}>
                <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>

            </div>

           </div>
        </SwiperSlide>
       
      </Swiper>
          
         
           </div>
        </div>


    </>
  )
}

export default PersonCarusel