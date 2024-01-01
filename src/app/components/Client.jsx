import React from 'react'
import styles from './Client.module.css'

function Client() {
    return (
        <>
            <div className={styles.client}>
                <h1 className={styles.font}>
                    Our Client
                </h1>
                <div className={styles.micro}>
                    <img src="images/Microsoft Logo.png" alt="" />
                </div>

                <div className={styles.google}>
                    <img src="images/Google Logo.png" alt="" />
                    <div className={styles.oyo}>
                        <img src="images/OYO Logo.png" alt="" />
                    </div>
                </div>

                <div className={styles.amazon}>
                    <img src="images/Airbnb Logo.png" alt="" />
                    <div className={styles.fedex}>
                        <img src="images/FedEx Logo.png" alt="" />
                    </div>

                    <div className={styles.ama}>
                        <img src="images/Amazon Logo.png" alt="" />
                    </div>
                </div>

                <div className={styles.book}>
                        <img src="images/BookMyShow Logo.png" alt="" />
                        <img src="images/OLA logo.png" alt="" />
                </div>
                <div className={styles.mart}>
                    <img src="images/Walmart Logo.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Client