import React from 'react'
import styles from "./our-history.module.css"
import Showroom from "../images/showroom.jpg"
import Sig from "../images/The Floorz Team.svg"

const OurHistory = () =>  (
    <div className={styles.background}>
        <div className={styles.container}>
            <img className={styles.showroom} src={Showroom} alt="Floorz Showroom"></img>
            <div className={styles.text}>
                <h2 className={styles.title}>Our History</h2>
                    <p>Nulla sed egestas justo. Suspendisse vel rhoncus justo. Ut eleifend gravida lacus pellentesque gravida. Fusce viverra elit nec massa porttitor, sit amet molestie tortor egestas. Aliquam erat volutpat. Mauris imperdiet, augue ut volutpat rhoncus, urna turpis sodales ligula, nec mollis sapien magna et tellus. Aliquam aliquet mi sit amet ipsum laoreet porta.</p>
                    <img className={styles.sig} src={Sig} alt="The Floorz Team"></img>
            </div>
        </div>
    </div>
)

export default OurHistory