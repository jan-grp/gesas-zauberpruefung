import { FC, useState } from 'react'
import Lottie from 'lottie-react'

import Chest from '../../public/magic-chest.json'

type MagicalChestTypes = {
    isChestOpened: boolean
    onChestClick: () => void
    onChestOpened: () => void
}

const MagicalChest: FC<MagicalChestTypes> = ({
    isChestOpened,
    onChestClick,
    onChestOpened
}) => {

    return(
        <Lottie 
            animationData={Chest}
            style={{ height: 250, padding: 0 }}
            loop={!isChestOpened}
            autoplay
            initialSegment={(!isChestOpened ? [0, 100] : undefined)}
            onClick={onChestClick}
            onComplete={onChestOpened}
        />
    )
}

export default MagicalChest