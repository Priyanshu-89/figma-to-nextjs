import styles from './About.module.css'
import React from 'react'

function About() {
  return (
    <div>
        <div className={styles.about}>
          <img src="/images/mob.jpg" alt="" />
         <div>
         <h2 className={styles.head2}>Most Trusted Mobile App Development Company</h2>
         <p className={styles.para2}>
         Cumulations Technologies is one of the best enterprise mobile application development companies in Bangalore. Our expertise lies in building IoT, Android, and iOS applications supported by a strong cloud-based backend infrastructure. </p>
<p className={styles.para3}>
Mobile apps have become a need rather than a luxury. These apps are expected to generate $189 billion in revenue by 2020. At Cumulations, we are technology leaders in the arena of mobile applications development. Recognized amongst the top 5 mobile app development companies, we are experts in the development of mobile apps for B2B, B2C & B2E b have delivered high-quality products with 100% customer satisfaction. We differentiate ourselves with other mobile app development companies in Bangalore in terms of delivering a high-quality product with world-class UI/UX.</p>

<button className={styles.btn}>Read More</button>
        
         </div>

        </div>
    </div>
  )
}

export default About