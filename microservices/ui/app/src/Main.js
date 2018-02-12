import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AppBar from './Appbar'
import SearchArea from './searcharea'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={AppBar}/>
      <Route path='/search=aadhaar' component={SearchArea}/>
    </Switch>
  </main>
)

export default Main
