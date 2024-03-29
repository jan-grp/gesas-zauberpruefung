import { Progress, Text } from '@nextui-org/react'
import { FC } from 'react'
import styles from './progress-bar.module.scss'

type ProgressBarProps = {
    value: number
}

const ProgressBar: FC<ProgressBarProps> = ({
    value
}) => {

    return(
        <div className={styles.ProgressContainer}>
            <Progress 
                value={value} 
                color="success" 
                size="sm" 
                shadow={false}
                animated
                css={{
                    background: "#16181A"
                }}
            />
        </div>
    )
}

export default ProgressBar