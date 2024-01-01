import styles from './Follow.module.css'
import React from 'react'

function Follow() {
  return (
    <div>
        <div className={styles.follow}>
            <h3 className={styles.heading}>
            Agile Development Process Followed in Our Mobile App Development Company in Bangalore
            </h3>
            <div className={styles.main}>
                <div className={styles.content}>
                  <div className={styles.image}>
                  <img src="/images/minicircle.png" alt="" />
                  <div className={styles.line}></div>
                  </div>
                 
                <h1 className={styles.myheading}>Pre-development</h1>
                <p className={styles.para}>We begin the process of mobile app development by discovering the project goals and requirements of our clients. We take into account the client’s idea and validate it to ensure viability. We also prepare an extensive app development project plan that includes determining the most suitable technology stack and finalizing a well-thought-out system architecture.</p>
                </div>

                <div className={styles.content}>
                <div className={styles.image}>
                  <img src="/images/minicircle.png" alt="" />
                  <div className={styles.line}></div>
                  </div>
                <h1 className={styles.myheading}>Development</h1>
                <p className={styles.para}>We begin the process of mobile app development by discovering the project goals and requirements of our clients. We take into account the client’s idea and validate it to ensure viability. We also prepare an extensive app development project plan that includes determining the most suitable technology stack and finalizing a well-thought-out system architecture.</p>
                </div>

                <div className={styles.content}>
                <div className={styles.image}>
                  <img src="/images/minicircle.png" alt="" />
                  <div className={styles.line}></div>
                  </div>
                <h1 className={styles.myheading}>Post-development</h1>
                <p className={styles.para}>We begin the process of mobile app development by discovering the project goals and requirements of our clients. We take into account the client’s idea and validate it to ensure viability. We also prepare an extensive app development project plan that includes determining the most suitable technology stack and finalizing a well-thought-out system architecture.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Follow