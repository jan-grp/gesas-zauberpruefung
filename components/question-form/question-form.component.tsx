import { FC } from 'react'
import { MultipleChoiceQuestion, SpellQuestion } from '../../quests'

import QuestionIntro from '../question-intro/question-intro.component'

type QuestionFormTypes = {
    question: MultipleChoiceQuestion | SpellQuestion
}

const QuestionForm: FC<QuestionFormTypes> = ({
    question
}) => {
    if(question.type === "multipleChoice") {

        return(
            <div>
                <QuestionIntro>
                    {question.title}
                </QuestionIntro>
    
                <form>
    
                </form>
            </div>
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