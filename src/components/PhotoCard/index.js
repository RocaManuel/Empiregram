import React, { useEffect, useRef, useState, Fragment } from 'react'
import { Article, ImgWrapper, Img, Button, LikeWrapper } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({id, likes= 0, src= DEFAULT_IMAGE}) => {
    const key = `like-${id}`
    const [ liked, setLiked  ] = useLocalStorage(key, false)
    const [ show, ref ] = useNearScreen()
    const Icon = liked ? MdFavorite : MdFavoriteBorder

    function handleClickLike() {
        const value = !liked
        setLiked(value)
    }

    return (
        <Article ref={ref}>
            {show && 
                <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <LikeWrapper>
                        <Button onClick={handleClickLike}>
                            <Icon size='32px' /> {likes} likes!
                        </Button>
                    </LikeWrapper>
                </Fragment>
            }
        </Article>
    )
}