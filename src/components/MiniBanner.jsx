import React from 'react'
import minibanner from '../UI/minibanner.module.css'
import free from '../assets/icon/box-tick.png'
import crown from '../assets/icon/crown.png'
import security from '../assets/icon/shield-security.png'
function MiniBanner() {
  return (
    <>
    <div className={minibanner.container}>
        <div className={minibanner.bigdiv}>
            <div className={minibanner.minidiv}>
                <img src={free}/>
                <div>
                    <h4>Free delivery</h4>
                    <p>on order above $50,00</p>
                </div>

            </div>
            <div className={minibanner.minidiv}>
                <img src={crown}/>
                <div>
                    <h4>Best quality </h4>
                    <p>best quality in low price</p>
                </div>

            </div>
            <div className={minibanner.minidiv}>
                <img src={security}/>
                <div>
                    <h4>1 year warranty</h4>
                    <p>Avaliable warranty</p>
                </div>

            </div>

        </div>

    </div>
    
    </>
  )
}

export default MiniBanner