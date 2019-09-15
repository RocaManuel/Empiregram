import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'

import { Navbar } from './components/Navbar'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotRegistredUser } from './pages/NotRegistredUser'
import { Profile } from './pages/Profile'
import { Favs } from './pages/Favs'

import Context from './Context'

export const App = () => {
    return(
        <div>
            <GlobalStyle /> 
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />

            </Router>

            <Context.Consumer>
                {
                    ({ isAuth }) => isAuth
                                    ? <Router>
                                         <Profile path='/profile' />
                                          <Favs path='/favs' />
                                      </Router>
                                    : <Router>
                                        <NotRegistredUser path='/profile' />
                                        <NotRegistredUser path='/favs' />
                                      </Router>
                }
            </Context.Consumer>

            <Navbar />
        </div>
    )

}