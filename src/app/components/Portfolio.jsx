import styles from './/portfolio.module.css'

import React from 'react'

function Portfolio() {
    return (
        <div>
            <div className={styles.portfolio}>
                <div className={styles.head}>
                    <h1 className={styles.h1}>Explore Our portfolio</h1>
                </div>
                <div className={styles.navbar}>
                    <h5 className={styles.nav}>Mobile App</h5>
                    <h5 className={styles.nav}>Web App</h5>
                    <h5 className={styles.nav}>IoT </h5>
                    <h5 className={styles.nav}>Google Actions</h5>
                    <h5 className={styles.nav}>Alexa Skills</h5>
                </div>
                <div className={styles.mobile}>
                    <div className={styles.temp}>
                        <div className={styles.moup}>
                            <img className={styles.logo} src="/images/moup1.png" alt="" />
                            <img className={styles.moupup} src="/images/Mobile Mockup.png" alt="" />
                            <h1 className={styles.heading}>Project Name (client name)</h1>
                        <p className={styles.para}>iOS, IoT</p>
                        </div>
                        

                        <div className={styles.moup}>
                            <img className={styles.logo} src="/images/moup1.png" alt="" />
                            <img className={styles.moupup} src="/images/Mobile Mockup.png" alt="" />
                        </div>
                        <div className={styles.moup}>
                            <img className={styles.logo} src="/images/moup1.png" alt="" />
                            <img className={styles.moupup} src="/images/Mobile Mockup.png" alt="" />
                        </div>
                    </div>
                   
                </div>
                <button className={styles.button}>View More <img src="/images/arrow.png" alt="" /></button>
            </div>

        </div>
    )
}

export default Portfolio