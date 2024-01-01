import styles from './Achive.module.css'
import React from 'react'

function Achive() {
  return (
    <div>
<div className={styles.Achive}>
    <h1 className={styles.heading}>Some of our noteworthy achievements</h1>
    <div className={styles.images}>
    <img className={styles.img}src="/images/1.png" alt="" />
    <img className={styles.img}src="/images/2.png" alt="" />
    <img className={styles.img}src="/images/3.png" alt="" />
    <img className={styles.img}src="/images/4.png" alt="" />
    <img className={styles.img}src="/images/5.png" alt="" />
    <img className={styles.img}src="/images/6.png" alt="" />
    </div>
   
</div>
    </div>
  )
}

export default Achive