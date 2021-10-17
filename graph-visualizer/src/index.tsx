import './index.css'

import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'

import AppModule from './modules/App'
import Contact from './modules/Contact'
import Footer from './modules/Footer'
import Home from './modules/Home'
import Nav from './modules/Nav'
import reportWebVitals from './reportWebVitals'

const RoutingComponent: React.FunctionComponent = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash === '#tutorial' && pathname === '/') {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const ele = document.getElementById(id)
        if (ele) ele.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [pathname, hash])

  return (
    <Switch>
      <Route path="/App" component={AppModule} />
      <Route path="/Contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <RoutingComponent />
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
