import styles from './spell-scenario.module.scss'
import { FC } from 'react'
import { Text, Input, Button } from '@nextui-org/react'
import { ImQuotesRight } from 'react-icons/im'
import { IoSend } from 'react-icons/io5'

type SpellScenarioProps = {
    children: string
    handleSpellSubmit: () => void
    isInputCorrect: boolean | undefined
}

const SpellScenario: FC<SpellScenarioProps> = ({
    children,
    handleSpellSubmit,
    isInputCorrect,
}) => {
    return(
        <div className={styles.scenarioContainer}>
            <ImQuotesRight size={32}/>
            <Text
                h4
                css={{ color: '#fff', margin: 0, padding: 0, lineHeight: 1.4, marginLeft: 7}}
                weight="medium"
            >
                { children }
            </Text>

            <Input 
                placeholder='Name des Zaubers'
                css={{ marginTop: 28 }}
                contentRightStyling={false}
                id="spellInput"
                aria-label="spell input"
                status={`${isInputCorrect ? "success"
                    : isInputCorrect === false ? "error"
                    : "default"
                }`}
                contentRight={
                    <button 
                        className={styles.submitSpellBtn}
                        onClick={handleSpellSubmit}
                    >             
                        <IoSend size={19} color="#303030" />
                    </button>
                }
            />
        </div>
    )
}

export default SpellScenario