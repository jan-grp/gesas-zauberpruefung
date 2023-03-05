import { FC } from 'react'
import { Text } from '@nextui-org/react'

type QuestionTextProps = {
    children: string
}

const QuestionText: FC<QuestionTextProps> = ({
    children
}) => {

    return(
        <Text
            h4
            css={{ color: '#fff', padding: 0, margin: 0, }}
        >
            { children }
        </Text>
    )
}

export default QuestionText