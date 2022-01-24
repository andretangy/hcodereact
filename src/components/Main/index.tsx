import React, { useState } from 'react';
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

interface MainProps {
    welcome: string;
    route: string;
}

interface Address {
    street: string,
    zipcode: string
}

interface User {
    name: string,
    age: number,
    country: string,
    address: Address,
    admin: boolean
}

export default function Main({welcome,route}:MainProps) {

    //Imutabilidade - Na programação funcional, os dados não mudam, eles evoluem.
    const [user, setUser] = useState<User | null>(null);

    const onChange = () => setUser({
        name: 'André Ribeiro',
        age: 27,
        country: 'Brasil',
        address: {
            street: 'Rua Visconde de Pirajá, 525 - Apto 501',
            zipcode: '22410-003'
        },
        admin: false
    });

    return(
    //React Fragment Component
    <>
        <div>{route}</div>
        {user && <div>Bem vindo {user.name} </div>}
        <div><button onClick={onChange}>Carregar o nome</button></div>
        <H1>{welcome}</H1>
        <H2>Formando Especialistas</H2>
    </>
    )
}

