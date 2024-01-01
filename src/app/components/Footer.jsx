import styles from './Footer.module.css'
import React from 'react'

function Footer() {
    return (
        <div>
            <div className={styles.Footer}>
                <div className={styles.quick}>
                    <div className={styles.qucik_con}>
                        <img className={styles.image} src="/images/iden.png" alt="" />
                        <p className={styles.para}>A versatile team with eight years of excellence in various industries and turn your business ideas into a successful product/solution. </p>
                        <div className={styles.icons}>
                            <img src="/images/Facebook.png" alt="" />
                            <img src="/images/Twitter.png" alt="" />
                            <img src="/images/Linkedin.png" alt="" />
                            <img src="/images/Youtube.png" alt="" />
                        </div>
                    </div>

                    <div className={styles.reach}>
                        <h3 className={styles.head}>Reach us</h3>
                        <div className={styles.email}>
                            <img src="/images/email-icon.png" alt="" />
                            <p className={styles.el}>sales@cumulations.com</p>
                        </div>
                        <div className={styles.usa}>
                            <h3 className={styles.uni}>USA</h3>
                            <p className={styles.santa}> 410 E Santa Clara Street</p>
                            <p className={styles.santa}>Unit #561</p>
                            <p className={styles.santa}>San Jose, CA 95113</p>
                            <p className={styles.mob}>+1-408-6220434</p>

                        </div>
                        <div className={styles.india}>
                            <h3 className={styles.uni}>INDIA</h3>
                            <p className={styles.santa}>#2, 601/B, 5th Floor</p>
                            <p className={styles.santa}>Sriven Rag Landmark,</p>
                            <p className={styles.santa}>Wilson Garden, Hosur Road,</p>
                            <p className={styles.santa}>Bengaluru - 560027</p>
                            <p className={styles.mob}>+91-984-5825982</p>
                        </div>

                    </div>

                    <div className={styles.reach}>
                        <h3 className={styles.head}>Services</h3>
                        <div className={styles.usa}>
                            <h3 className={styles.services}>Backend Development</h3>
                            <h3 className={styles.services}>UI/UX Design Services</h3>
                            <h3 className={styles.services}>IoT Application Development</h3>
                            <h3 className={styles.services}>Alexa Skill Development</h3>
                            <h3 className={styles.services}>Mobile App Development</h3>
                            <h3 className={styles.services}>Web App Development</h3>
                            <h3 className={styles.services}>Cross Platform App Development</h3>
                            <h3 className={styles.services}>IT Consulting</h3>
                        </div>
                    </div>

                    <div className={styles.reach}>
                        <h3 className={styles.head}>Quick Links</h3>
                        <div className={styles.usa}>
                            <h3 className={styles.services}>Portfolio</h3>
                            <h3 className={styles.services}>Blogs</h3>
                            <h3 className={styles.services}>About us</h3>
                            <h3 className={styles.services}>Media Coverage</h3>
                            <h3 className={styles.services}>Career</h3>

                            <h3 className={styles.services}>Write for us</h3>
                        </div>
                    </div>
                    <div className={styles.reach}>
                    <img className={styles.img1} src="/images/Shape.png" alt="" />
                </div>
                </div>
               
                <div className={styles.lower}>
                <p>© 2020 Cumulations Technologies. All rights reserved</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Sitemap</p>
                <p>Disclaimer</p>
            </div>
            </div>
            
        </div>
    )
}

export default Footer