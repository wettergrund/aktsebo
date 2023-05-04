import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    background: #f5f4ed;

    height: 70vh;

    border-radius: 3rem 3rem 0rem 0rem;

    top: -3rem;

    padding: 1rem;

    box-shadow: 0 -5rem 15rem black;

    
`;

const Content = (props) => {
    // console.log(props)
  return (
    <Container>{props.children}</Container>
  )
}

export default Content