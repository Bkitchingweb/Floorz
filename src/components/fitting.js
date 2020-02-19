import React from 'react'
import styles from "./fitting.module.css"
import FittingImage from "../images/fitting image.jpg"

const Fitting = () =>  (
    <div className={styles.container}>
        <div className={styles.textContainer}>
        <div className={styles.text}>
            <h2>Fitting</h2>
            <p>Aliquam erat volutpat. Cras at enim vitae felis mollis maximus eget ut arcu. Maecenas bibendum consectetur arcu placerat ornare. Vivamus massa orci, sodales non volutpat sit amet, imperdiet eget felis. Ut in elit vel felis consectetur fermentum pellentesque blandit libero. Sed lacus sem, vestibulum aliquet nisi nec, pharetra rhoncus tortor.</p>
            <a href="https://www.dennebosflooring.com/" className={styles.contactLink}>Contact us</a>
        </div>
        </div>
        <div className={styles.imageContainer}>
                    <img className={styles.fittingImageImg} src={FittingImage} alt="Floorz Top Down"/>
        </div>
    </div>
)

export default Fitting