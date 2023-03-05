import { FC, useState } from 'react'
import { MultipleChoiceQuestion, SpellQuestion } from '../../quests'
import { Button, Text } from '@nextui-org/react'
import styles from './question-form.module.scss'

import QuestionIntro from '../question-intro/question-intro.component'
import QuestionText from '../question-text/question-text.component'
import QuestionChoice from '../question-choice/question-choice.component'

type QuestionFormTypes = {
    question: MultipleChoiceQuestion | SpellQuestion
}

const QuestionForm: FC<QuestionFormTypes> = ({
    question
}) => {
    const defaultSelectionState: ("unselected" | "correct" | "wrong")[] = ["unselected", "unselected", "unselected", "unselected"]
    const [selectionState, setSelectionState] = useState<typeof defaultSelectionState>(defaultSelectionState)


    if(question.type === "multipleChoice") {
        const selectChoice = (index: number) => {
            if(selectionState.includes("correct")) return
            if(index === question.correctAnswerIndex) {
                const resetedState = defaultSelectionState
                resetedState[index] = "correct"
                setSelectionState(resetedState)
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

                    {
                        selectionState.includes("correct") ? <Button 
                            color="gradient"
                            css={{ letterSpacing: .6 }}
                        >
                            <Text h4 css={{ color: '#fff' }}>Nächste Aufgabe</Text>
                        </Button>
                        : selectionState.includes("wrong") && <Text h5 css={{ color: '#fff', margin: 0, padding: 0 }}>
                            Hm, das musst du wohl nochmal versuchen...
                        </Text>                        
                    }
                </div>
            </>
        )
    }

    if(question.type === "spell") {
        return(
            <div>
                <QuestionIntro>
                    Mal schauen, ob du auch alle wichtigen Zaubersprüche drauf hast!
                </QuestionIntro>
    
                <form>

                </form>
            </div>
        )
    }

    return <div />
}

export default QuestionForm