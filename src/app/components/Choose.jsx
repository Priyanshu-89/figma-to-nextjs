import styles from './Choose.module.css'
import React from 'react'

function Choose() {
    return (
        <div>
            <div className={styles.choose}>
                <h2 className={styles.heading}>Why choose us?</h2>
                <div className={styles.choose1}>
                    <div className={styles.chhose_con}>
                        <p className={styles.para}>
                            Smartphones have a great potential to build a market for your business. We help you utilize this potential to reach a larger section of customers by just a few clicks. With the help of cutting-edge technology and the use of simple to use mobile first technology, we help you expand your market by using the mobile platform at its best.
                        </p>

                        <p className={styles.para}>
                            Cumulations started its journey in 2012, as a mobile application development company in Bangalore, and has helped a wide range of organizations from startups to enterprises. In the process, we have acquired a high degree of proficiency and competency in delivering profitable, user-centric & robust end-to-end enterprise technology solutions to our customers. Our agile development philosophy ranked us as one of the top reliable mobile app development companies by our clients.
                        </p>

                        Being one of the fastest growing mobile app development companies in Bangalore, we strive
                        to delight our client with the best, most resilient & user-centric mobile apps. We work closely with you to ensure your requirements are duly met.

                    </div>
                    <div className={styles.content}>
                        <div className={styles.part2}>
                            <img className={styles.img} src="/images/noun.png" alt="" />

                            <div>
                                <h3>Quality</h3>
                                <p> We ensure you world-class mobile apps by using advanced technologies in an optimal way.</p>
                            </div>
                        </div>

                        <div className={styles.part2}>
                            <img className={styles.img} src="/images/team.png" alt="" />

                            <div>
                                <h3>User-Centric</h3>
                                <p> We understand the intent of mobile apps for your business and help to build resilient, thoughtful & user-friendly mobile solutions.</p>
                            </div>
                        </div>
                        <div className={styles.part2}>
                            <img className={styles.img} src="/images/bag.png" alt="" />

                            <div>
                                <h3>8+ Years of Experience</h3>
                                <p>Your mobile app will be developed by our seasoned engineering team who are well-versed with trending technologies. </p>
                            </div>
                        </div>
                        <div className={styles.part2}>
                            <img className={styles.img} src="/images/noun.png" alt="" />

                            <div>
                                <h3>Effective Communication & Project Management</h3>
                                <p>Our effective communication improves the relationship and resolves the conflicts for a seamless development journey. </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default Choose