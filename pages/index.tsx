import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useModal } from '@nextui-org/react'

import GreetingModal from '../components/greeting-modal/greeting-modal.component'
import ProgressBar from '../components/progress-bar/progress-bar.component'
import QuestionForm from '../components/question-form/question-form.component'

import { quests } from '../quests'

const Home: NextPage = () => {
  const [hasStartedExam, setHasStartedExam] = useState<boolean>(false)
  const [progressValue, setProgressValue] = useState<number>(70)
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState<number>(0)

  const { setVisible, bindings } = useModal();

  useEffect(() => {
    if(!hasStartedExam) {
      setVisible(true)
      setHasStartedExam(true)
    }
  }, [setVisible, setHasStartedExam, hasStartedExam])
  
  return (
    <div>
      <Head>
        <title>Gesas Zauberprüfung</title>
      </Head>

      <ProgressBar value={progressValue} />

      <QuestionForm question={quests[indexCurrentQuestion]}/>

      <GreetingModal 
        bindings={bindings}
        setVisible={setVisible}
      />
    </div>
  )
}

export default Home
