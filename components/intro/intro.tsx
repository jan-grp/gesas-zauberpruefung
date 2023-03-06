import { Button, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

// components
import IntroCard from '../intro-card/intro-card.component'

const Intro = () => {
    const router = useRouter()
    const animationDelays = 7

    return(
        <div>
            <motion.h2
                initial={{ opacity: 0, x: -15 }}
                transition={{ delay: 2, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                Vor sehr langer Zeit berechnete der Zauberer Nicolas Flamel einen mysteriösen Zahlen-Code...
                </IntroCard>
            </motion.h2>
            <motion.h2
                initial={{ opacity: 0, x: 15 }}
                transition={{ delay: 2+animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                ...um ihn nicht zu verlieren, schloss er ihn in eine magische Truhe ein.
                </IntroCard>
            </motion.h2>
            <motion.h2
                initial={{ opacity: 0, x: -15 }}
                transition={{ delay: 2+2*animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                Heute ist Flamel lange tot - und mit ihm der Zugang zu der Truhe...
                </IntroCard>
            </motion.h2>
            <motion.h2
                initial={{ opacity: 0, x: 15 }}
                transition={{ delay: 2+3*animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                ...die magische Truhe stellt jedem, der sie öffnen will, eine Prüfung. Besteht jemand die Prüfung, öffnet sie sich.
                </IntroCard>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 2+4*animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <Button 
                    color="gradient"
                    css={{ marginLeft: "auto", marginRight: "auto" }}
                    size={"lg"}
                    onPress={() => router.push("/quests")}
                >
                    <Text 
                        h4
                        css={{ color: '#fff', letterSpacing: .2 }}
                    >
                        Stell dich der Prüfung
                    </Text>
                </Button>   
            </motion.div>   
        </div>
    )
}

export default Intro