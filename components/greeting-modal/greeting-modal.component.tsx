import { Modal, Button, Text } from "@nextui-org/react";
import { FC } from "react";

import styles from './greeting-modal.module.scss'

type Bindings = {
    open: boolean;
    onClose: () => void;
}

type GreetingModalProps = {
    bindings: Bindings,
    setVisible: (b: boolean) => void
}

const GreetingModal: FC<GreetingModalProps> = ({
    bindings,
    setVisible
}) => {

    return(
        <Modal
            width="600px"
            blur
            preventClose
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            css={{
                background: "#16181A",
                paddingLeft: 25,
                paddingRight: 25,
                paddingBottom: 30,
            }}
            {...bindings}
        >
            <section>
                <Text
                    h2
                    size={26}
                    css={{
                        textGradient: "45deg, $blue800 -10%, $green800 70%",
                    }}
                    weight="bold"
                >
                    Willkommen zu deiner Zauberprüfung
                </Text>
            </section>

            <section className={styles.DescriptionContainer}>
                <Text
                    h3
                    css={{
                        color: "#fff",
                        textAlign: "left",
                        marginBottom: 16,
                    }}
                    weight="medium"
                >
                    Hier musst du dein Zauberwissen unter Beweis stellen:
                </Text>

                <Text
                    css={{
                        color: "#fff",
                        textAlign: "left",
                        marginBottom: 0
                    }}
                >
                    • Kennst du die wichtigsten Zaubersprüche?
                </Text>
                <Text
                    css={{
                        color: "#fff",
                        textAlign: "left",
                        marginBottom: 0
                    }}
                >
                    • Kennst du die wichtigsten Zaubersprüche, die eine Hexe oder Zauberer braucht?
                </Text>
                <Text
                    css={{
                        color: "#fff",
                        textAlign: "left"
                    }}
                >
                    • Kennst du die wichtigsten Zaubersprüche, die eine Hexe oder Zauberer braucht?
                </Text>

                <Text
                    h4
                    color="primary"
                    css={{
         
                        textAlign: "left",
                        
                    }}
                    weight="medium"
                >
                    Mit jeder gelösten Aufgabe stellst du Teile eines verlorenen gegangenen Codes wieder her.
                    Dieser Code wurde vor langer Zeit und zu später Stund von Nicolas Flamel berechnet.
                    Aber wofür mag er gewesen sein?
                </Text>
            </section>

            <section className={styles.SubmitSection}>
                <Button bordered color="primary" auto onPress={() => setVisible(false)}>
                    Zauberprüfung starten
                </Button>
            </section>
        </Modal>
    )
}

export default GreetingModal