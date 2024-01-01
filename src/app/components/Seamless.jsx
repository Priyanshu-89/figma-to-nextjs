import styles from './Seamless.module.css'
import React from 'react'

function Seamless() {
    return (
        <div>
            <div className={styles.Seamless}>
                <h2 className={styles.head}>Seamless mobile experience on any platform</h2>
                <p className={styles.para}>At Cumulations, we leverage the latest technologies to develop apps that are second to none. The technologies that we integrate into our custom apps are as follows:</p>
                <div className={styles.nav}>
                    <h4 className={styles.heading}>Hybrid app development</h4>
                    <h4 className={styles.heading}>Native app development</h4>

                </div>
                <div className={styles.hrs}></div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <p className={styles.mainpara}>Native mobile apps are the ones that are meant to operate on a specific mobile device or operating system. Native apps are best known for their incredible performance as they can easily use device-specific software and hardware. Our mobile app development company provides the complete life cycle of services for the development of stable, secure, and scalable native apps which are known for their advanced features and optimum speed.</p>
                        <ul>
                            <li className={styles.list}>Our high-performing apps offer the best mobile experiences that can help your business scale and reach a wider customer base.</li>
                            <li className={styles.list}>Our native app development services include designing and developing apps for Android, iOS, and Windows mobile devices. Our apps include immersive features such as 3D Touch, multitasking, Beacon technology, etc.</li>
                            <li className={styles.list}>Our native app developers strive to develop competent solutions that can enhance your business rankings.</li>
                        </ul>
                    </div>
                        <div className={styles.right}>
                            <div className={styles.app}>
                                <img src="/images/f1.png" alt="" />
                                <img src="/images/f2.png" alt="" />
                            </div>
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Seamless