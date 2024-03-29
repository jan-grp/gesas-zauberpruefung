import { FC, useState, useRef, useEffect} from 'react'
import { MultipleChoiceQuestion, SpellQuestion } from '../../quests'
import { Button, Loading, Text } from '@nextui-org/react'
import styles from './question-form.module.scss'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

// utils
import { isCloseEnough } from '../../utils/utils'

// components
import QuestionIntro from '../question-intro/question-intro.component'
import QuestionText from '../question-text/question-text.component'
import QuestionChoice from '../question-choice/question-choice.component'
import SpellScenario from '../spell-scenario/spell-scenario.componen'

type QuestionFormTypes = {
    question: MultipleChoiceQuestion | SpellQuestion
    loadNextQuestion: () => void
    progressState: number
    increaseProgress: () => void
}

const QuestionForm: FC<QuestionFormTypes> = ({
    question,
    loadNextQuestion,
    progressState,
    increaseProgress
}) => {
    const router = useRouter()
    const defaultSelectionState: ("unselected" | "correct" | "wrong")[] = ["unselected", "unselected", "unselected", "unselected"]
    const [selectionState, setSelectionState] = useState<typeof defaultSelectionState>(defaultSelectionState)
    const [isSpellInputCorrect, setIsSpellInputCorrect] = useState<boolean | undefined>(undefined)
    const [isNimbusVisible, setIsNimbusVisible] = useState<boolean>(false)

    const goToNextQuestion = () => {
        if(question.type === "multipleChoice") {
            setSelectionState(defaultSelectionState)
            return loadNextQuestion()
        }

        const inputElement = document.getElementById("spellInput") as HTMLInputElement
        inputElement.value = ""
        setIsSpellInputCorrect(undefined)
        loadNextQuestion()
    }

    useEffect(() => {
        isNimbusVisible && setTimeout(() => {
            router.push("/rewards")
        }, 1600);
    }, [isNimbusVisible, router])

    const finishQuests = () => {
        setIsNimbusVisible(true)
        Cookies.set(
            "hasFinishedQuests",
            "true",
            { expires: 365 }
        )
    }

    if(question.type === "multipleChoice") {
        const selectChoice = (index: number) => {
            if(selectionState.includes("correct")) return
            if(index === question.correctAnswerIndex) {
                const resetedState = defaultSelectionState
                resetedState[index] = "correct"
                setSelectionState(resetedState)
                increaseProgress()
                window.scrollTo(0, document.body.scrollHeight)
            } else {
                const resetedState = defaultSelectionState
                resetedState[index] = "wrong"
                setSelectionState(resetedState)
            }
        }

        return(
            <>
                <QuestionIntro>
                    {question.title}
                </QuestionIntro>
                
                <div className={styles.QuestionCard}>
                    <QuestionText>{question.question}</QuestionText>
        
                    <div className={styles.choicesContainer}>
                        {
                            question.choices.map((choice, i) => (
                                    <QuestionChoice 
                                        key={i}
                                        state={selectionState[i]}
                                        selectChoice={() => selectChoice(i)}
                                    >
                                        {choice}
                                    </QuestionChoice>
                                )
                            )
                        }
                    </div>
                </div>
                
                <div 
                    className={styles.nextQuestionBtnContainer}
                >
                    {
                        selectionState.includes("correct") && <Button 
                            color="gradient"
                            css={{ letterSpacing: .5 }}
                            onPress={goToNextQuestion}
                            size="lg"
                        >
                            <Text h4 css={{ color: '#fff' }}>Nächste Aufgabe</Text>
                        </Button>                     
                    }
                </div>
            </>
        )
    }

    if(question.type === "spell") {
        const handleSpellSubmit = () => {
            const inputElement = document.getElementById("spellInput") as HTMLInputElement
            const spellInput = inputElement.value
            
            if(isCloseEnough(spellInput, question.correctAnswer)) {
                setIsSpellInputCorrect(true)
                return increaseProgress()
            }
            setIsSpellInputCorrect(false)
        }

        return(
            <>
                <QuestionIntro>
                    Mal schauen, ob du auch alle wichtigen Zaubersprüche drauf hast!
                </QuestionIntro>
    
                <SpellScenario
                    handleSpellSubmit={handleSpellSubmit}
                    isInputCorrect={isSpellInputCorrect}
                >
                    {question.scenario}
                </SpellScenario>

                <div 
                    className={styles.nextQuestionBtnContainer}
                >
                    {
                        isSpellInputCorrect && progressState !== 100 ? <Button 
                            color="gradient"
                            css={{ letterSpacing: .5 }}
                            onPress={goToNextQuestion}
                            size="lg"
                        >
                            <Text h4 css={{ color: '#fff' }}>Nächste Aufgabe</Text>
                        </Button>
                        : progressState === 100 && <>
                            <Button 
                                color="gradient"
                                css={{ letterSpacing: .2 }}
                                onPress={finishQuests}
                                size="lg"
                                
                            >
                                {!isNimbusVisible && <Text h4 css={{ color: '#fff' }}>Magische Truhe öffnen</Text>}
                                {isNimbusVisible && <Loading type="points" color="currentColor" size="md" />}
                            </Button>
                            {isNimbusVisible && <span className={`${styles.animatedNimbus}`}>🧹</span>}
                        </>            
                    }
                </div>
            </>
        )
    }

    return <div />
}

export default QuestionForm