import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.scss'

// components
import Intro from '../components/intro/intro'

type HomeProps = {
}

const Home: NextPage<HomeProps> = ({
}) => {
  return (
    <>
      <Head>
        <title>ready?</title>
      </Head>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop  className={styles.video}>
          <source src="/storm_720.mp4" type="video/mp4" />
        </video>
        <div className={styles.content}>
          <Intro />
        </div>
      </div>
    </>
  )
}

export default Home
