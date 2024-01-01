import styles from './Asked.module.css'
import React from 'react'

function Asked() {
    return (
        <div>
            <div className={styles.Asked}>
       
                <h2 className={styles.heading}>
                    Frequently Asked Questions
                </h2>

                <div className={styles.container}>
                    <div className={styles.down}>
                <p className={styles.para}>How much time does it take to build a mobile app?</p>
                    <img src="/images/up.png" alt="" />
                </div>
                <p className={styles.content}>The exact time taken to build a mobile app depends upon several factors, such as type of app, type of features integrated, app complexity level, integration of third-party services, uniqueness of the design, etc. On average, the time taken can be around 3-6 months.</p>
                <div className={styles.hor}></div>
                <div className={styles.down}>
                    <p className={styles.para2}>What are the different types of mobile applications you can create?</p>
                    <img src="/images/down.png" alt="" />
                </div>
            </div>


        </div>
    </div >
  )
}

export default Asked