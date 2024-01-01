import styles from './Insights.module.css'
import React from 'react'

function Insights() {
  return (
    <div>
      <div className={styles.Insights}>
        <h1 className={styles.heading1}>Our insights from experience</h1>
        <div className={styles.container}>
          <div className={styles.card}>
            <img className={styles.image} src="/images/banner1.png" alt="" />
            <h2 className={styles.heading}>Best Mobile App Design Tools of 2020</h2>
            <p className={styles.para}>Automotive manufacturers and companies are not quite speedy in the adoption of new technologies...</p>
            <div className={styles.btnmain}>
              <button className={styles.btn}>READ MORE</button>
              <img src="/images/arrow.png" alt="" />
            </div>

          </div>
         
          <div className={styles.card}>
            <img className={styles.image} src="/images/banner2.png" alt="" />
            <h2 className={styles.heading}>Best Mobile App Design Tools of 2020</h2>
            <p className={styles.para}>Automotive manufacturers and companies are not quite speedy in the adoption of new technologies...</p>
            <div className={styles.btnmain}>
              <button className={styles.btn}>READ MORE</button>
              <img src="/images/arrow.png" alt="" />
            </div>

          </div>

          <div className={styles.card}>
            <img className={styles.image} src="/images/banner3.png" alt="" />
            <h2 className={styles.heading}>Best Mobile App Design Tools of 2020</h2>
            <p className={styles.para}>Automotive manufacturers and companies are not quite speedy in the adoption of new technologies...</p>
            <div className={styles.btnmain}>
              <button className={styles.btn}>READ MORE</button>
              <img src="/images/arrow.png" alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights