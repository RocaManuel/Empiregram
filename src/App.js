import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotosCards } from '../src/components/ListOfPhotosCards'
import { Logo } from './components/Logo'

export const App = () => (
    <div>
        <GlobalStyle /> 
        <Logo />
        <ListOfCategories />
        <ListOfPhotosCards />
    </div>
)