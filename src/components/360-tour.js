import React from 'react'
import styles from "./360-tour.module.css"

const demos = {
    thetour:
      '<iframe src="https://www.google.com/maps/embed?pb=!4v1581633925738!6m8!1m7!1sF%3A-EKkdYXyEVzU%2FWam5lk0AjoI%2FAAAAAAAE_RI%2FyxRaIzTkvJE3qPRIPeSWRD0KYgWgZqjXQCLIBGAYYCw!2m2!1d51.13316556008218!2d0.268094068412438!3f222.5403171030599!4f2.706165346802365!5f0.7820865974627469" width="1100" height="700" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'
  };

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

const Tour = () =>  (
    <div className={styles.container}>
        <div className={styles.tourContainer}>
        <Iframe iframe={demos["thetour"]} allow="autoplay" />
        </div>
    </div>
)

export default Tour