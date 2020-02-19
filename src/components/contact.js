import React from 'react'
import styles from "./contact.module.css"

const Map = {
    themap:
      '<iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyz_n6y1E30cRFkI_uVmvrtM&key=AIzaSyBEVoQWjcSlpEOBz3WYnTiZRcVropU_dPQ" width="100%" height="750" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
  };

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

const Contact = () =>  (
    <div className={styles.container}>
        <div className={styles.mapContainer}>
            <Iframe iframe={Map["themap"]} allow="autoplay" />
        </div>
        <div className={styles.text}>
            <h2>Get in Touch</h2>
            <p> In finibus vulputate massa. Duis sed arcu nisl. In at bibendum urna. Curabitur tristique quis enim at posuere.</p>
            <ul className={styles.address}>
                <li>77 Calverly Rd</li>
                <li>Tunbridge Wells</li>
                <li>Kent</li>
                <li>TN1 2UY</li>
            </ul>
            <p className={styles.email}>info@floorz.co.uk</p>
            <p className={styles.phone}>01892 516638</p>
        </div>
        <div className={styles.block}></div>
        </div>
)

export default Contact