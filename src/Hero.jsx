import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    
  } from "react-router-dom";

import './Hero.css'

const Top = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1rem;
    text-align: center;
    margin: auto 0;

    & .logo{
        font-size: 2rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const HeroSection = styled.div`
    display: grid;
    grid-template-rows: 3rem auto;
    /* flex-direction: column;
    justify-content: space-between; */
    align-items: center;
    
    color: white;



    background-image: url('../img/13938858139_3d28d314b9_c.jpg');
    background-size: cover;
    min-height: 50vh;

    & nav{
        justify-self: center;
        align-self: center;

        font-size: .9rem;
        
    }

    & a{
        text-decoration: none;
        color: white;
        

    }
    & ul{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
    & li{

        
        list-style: none;
    }

    & .hero-text{
        font-size: 5rem;
        justify-self: center;
        position: absolute;
        text-align:center;

        z-index: 99;


    }
`;

const Hero = (props) => {

  return (
    
        <HeroSection className='hero'>
            <Top>
            <div className="logo">Aktse</div>

            <nav>

            <ul>
                    <li key="home">
                        <Link to="/">Hem</Link>
                    </li>
            {
                props.options.map((option, index) =>(
                    <li key={index} >
                        <Link to={`/${option}`}>{option}</Link>
                    </li>

))

}

            </ul>

            </nav>
            </Top>
            <div className="hero-text">

                <p>Porten till</p>
                <h1>SAREK</h1>

            </div>


        </HeroSection>
        
    
    
  )
}

export default Hero