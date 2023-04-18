import React from 'react'
import Nav from './Components/navbar/Nav'
import Footer from './Components/footer/Footer'
import Home from './Components/home/Home'
import Section from './Components/section/Section'
import Creditcard from './Components/creditcard/Creditcard'
import Reviews from './Components/reviews/Reviews'

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <Section/>
      <Creditcard/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default App