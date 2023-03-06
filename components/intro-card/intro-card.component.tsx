import { Card, Text } from "@nextui-org/react"
import { FC } from "react"
import styles from './intro-card.module.scss'

type IntroCardProps = {
    children: string
}

const IntroCard: FC<IntroCardProps> = ({
    children
}) => {

    return(
        <div className={styles.cardContainer}>
            <Text
                css={{
                    color: '#ffffffc1'
                }}
                    h5
            >
                { children }
            </Text>
        </div>
    )
}

export default IntroCard