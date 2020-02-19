import React from 'react'
import styles from "./importing.module.css"
import Dennebos1 from "../images/Dennebos 1.jpg"
import Dennebos2 from "../images/Dennebos 2.jpg"
import Dennebos3 from "../images/Dennebos 3.jpg"
import Bohemia1 from "../images/Bohemia Collection 1.jpg"
import Bohemia2 from "../images/Bohemia Collection 2.jpg"
import Bohemia3 from "../images/Bohemia Collection 3.jpg"

const Importing = () =>  (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>Importing</h2>
            <p>Aliquam erat volutpat. Cras at enim vitae felis mollis maximus eget ut arcu. Maecenas bibendum.</p>
        </div>
        <div className={styles.cardContainer}>
            <article className={styles.card}>
                <p className={styles.text}>
                Aliquam erat volutpat. Cras at enim vitae felis mollis maximus eget ut arcu. Maecenas bibendum consectetur arcu placerat ornare. Vivamus massa orci, sodales non volutpat sit amet, imperdiet eget felis.
                </p>
                <a href="https://www.dennebosflooring.com/" className={styles.supplierlink}>View the full range at dennebosflooring.com</a>
                <div className={styles.cardimages}>
                    <img src={Dennebos1} alt=""/>
                    <img src={Dennebos2} alt=""/>
                    <img src={Dennebos3} alt=""/>
                </div>
            </article>

            <article className={styles.card}>
                <p className={styles.text}>
                imperdiet eget felis. Ut in elit vel felis consectetur fermentum pellentesque blandit libero. Sed lacus sem, vestibulum aliquet nisi nec, pharetra rhoncus tortor.. Vivamus massa orci, sodales non volutpat sit amet.
                </p>
                <a href="http://www.bohemianworks.com/" className={styles.supplierlink}>View the full range at bohemianworks.com</a>
                <div className={styles.cardimages}>
                    <img src={Bohemia1} alt=""/>
                    <img src={Bohemia2} alt=""/>
                    <img src={Bohemia3} alt=""/>
                </div>
            </article>
        </div>
    </div>
)

export default Importing