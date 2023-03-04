import styles from './navbar.module.css'

import { Text } from '@nextui-org/react'

export default function Navbar() {

    return(
        <nav className={styles.NavContainer}>
            <Text
                h1
                size={24}
                css={{
                    textGradient: "45deg, $blue800 -10%, $green800 70%",
                }}
                weight="medium"
                
            >
                Gesas Zauberprüfung 
            </Text>
        </nav>
    )
}
