import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 1.5em;
    color: #333;
    @media (min-width:576px){
        font-size: 3em;
        color: #f5f533;
        transition-duration: 0.5s;
        &:hover {
            color: #2980b9;
            transform: translateX(80px);
            corsor: pointer;
        }
    }
    @media (min-width:920px){
        font-size: 4em;
        color: #444;        
    }
    @media (min-width:1220px){
        font-size: 5em;
        color: #555;        
    }
    
`
const fontSize = '3em';
const color = '#2c3e50';

const H2 = styled.h2`
    font-size: ${fontSize};
    color: ${color};
`

interface NavBarProps {
    welcome: string;
    route: string;
}

export default function NavBar({welcome,route}:NavBarProps) {
    return(
    <>
        <div>{route}</div>
        <H1>{welcome}</H1>
        <H2>Formando Especialistas</H2>
    </>
    )
}

