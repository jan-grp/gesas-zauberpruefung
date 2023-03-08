import { FC } from "react"
import { Text, Tooltip, SimpleColors } from '@nextui-org/react'
import Lottie from 'lottie-react'

import Wizard from '../../public/12689-wyzard.json'

type QuestionIntroTypes = {
    children: string
    color?: SimpleColors
}

const QuestionIntro: FC<QuestionIntroTypes> = ({
    children,
    color
}) => {

    return(
        <div>
            <Tooltip
                color={color ?? "primary"}
                content={children}
                trigger="click"
                placement="right"
                visible
                initialVisible
                offset={-40}
                css={{ marginRight: 15 }}
                leaveDelay={10000000}
            >
                <Lottie 
                    style={{ height: 150, padding: 0 }}
                    animationData={Wizard} 
                    loop 
                />
            </Tooltip>
        </div>
    )
}

export default QuestionIntro