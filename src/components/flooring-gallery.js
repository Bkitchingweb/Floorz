import React from 'react'
import styles from "./flooring-gallery.module.css"
import Image1 from "../images/dark flooring 1.jpg"
import Image2 from "../images/dark flooring 2.jpg"
import Image3 from "../images/flooring close up.jpg"
import Image4 from "../images/flooring 1.jpg"
import Image5 from "../images/flooring 2.jpg"
import Image6 from "../images/flooring 3.jpg"

 const FlooringGallery = () =>  (
        <div className={styles.gallery}>
            <img src={Image1} alt="dark flooring 1b"/>
            <img src={Image2} alt="dark flooring 2"/>
            <img src={Image3} alt="flooring close up"/>
            <img src={Image4} alt="flooring 1"/>
            <img src={Image5} alt="flooring 2"/>
            <img src={Image6} alt="flooring 3"/>        
        </div>
    )

export default FlooringGallery