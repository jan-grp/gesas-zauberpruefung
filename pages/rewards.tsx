import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Loading } from '@nextui-org/react'

// components
import QuestionIntro from '../components/question-intro/question-intro.component'

type RewardsProps = {
    hasFinishedQuests: boolean
    secretFromLink: string
}

const Rewards: NextPage<RewardsProps> = ({
    hasFinishedQuests,
    secretFromLink
}) => {
    const router = useRouter()

    const [pageLoading, setPageLoading] = useState<boolean>(true)
    const [PSNCodes, setPSNCodes] = useState<string>()

    async function requestPSNCodes(secret: string) {
        try {
            const res = await (await fetch(`/api/requestPSNCodes?s=${secret}`)).json()

            if(res.PSNCodes) {
                setPSNCodes(res.PSNCodes)
            }
        } catch (error) {
            console.error("error when requesting PSN Codes: ", error)
        }
    }

    useEffect(() => {
        if(!hasFinishedQuests) router.push("/")

        if(secretFromLink) {
            requestPSNCodes(secretFromLink)
        }

        if(hasFinishedQuests) setPageLoading(false)
    }, [hasFinishedQuests, router, secretFromLink])
    
    return (
        <>
            { pageLoading && <Loading type="spinner" size="xl" css={{ marginLeft: '50%', marginTop: "40%" }}/> } 
            { !pageLoading && 
                <div>      
                    <QuestionIntro>
                        Du hast alle Aufgaben erfolgreich gemeistert! Gratulation!
                    </QuestionIntro>
                </div>
            }
        </>

    )
}

export default Rewards
