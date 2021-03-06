import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

//css
import './App.css'

import Header from './components/Header'
import QueryUI from './components/QueryUI/QueryUI'
import Footer from './components/Footer'

import NetworkUI from './components/NetworkUI/NetworkUI'
import { QueryUIProvider } from './components/QueryUI/QueryUIContext/QueryUIContext'

function AppRouter() {
  return (
    <Router>
      <div className="App">
        <Header />
        <QueryUIProvider>
          <Route path="/" exact component={QueryUI} />
          <Route path="/network/" component={NetworkUI} />
        </QueryUIProvider>
        <Footer />
      </div>
    </Router>
  )
}

export default AppRouter
