import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.scss'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

// components
import Intro from '../components/intro/intro'

type HomeProps = {
}

const Home: NextPage<HomeProps> = () => {
  const router = useRouter()

  useEffect(() => {
    const hasFinishedQuests = Cookies.get("hasFinishedQuests")
    if(hasFinishedQuests) router.push("/rewards")
  }, [router])
  
  return (
    <>
      <Head>
        <title>bereit?</title>
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
