import { FC } from 'react'
import { Text, Button } from '@nextui-org/react'
import { BsCheck2All } from 'react-icons/bs'

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
        <Button
            css={{
                background: `${
                    state === "unselected" ? "#4e4e4e" 
                    : state === "wrong" ? "#d60137" 
                    : "#14A452"
                }`,
                display: "flex",
                justifyContent: "space-between",
            }}
            auto
            iconRight={
                state === "correct" ? <BsCheck2All size={23} color="#ffffff"/>
                : <BsCheck2All size={23} color="transparent"/>
            }
            size="xl"
            onPress={selectChoice}
        >
            <Text 
                h4
                css={{ color: '#fff'}}
            >
                { children }
            </Text>


        </Button>
    )
}

export default QuestionChoice