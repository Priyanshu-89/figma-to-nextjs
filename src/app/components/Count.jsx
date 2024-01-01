import styles from './Count.module.css'
import React from 'react'

function Count() {
  return (
    <div>
        <div className={styles.Count}>
                <h1 className={styles.heading}>Some count that matters</h1>
                <div className={styles.count_con}>
                    <div className={styles.count}>
                        <h2 className={styles.count_head}>40+</h2>
                    <h4 className={styles.count_para}>Professionals</h4>
              
                    </div>
                    <div className={styles.count}>
                    <h2 className={styles.count_head}>3</h2>
                    <h4>Locations</h4></div>
                    <div  className={styles.count}>
                    <h2 className={styles.count_head}>8</h2>
                        <h4>Years</h4>
                    </div>
                    <div  className={styles.count}>
                    <h2 className={styles.count_head}>10+</h2>
                        <h4>Awards</h4>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Count