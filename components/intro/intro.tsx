import { Button, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

// components
import IntroCard from '../intro-card/intro-card.component'

const Intro = () => {
    const router = useRouter()
    const animationDelays = 5

    return(
        <div>
            <motion.h3
                initial={{ opacity: 0, x: -15 }}
                transition={{ delay: 2, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                Vor sehr langer Zeit berechnete der Zauberer Nicolas Flamel eine mysteriöse und bedeutsame Zeichenfolge...
                </IntroCard>
            </motion.h3>
            <motion.h3
                initial={{ opacity: 0, x: 15 }}
                transition={{ delay: 2+animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                ...um diese nicht zu verlieren, bewahrte er sie in einer magischen Truhe auf.
                </IntroCard>
            </motion.h3>
            <motion.h3
                initial={{ opacity: 0, x: -15, y: 12 }}
                transition={{ delay: 2+2*animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                Heute ist Flamel lange tot - und keiner vermag es, die Truhe zu öffnen...
                </IntroCard>
            </motion.h3>
            <motion.h3
                initial={{ opacity: 0, x: 15 }}
                transition={{ delay: 2+3*animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                ...die magische Truhe stellt jedem, der sie öffnen will, eine Prüfung. Und sie öffnet sich erst, wenn jemand die Prüfung besteht.
                </IntroCard>
            </motion.h3>
            <motion.h3
                initial={{ opacity: 0, x: -15, y: 20 }}
                transition={{ delay: 2+4*animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
            >
                <IntroCard>
                Was lässt sich wohl mit dem Inhalt der Truhe anstellen?
                </IntroCard>
            </motion.h3>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 2+5*animationDelays, ease: "easeIn", duration: 2.5 }}
                animate={{ opacity: 1 }}
                onAnimationComplete={() => window.scrollTo({ left: 0, top: 200, behavior: "smooth"})}
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