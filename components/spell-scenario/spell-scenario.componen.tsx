import styles from './spell-scenario.module.scss'
import { FC, ChangeEvent, FormEvent } from 'react'
import { Text, Input, Button, FormElement } from '@nextui-org/react'
import { ImQuotesRight } from 'react-icons/im'
import { IoSend } from 'react-icons/io5'

type SpellScenarioProps = {
    children: string
    spellInput: string,
    handleSpellInputChange: (e: ChangeEvent<FormElement>) => void
    handleSpellSubmit: () => void
    isInputCorrect: boolean | undefined
    goToNextQuestion: () => void
    progressState: number
}

const SpellScenario: FC<SpellScenarioProps> = ({
    children,
    spellInput,
    handleSpellInputChange,
    handleSpellSubmit,
    isInputCorrect,
    goToNextQuestion,
    progressState
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
                value={spellInput}
                onChange={handleSpellInputChange}
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

            {

                isInputCorrect && progressState !== 100 ? <Button 
                    color="gradient"
                    css={{ letterSpacing: .6, marginTop: 20, marginBottom: -10 }}
                    onPress={goToNextQuestion}
                >
                    <Text h4 css={{ color: '#fff' }}>Nächste Aufgabe</Text>
                </Button>
                : progressState === 100 && <>
                    <span>du warst erfolgreich</span>
                </>            
            }
        </div>
    )
}

export default SpellScenario