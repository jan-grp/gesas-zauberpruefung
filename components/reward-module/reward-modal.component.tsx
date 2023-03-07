import { FC, useState } from 'react'
import { Button, Modal, Text } from '@nextui-org/react'
import styles from './reward-modal.module.scss'
import Lottie from 'lottie-react'

import Confetti from '../../public/confetti.json'

type Bindings = {
    open: boolean;
    onClose: () => void;
}

type RewardModalProps = {
    bindings: Bindings,
    PSNCodes: string[]
}

const RewardModal: FC<RewardModalProps> = ({
    bindings,
    PSNCodes
}) => {
    const [firstCodeState, setFirstCodeState] = useState<"copied" | "not-copied">("not-copied")
    const [secondCodeState, setSecondCodeState] = useState<"copied" | "not-copied">("not-copied")

    const copyFirstCode = () => {
        navigator.clipboard.writeText(PSNCodes[0])
        setFirstCodeState("copied")
    } 

    const copySecondCode = () => {
        navigator.clipboard.writeText(PSNCodes[1])
        setSecondCodeState("copied")
    }

    return(
        <Modal
            width="600px"
            preventClose
            aria-labelledby="review rewards"
            aria-describedby="modal-description"
            css={{
                background: "#1D1D1F",
                paddingLeft: 25,
                paddingRight: 25,
                margin: "0px 10px"
            }}
            {...bindings}
        >
            <Text 
                h1
                css={{ color: '#fff' }}
            >
                Deine Belohnung
            </Text>

            <section>
                <Text 
                    h4
                    color='primary'
                    weight="normal"
                    css={{ textAlign: "left", marginBottom: 0 }}
                >
                    Wie es aussieht, hat Flamel gleich zwei der geheimnisvollen Zeichenketten berechnet...
                </Text>
                <Text 
                    h4
                    color='primary'
                    weight="normal"
                    css={{ textAlign: "left", marginTop: 8, padding: 0 }}
                >
                    Und er hat einen Zettel mit in die Truhe gelegt, auf dem steht, wofür man sie benutzen kann:
                </Text>
                <Text 
                    h4
                    weight="normal"
                    css={{ color: "#fff", textAlign: "left", margin: "12px 0 0 8px" }}
                >
                    &quot;Hallo Gesa, dir ist es also gelungen, meine Truhe zu öffnen. Damit verdienst du meinen vollen Respekt! Du bist eine würdige Hexe, für ihren Inhalt.
                </Text>
                <Text
                    h4
                    weight="normal"
                    css={{ color: "#fff", textAlign: "left", margin: "8px 0 0 8px" }}
                >
                    Du fragst dich sicher, was du damit tun kannst. Die Zeichenketten verschaffen dir Zugang zu einer völlig neuen, atemberaubenden Welt, in der du der Zauberrei nach freiem Belieben nachgehen kannst.
                </Text>
                <Text
                    h4
                    weight="normal"
                    css={{ color: "#fff", textAlign: "left", margin: "0 0 0 8px" }}
                >
                    Du hast Glück, dass in deiner Zeit schon das Internet und die Playstation erfunden wurde. Benutze <a href='https://www.playstation.com/de-de/' target="_blank" rel="noopener noreferrer">hier</a> die beiden Codes und schau dich nach &apos;Hogwarts Legacy&apos; um!&quot;
                </Text>
            </section>

            <section className={styles.codesContainer}>
                <Button 
                    size={"xs"} 
                    color={firstCodeState === "not-copied" ? "primary" : "success"}
                    css={{ width: 200}}
                    onPress={copyFirstCode}
                >
                    {firstCodeState === "not-copied" ? "Ersten Code kopieren" : "kopiert"}
                </Button>
                <Button 
                    size={"xs"} 
                    auto 
                    color={secondCodeState === "not-copied" ? "primary" : "success"}
                    css={{ width: 200}}
                    onPress={copySecondCode}
                >
                    {secondCodeState === "not-copied" ? "Zweiten Code kopieren" : "kopiert"}
                </Button>
            </section>

            <section className={styles.confettiContainer}>
                <Lottie 
                    animationData={Confetti}
                    loop
                    style={{ height: 200, padding: 0 }}
                />
            </section>
        </Modal>
    )
}

export default RewardModal