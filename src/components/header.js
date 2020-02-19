import React from "react"
import styles from "./header.module.css"
import Background from "../images/home-bg.svg"
import Logo from "../images/Floorz Logo.svg"
import Image from "../images/header-image.jpg"
const Header = () => (
    <div className={styles.background} style={{backgroundImage: "url(" + Background + ")"}}>
        <div className={styles.container}>
            <div className={styles.siteintro}>
                <img src={Logo} alt="logo"/>
                <h2 className={styles.subtitle}>EST. 2000</h2>
                <p className={styles.slogan}>Hardwood flooring experts with an exclusive range of the highest
                quality engineered wood.</p>
            </div>
            <img src={Image} alt="header-image"/>
        </div>
    
    </div>    
)

export default Header