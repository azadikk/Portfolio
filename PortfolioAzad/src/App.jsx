import React, { useRef } from 'react'
import Header from './Components/Header/Header'
import Container from './Components/container/Container'
import Footer from './Components/Container/Footer/Footer'
import './Components/Container/Container.scss'


export default function App() {

  return (
    <div className="App">
      <Header/>
      <Container />
      <Footer />
    </div>
  )
}

