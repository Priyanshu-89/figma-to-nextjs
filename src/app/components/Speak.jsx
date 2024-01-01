import styles from './Speak.module.css'

function Speak() {
  return (
    <>
      <div className={styles.clientCon}>
        <div className={styles.heading}>
          <h1>
            Our clients speak
          </h1>
          <img src="/images/colon.png" alt="" />
        </div>
       
          <div className={styles.testimonials}>
            <div className={styles.card}>
              <h1>Dependable, Responsive, Professional Partner</h1>
              <p>CyberCrow Apps has collaborated with Cumulations team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future. I recommend Cumulations Technologies for native and cross platform apps development projects.</p>
                  <div className={styles.line}></div>
            </div>
            {/* <div className={styles.imgCon}>
              <img src="/images/Ellipse 1.jpg" alt="" />
              <div className={styles.desc}>
                <h3>Vikas Kamat</h3>
                <p>CEO, CyberCrow Apps</p>
              </div>
            </div> */}
            <div className={styles.card}>
              <h1>Dependable, Responsive, Professional Partner</h1>
              <p>CyberCrow Apps has collaborated with Cumulations team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future. I recommend Cumulations Technologies for native and cross platform apps development projects.</p>

            </div>
            {/* <div className={styles.imgCon}>
              <img src="/images/Ellipse 1.jpg" alt="" />
              <div className={styles.desc}>
                <h3>Vikas Kamat</h3>
                <p>CEO, CyberCrow Apps</p>
              </div>
            </div> */}
          </div>
          </div>
      



      </>
      )
}

      export default Speak