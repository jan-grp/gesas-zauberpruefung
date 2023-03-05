import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useModal } from '@nextui-org/react'

import GreetingModal from '../components/greeting-modal/greeting-modal.component'
import ProgressBar from '../components/progress-bar/progress-bar.component'
import QuestionForm from '../components/question-form/question-form.component'

import { quests } from '../quests'

const Home: NextPage = () => {
  const [progressValue, setProgressValue] = useState<number>(0)
  const [indexCurrentQuestion, setIndexCurrentQuestion] = useState<number>(0)

  const { setVisible, bindings } = useModal(true);

  const handleNextQuestionRequest = () => setIndexCurrentQuestion(indexCurrentQuestion + 1)

  const increaseProgress = () => {
    const totalQuests = quests.length
    if(indexCurrentQuestion === totalQuests - 1) return setProgressValue(100)
    setProgressValue((indexCurrentQuestion+1)/totalQuests*100)
  }
  
  return (
    <div>
      <Head>
        <title>Gesas Zauberprüfung</title>
      </Head>

      <ProgressBar value={progressValue} />

      <QuestionForm 
        question={quests[indexCurrentQuestion]}
        loadNextQuestion={handleNextQuestionRequest}
        progressState={progressValue}
        increaseProgress={increaseProgress}
      />

      <GreetingModal 
        bindings={bindings}
        setVisible={setVisible}
      />
    </div>
  )
}

export default Home
