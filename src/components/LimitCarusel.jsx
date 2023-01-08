import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import limit from '../UI/limitcarusel.module.css'
import PIT from '../assets/image/productImgTest.png' 
import basket from '../assets/icon/shopping-cart.png'
import eye from '../assets/icon/eye.png'


function LimitCarusel() {
  return (
    <>
    <div className={limit.container}>
        <div className={limit.bigdiv}>
            <div className={limit.miniDivCarusel}>
            <Swiper pagination={true} modules={[Pagination]} className={limit.miniDiv}>
        <SwiperSlide>
        <div className={limit.miniDiv1}>
                    <div className={limit.miniImgDiv}>
              <img src={PIT}/>
                    </div>
                    <div className={limit.miniTextDiv}>
                        <h4>JBL bar 2.1 deep bass</h4>
                        <p>$11,70</p>
                        <div className={limit.spans}>
                            <span>57</span>
                            <span>11</span>
                            <span>23</span>
                            <span>45</span>
                        </div>
                        <div className={limit.btns}>
                            <button className={limit.btn1}>Add to cart <img src={basket}/></button>
                            <button className={limit.btn2}><img src={eye}/></button>
                        </div>

</div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={limit.miniDiv1}>
                    <div className={limit.miniImgDiv}>
              <img src={PIT}/>
                    </div>
                    <div className={limit.miniTextDiv}>
                        <h4>JBL bar 2.1 deep bass</h4>
                        <p>$11,70</p>
                        <div className={limit.spans}>
                            <span>57</span>
                            <span>11</span>
                            <span>23</span>
                            <span>45</span>
                        </div>
                        <div className={limit.btns}>
                            <button className={limit.btn1}>Add to cart <img src={basket}/></button>
                            <button className={limit.btn2}><img src={eye}/></button>
                        </div>

</div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={limit.miniDiv1}>
                    <div className={limit.miniImgDiv}>
              <img src={PIT}/>
                    </div>
                    <div className={limit.miniTextDiv}>
                        <h4>JBL bar 2.1 deep bass</h4>
                        <p>$11,70</p>
                        <div className={limit.spans}>
                            <span>57</span>
                            <span>11</span>
                            <span>23</span>
                            <span>45</span>
                        </div>
                        <div className={limit.btns}>
                            <button className={limit.btn1}>Add to cart <img src={basket}/></button>
                            <button className={limit.btn2}><img src={eye}/></button>
                        </div>

</div>
                </div>
        </SwiperSlide>
      </Swiper>
               
               

            </div>
            <div className={limit.smallMiniDiv}>
                <div className={limit.smallDiv}>
                    <div className={limit.smallDivImg}>
                        <img src={PIT}/>

                    </div>
                    <div className={limit.smallDivText}>
                        <h4>Play game</h4>
                        <p>$11,70</p>

                    </div>
                   
                </div>
                <div className={limit.smallDiv}>
                    <div className={limit.smallDivImg}>
                        <img src={PIT}/>

                    </div>
                    <div className={limit.smallDivText}>
                        <h4>Play game</h4>
                        <p>$11,70</p>

                    </div>
                   
                </div>

            </div>

        </div>

    </div>
    
    </>
  )
}

export default LimitCarusel