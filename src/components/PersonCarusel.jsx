import React from 'react'
import person from '../UI/person.module.css'
import personImg1 from '../assets/image/Ellipse 4 (1).png'
import personImg2 from '../assets/image/Ellipse 4 (2).png'
import personImg3 from '../assets/image/Ellipse 4 (3).png'

function PersonCarusel() {
  return (
    <>
    <div className={person.container}>
        <div className={person.bigdiv}>
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
        </div>

    </div>
    </>
  )
}

export default PersonCarusel