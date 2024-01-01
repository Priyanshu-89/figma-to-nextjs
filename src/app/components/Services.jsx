import styles from './Services.module.css'

function Services() {
    return (
        <>

            <div className={styles.servicesCont}>
            <div className={styles.ser}>Our Services</div>
                <div className={styles.servicesCard}>
                    <div className={styles.card1}>
                        <div className={styles.icon}>
                            <img src="/images/cell-phone 1.png" alt="" />
                        </div>
                        <h2 className={styles.heading}>
                            Mobile Application Development
                        </h2>
                        <p className={styles.para1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique euismod ipsum.
                        </p>
                        <div className={styles.btn1}>
                            <button className={styles.btn}>
                                Explore
                            </button>
                            <img src="/images/arrow.png" alt="" />
                        </div>
                    </div>

                    <div className={styles.card1}>
                        <div className={styles.icon}>
                            <img src="/images/Frame.png" alt="" />
                        </div>
                        <h2 className={styles.heading}>
                            Web Application Development
                        </h2>
                        <p className={styles.para1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique euismod ipsum.
                        </p>
                        <div className={styles.btn1}>
                            <button className={styles.btn}>
                                Explore
                            </button>
                            <img src="/images/arrow.png" alt="" />
                        </div>
                    </div>


                    <div className={styles.card1}>
                        <div className={styles.icon}>
                            <img src="/images/cell-phone 1.png" alt="" />
                        </div>
                        <h2 className={styles.heading}>
                            User Interface & User Experince Design
                        </h2>
                        <p className={styles.para1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique euismod ipsum.
                        </p>
                        <div className={styles.btn1}>
                            <button className={styles.btn}>
                                Explore
                            </button>
                            <img src="/images/arrow.png" alt="" />
                        </div>
                    </div>


                </div>


                <div className={styles.servicesCard}>
                    <div className={styles.card1}>
                        <div className={styles.icon}>
                            <img src="/images/Vector.png" alt="" />
                        </div>
                        <h2 className={styles.heading}>
                        IoT Application Development
                        </h2>
                        <p className={styles.para1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique euismod ipsum.
                        </p>
                        <div className={styles.btn1}>
                            <button className={styles.btn}>
                                Explore
                            </button>
                            <img src="/images/arrow.png" alt="" />
                        </div>
                    </div>

                    <div className={styles.card1}>
                        <div className={styles.icon}>
                            <img src="/images/cell-phone 1.png" alt="" />
                        </div>
                        <h2 className={styles.heading}>
                        Voice Services - Alexa and Google Actions
                        </h2>
                        <p className={styles.para1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique euismod ipsum.
                        </p>
                        <div className={styles.btn1}>
                            <button className={styles.btn}>
                                Explore
                            </button>
                            <img src="/images/arrow.png" alt="" />
                        </div>
                    </div>


                    <div className={styles.card1}>
                        <div className={styles.icon}>
                            <img src="/images/cell-phone 1.png" alt="" />
                        </div>
                        <h2 className={styles.heading}>
                            User Interface & User Experince Design
                        </h2>
                        <p className={styles.para1}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique euismod ipsum.
                        </p>
                        <div className={styles.btn1}>
                            <button className={styles.btn}>
                                Explore
                            </button>
                            <img src="/images/arrow.png" alt="" />
                        </div>
                    </div>

                  
                </div>
               
                <div className={styles.exploreBtn}>
                <button className={styles.explore}>
                                Explore all
                               
                            </button>
                            <img src="/images/arrow.png" alt="" />
                </div>       
            </div >
        </>
    )
}

export default Services