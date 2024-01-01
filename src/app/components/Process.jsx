import styles from './Process.module.css'

function Process() {
    return (
        <>
            <div className={styles.process}>
                <div className={styles.heading}>
                    <h1>The Process we follow</h1>
                </div>
                <div className={styles.flow}>
                    <div className={styles.card1}>
                        <div className={styles.linehead}>
                            <img src="/images/Ideate.png" alt="" />
                            <div className={styles.line}></div>
                        </div>
                        <h2 className={styles.head}>Ideate</h2>
                        <p className={styles.para}>Turn your idea from concept to MVP</p>
                    </div>

                    <div className={styles.card2}>
                        <div className={styles.linehead}>
                            <img src="/images/Design.png" alt="" />
                            <div className={styles.line}></div>
                        </div>
                        <h2 className={styles.head}>Design</h2>
                        <p className={styles.para}>Sketch out the product to align the user needs</p>
                    </div>

                    <div className={styles.card3}>
                        <div className={styles.linehead}>
                            <img src="/images/Development.png" alt="" />
                            <div className={styles.line}></div>
                        </div>
                        <h2 className={styles.head}>Develop</h2>
                        <p className={styles.para}>Convert the designs in to a live application</p>
                    </div>

                    <div className={styles.card4}>
                        <div className={styles.linehead}>
                            <img src="/images/Deploy.png" alt="" />
                        </div>
                        <h2 className={styles.head}>Deploy</h2>

                        <p className={styles.para}>Launching the application to the market </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Process