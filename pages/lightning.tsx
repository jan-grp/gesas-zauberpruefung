import type { NextPage } from 'next'
import styles from '../styles/lightning.module.scss'

import stormBackground from '../public/storm.mp4'

const Lightning: NextPage = () => {

    
    return(
        <div className={styles.videoContainer}>
            <video autoPlay muted loop  className={styles.video}>
                <source src="/storm.mp4" type="video/mp4" />
            </video>
            <div className={styles.content}>
                <h1>Bist du bereit?</h1>
            </div>
        </div>
    )
}

export default Lightning