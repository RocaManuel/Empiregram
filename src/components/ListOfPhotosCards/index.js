import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotosCards = () => {
    return (
        <ul>
            {[1,2,3,4,5,6,7,8].map(photos => <PhotoCard key={photos} /> )}
        </ul>
    )
}


