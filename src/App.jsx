import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import Footer from './Footer'
import Content from './Content'

import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Båtturer from './Båtturer'


const MainContainer = styled.div`
  overflow: hidden;

`;

function App() {

  const options = ["Tidtabell","Båtturer"]


  return (
    <Router>

    <MainContainer className="container">

      <Hero options={options}></Hero>


      <Content>

      <Switch>
        <Route exact path="/Båtturer" >
          <Båtturer/>
        </Route>
        <Route exact path="/Tidtabell" >
        <h1>Tid</h1>
        </Route>
        <Route exact path="/" >
        <h1>Hem</h1>
        </Route>
        {/* <Route path="*">
        <h1>Fel</h1>
        </Route> */}
      </Switch>
  

     
  
      </Content>
      <Footer />


    </MainContainer>
</Router>
    

    
  )
}

export default App
