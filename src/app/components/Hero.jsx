import React from 'react'
import styles from './Hero.module.css'
import Banner from './Banner'
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>
          We build digital products with user-centered design.
        </h1>
        <p>Leading digital agency with eight years of excellence in various industries. We build websites, mobile apps, and more enterprise services.</p>
      
      </div>
      <Banner />
    </div>

  )
}

export default Hero