import React from 'react'
import tech from '../UI/spacingtech.module.css'
import tech1 from '../assets/image/brand-4.png'
import tech2 from '../assets/image/brand-5.png'
import tech3 from '../assets/image/brand-6.png'
import tech4 from '../assets/image/brand-7.png'
import tech5 from '../assets/image/brand-8.png'

function Spacingtech() {
  return (
    <>
    <div className={tech.container}>
        <div className={tech.bigdiv}>
            {/* <div className={tech.minidiv}> */}
                <img src={tech1}/>
                <img src={tech2}/>
                <img src={tech3}/>
                <img src={tech4}/>
                <img src={tech5}/>

            {/* </div> */}

        </div>

    </div>
    
    </>
  )
}

export default Spacingtech