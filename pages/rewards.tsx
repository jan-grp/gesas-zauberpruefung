import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Loading, useModal, Tooltip, Text, Input, Button } from '@nextui-org/react'
import styles from '../styles/Rewards.module.scss' 
import Cookies from 'js-cookie'

// components
import QuestionIntro from '../components/question-intro/question-intro.component'
import MagicalChest from '../components/magical-chest/magical-chest.component'
import RewardModal from '../components/reward-module/reward-modal.component'

type RewardsProps = {
    hasFinishedQuests: boolean
    secretFromLink: string
}

const Rewards: NextPage<RewardsProps> = ({
    hasFinishedQuests,
    secretFromLink
}) => {
    const router = useRouter()
    const { 
        setVisible: setRewardModalVisible, 
        bindings: rewardModalBindings
    } = useModal()

    const [pageLoading, setPageLoading] = useState<boolean>(true)
    const [PSNCodes, setPSNCodes] = useState<string[] | false>(false)
    const [isChestOpen, setIsChestOpen] = useState<boolean>(false)
    const [passwortInputState, setPasswortInputState] = useState<"idle" | "loading" | "failed">("idle")

    async function requestPSNCodes(secret: string) {
        try {
            const res = await (await fetch(`/api/requestPSNCodes?s=${secret}`)).json()

            if(res.PSNCodes) {
                setPSNCodes(res.PSNCodes)
                return true
            }

            return false
        } catch (error) {
            console.error("error when requesting PSN Codes: ", error)
            return false
        }
    }

    useEffect(() => {
        const hasFinishedQuestsCookie = Cookies.get("hasFinishedQuests")

        if(!hasFinishedQuests && !hasFinishedQuestsCookie) router.push("/")

        if(secretFromLink) {
            requestPSNCodes(secretFromLink)
        }

        setPageLoading(false)
    }, [hasFinishedQuests, router, secretFromLink])

    const handleChestClick = () => {
        if(!PSNCodes) return
        if(isChestOpen) return
        setIsChestOpen(true)
    }

    const handleChestOpened = () => {
        setRewardModalVisible(true)
    }
    
    const submitPasswort = async () => {
        setPasswortInputState("loading")
        const inputElement = document.getElementById("passwort-input") as HTMLInputElement
        const passwort = inputElement.value

        if(!passwort) return setPasswortInputState("failed")

        if(await requestPSNCodes(passwort)) {
            setPasswortInputState("idle")
        }
    } 

    return (
        <>
            { pageLoading && <Loading type="spinner" size="xl" css={{ marginLeft: '45%', marginTop: "50%" }}/> } 
            { !pageLoading && 
                <div>      
                    <QuestionIntro color='success'>
                        Du hast alle Aufgaben erfolgreich gemeistert! Gratulation!
                    </QuestionIntro>

                    <div className={styles.chestContainer}>
                        <Tooltip
                            color={"error"}
                            content="Öffne mich, wenn du dich traust!"
                            placement="top"
                            visible={!isChestOpen}
                            offset={-50}
                        >
                            <MagicalChest 
                                isChestOpened={isChestOpen}
                                onChestClick={handleChestClick}
                                onChestOpened={handleChestOpened}
                            />
                        </Tooltip>
                    </div>

                    { !PSNCodes &&
                        <div className={styles.askFormSecretContainer}>
                            <Text
                                h4
                                color="primary"
                            >
                                Bevor du die Truhe öffnen kannst, gib bitte das Passwort ein, was dir vorher übermittelt wurde oder öffne die Seite über den QR-Code.
                            </Text>
                            <Input 
                                labelPlaceholder="Passwort" 
                                status={passwortInputState === "failed" ? "error" : "default" }
                                clearable
                                fullWidth
                                id="passwort-input"
                            />
                            <Button 
                                color="gradient"
                                onPress={submitPasswort}
                                
                            >
                                { passwortInputState === "loading" ? <Loading size="sm" /> : "fortfahren"}
                            </Button>
                        </div>
                    }

                    {PSNCodes && <RewardModal bindings={rewardModalBindings} PSNCodes={PSNCodes}/> }
                </div>
            }
        </>
    )
}

export default Rewards
