import React from "react"
import styles from "./footer.module.css"
import Logo from "../images/Footer logo.svg"
import FBIcon from "../images/fb icon.svg"
import InstaIcon from "../images/insta icon.svg"

const Footer = () => (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img className={styles.footerLogo} src={Logo} alt="logo"/>
                <div className={styles.social}>
                    <a href="https://www.facebook.com/Floorz-Hardwood-Flooring-167570883308006/"><img src={FBIcon} alt="facebook icon"/></a>
                    <a href="https://www.facebook.com/Floorz-Hardwood-Flooring-167570883308006/"><img src={InstaIcon} alt="instagram icon"/></a>
                </div>
            </div>
        </div>
)

export default Footer