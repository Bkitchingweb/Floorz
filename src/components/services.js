import React from 'react'
import styles from "./services.module.css"
import heatingIcon from "../images/therm.png"
import stainIcon from "../images/colour.png"
import otherIcon from "../images/oil.png"


const Services = () =>  (
    <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>
        <div className={styles.cardContainer}>
            <article className={styles.card}>
                <img className={styles.icon} src={heatingIcon}></img>
                <h2>Underfloor Heating</h2>
                <p>Aliquam semper pretium libero ac placerat. Nulla rutrum rhoncus orci, ut imperdiet enim venenatis ac. Curabitur a ante ornare, tincidunt elit at, tincidunt ipsum.</p>
            </article>
            <article className={styles.card}>
                <img className={styles.icon} src={stainIcon}></img>
                <h2>Staining</h2>
                <p>Donec et augue tristique, porttitor sapien vitae, pellentesque ligula. Quisque ac interdum sapien, vehicula lobortis justo. Etiam quis viverra elit.</p>
            </article>
            <article className={styles.card}>
                <img className={styles.icon} src={otherIcon}></img>
                <h2>TBC</h2>
                <p>Nunc vel justo egestas, volutpat neque sed, mattis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </article>
        </div>
    </div>
)

export default Services