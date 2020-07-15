import React from 'react'
import './App.scss'
import { Route, BrowserRouter } from 'react-router-dom'
import { Home, SignIn, SignUp, Stores } from '../../pages'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main">
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/stores" component={Stores} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
