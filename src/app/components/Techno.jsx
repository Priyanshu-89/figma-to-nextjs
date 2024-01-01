import styles from './Techno.module.css'
import React from 'react'

function Techno() {
  return (
    <div>
        <div className={styles.techno}>
            <h2 className={styles.work}>Technologies we work on</h2>
            <div className={styles.images}>
                <img src="/images/fluter.png" alt="" />
                <img src="/images/node.png" alt="" />
                <img src="/images/sal.png" alt="" />
                <img src="/images/python.png" alt="" />
                <img src="/images/dia.png" alt="" />
                <img src="/images/vue.png" alt="" />
                <img src="/images/react.png" alt="" />
                <img src="/images/and.png" alt="" />
                {/* <img src="/images/fluter.png" alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default Techno