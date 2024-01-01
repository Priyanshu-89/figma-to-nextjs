import styles from './Company.module.css'

import React from 'react'

function Company() {
  return (
    <div>
        <div className={styles.domain}>
            <h3 className={styles.heading}>Our Mobile App Development Domain Expertise</h3>
            <div className={styles.navbar}>
                <h5 className={styles.nav}>Healthcare</h5>
                <h5 className={styles.nav}>Multimedia</h5>
                <h5 className={styles.nav}>Insurance</h5>
                <h5 className={styles.nav}>Travel & Tourism</h5>
                <h5 className={styles.nav}>Manufacturing</h5>
            </div>
            <p className={styles.para}>
            Cumulations offers advanced healthcare development solutions that help our clients leverage the full potential of digital acceleration in the healthcare industry. From clinical management to efficient patient treatment and diagnosis, we are equipped to take care of your healthcare project.
            </p>
        </div>
    </div>
  )
}

export default Company