import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'

import ProgressBar from '../components/progress-bar/progress-bar.component'
import QuestionForm from '../components/question-form/question-form.component'
import Navbar from '../components/navbar/navbar.component'

import { quests } from '../quests'

type QuestsProps = {
  setHasFinishedQuests: (hasFinished: boolean) => void
}

const Quests: NextPage<QuestsProps> = ({
    setHasFinishedQuests
}) => {
    const [progressValue, setProgressValue] = useState<number>(0)
    const [indexCurrentQuestion, setIndexCurrentQuestion] = useState<number>(0)
  
    const handleNextQuestionRequest = () => setIndexCurrentQuestion(indexCurrentQuestion + 1)
  
    const increaseProgress = () => {
        const totalQuests = quests.length
        if(indexCurrentQuestion === totalQuests - 1) {
            setProgressValue(100)
            return setHasFinishedQuests(true)
        }
        setProgressValue((indexCurrentQuestion+1)/totalQuests*100)
    }

    return(
        <div>
            <Head>
                <title>Gesas Zauberprüfung</title>
            </Head>
            <Navbar />

            <ProgressBar value={progressValue} />
    
            <QuestionForm 
                question={quests[indexCurrentQuestion]}
                loadNextQuestion={handleNextQuestionRequest}
                progressState={progressValue}
                increaseProgress={increaseProgress}
            />
      </div>
    )
}

export default Quests