import React from 'react'
import styles from "./importing-card.modules.css"

const ImportingCard = (props) =>  (
    <div className={styles.card}>
        <p className={styles.text}>
        {props.cardText}
        </p>
        <a href={props.supplierLink} className={styles.supplierlink}>
        {props.supplierLinkText}
        </a>
        <div className={styles.cardimages}>
        <img src={props.closeUp1} alt=""/>
        <img src={props.closeUp2} alt=""/>
        <img src={props.closeUp3} alt=""/>
        </div>
    </div>
)

export default ImportingCard