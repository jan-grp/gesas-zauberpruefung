import { FC, useState, ChangeEvent, useEffect } from 'react'
import { MultipleChoiceQuestion, SpellQuestion } from '../../quests'
import { Button, Text, FormElement } from '@nextui-org/react'
import styles from './question-form.module.scss'

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
    const defaultSelectionState: ("unselected" | "correct" | "wrong")[] = ["unselected", "unselected", "unselected", "unselected"]
    const [selectionState, setSelectionState] = useState<typeof defaultSelectionState>(defaultSelectionState)
    const [isSpellInputCorrect, setIsSpellInputCorrect] = useState<boolean | undefined>(undefined)

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

    if(question.type === "multipleChoice") {
        const selectChoice = (index: number) => {
            if(selectionState.includes("correct")) return
            if(index === question.correctAnswerIndex) {
                const resetedState = defaultSelectionState
                resetedState[index] = "correct"
                setSelectionState(resetedState)
                increaseProgress()
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
                {
                    selectionState.includes("correct") ? <Button 
                        color="gradient"
                        css={{ letterSpacing: .6, marginLeft: "auto", marginRight: "auto", margintop: 20 }}
                        onPress={goToNextQuestion}
                        size="lg"
                    >
                        <Text h4 css={{ color: '#fff' }}>Nächste Aufgabe</Text>
                    </Button>
                    : selectionState.includes("wrong") && <Text h5 css={{ color: '#fff', margin: 0, padding: 0 }}>
                        Hm, das musst du wohl nochmal versuchen...
                    </Text>                        
                }
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
                    goToNextQuestion={goToNextQuestion} 
                    progressState={progressState}
                >
                    {question.scenario}
                </SpellScenario>
            </>
        )
    }

    return <div />
}

export default QuestionForm