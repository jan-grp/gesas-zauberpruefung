import styles from './navbar.module.scss'

import { Text } from '@nextui-org/react'

export default function Navbar() {

    return(
        <nav className={styles.NavContainer}>
            <Text
                h1
                size={26}
                css={{
                    // textGradient: "45deg, $blue800 -10%, $green800 70%",
                    color: '#fff'
                }}
                weight="bold"
                
            >
                Gesas Zauberprüfung 🧙
            </Text>
        </nav>
    )
}
