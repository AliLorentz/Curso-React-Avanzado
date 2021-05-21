import React, { Fragment, useContext } from 'react'
import { GlobalStyle } from './styles/GlobalStyle.js'
import SvgComponent from './components/Logo/index.js'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar/'

import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound.js'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <div>
      <GlobalStyle />
      <SvgComponent />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />

      </Router>

      <NavBar />
    </div>
  )
}

/*   {
              ({isAuth})=>
              isAuth ? <Router>

              </Router>:
              <Router>
                <NotRegisteredUser path='/favs'/>
            <NotRegisteredUser path='/user'/>
              </Router>

            }
*/
