import React, { useEffect, useRef, useState, Fragment } from 'react'
import { Article, ImgWrapper, Img, Button, LikeWrapper } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({id, likes= 0, src= DEFAULT_IMAGE}) => {
    const key = `like-${id}`
    const [ liked, setLiked  ] = useLocalStorage(key, false)
    const [ show, ref ] = useNearScreen()



    return (
        <Article ref={ref}>
            {show && 
                <Fragment>
                    <a href={`/?detail=${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    <LikeWrapper>
                        <ToggleLikeMutation>
                         { (toggleLike) => {
                            function handleClickLike() {
                                const value = !liked
                                !liked && toggleLike({ variables : {
                                    input: { id }
                                }})
                                setLiked(value)
                            }
                             return <FavButton liked={liked} likes={likes} onClick={handleClickLike} />
                         }} 
                        </ToggleLikeMutation>
                    </LikeWrapper>
                </Fragment>
            }
        </Article>
    )
}