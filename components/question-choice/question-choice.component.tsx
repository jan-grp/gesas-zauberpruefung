import { FC } from 'react'
import { Text } from '@nextui-org/react'
import styles from './question-choice.module.scss'
import { BsCheck2All } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'

type QuestionChoiceProps = {
    children: string
    state: "unselected" | "wrong" | "correct"
    selectChoice: () => void
}

const QuestionChoice: FC<QuestionChoiceProps> = ({
    children,
    state,
    selectChoice,
}) => {

    return(
        <div 
            className={
                state === "unselected" ? styles.choiceContainer
                : state === "wrong" ? styles.wrongChoiceContainer
                : styles.correctChoiceContainer
            } 
            onClick={selectChoice}
        >
            <Text 
                h4
                css={{ color: '#fff' }}
            >
                { children }
            </Text>

            {
                state === "correct" ? <BsCheck2All size={23} color="#ffffff"/>
                : state === "wrong" ? <IoCloseSharp size={23} color="#d60137"/>
                : <BsCheck2All size={23} color="#4e4e4e"/>
            }
        </div>
    )
}

export default QuestionChoice