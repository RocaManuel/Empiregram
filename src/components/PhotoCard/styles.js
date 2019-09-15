import React from 'react'
import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Article = styled.article`
    min-height: 200px;
`

export const ImgWrapper = styled.div`
    border-radius: 10px 10px 0 0;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    margin-top: 25px;
`
export const Img = styled.img`
    ${fadeIn({ time: '2s' })};
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%
`

export const LikeWrapper = styled.div`
    ${fadeIn({ time: '2s' })};
    width: 100%;
    height: auto;
    padding: 5px;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, .3);;
    margin: 0px 0px 10px 0px;
    border-radius: 0 0 10px 10px;

`

