import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
    query{
        photos{
            id,
            categoryId,
            src,
            likes,
            userId,
            liked
        }
    }
`)

const ListOfPhotosCardsComponent = ({ data: { photos = []} = {}}) => {
    return (
        <ul>
            {photos.map(photo => <PhotoCard key={photo.id} {...photo} /> )}
        </ul>
    )
}

export const ListOfPhotosCards = withPhotos(ListOfPhotosCardsComponent)
