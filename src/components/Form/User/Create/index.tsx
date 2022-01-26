import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    width: 400px;
    margin: 5% auto;
    display: flex;
    form{ width: 100%; display: flex; flex-direction: column;
        label{ display: flex; flex-direction: column;
        input {
            line-height: 40px;
            border: solid 1px #888;
            background: none;
            border-radius: 5px;
            padding-left: 10%;
        }
        button{
            line-height: 50px;
        }
    }    
`
const defaultFormData = {
    name: '',
    email: '',
    password: ''
}

export default function UserCreateForm(){

    const [formData, setFormData] = useState(defaultFormData);
    const { name, email, password } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => 
    {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await axios.post(
            'http://20.120.7.70/user', formData
        );

        console.log(response.data);
    }    

    return(
        <Container>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Nome
                    <input type="text" required name="name" id="name" value={name} onChange={onChange} placeholder="Digite o nome" />
                </label>
                <label htmlFor="email">E-mail
                    <input type="email" required name="email" id="email" value={email} onChange={onChange} placeholder="Digite o e-mail" />
                </label>
                <label htmlFor="password">Senha
                    <input type="password" required name="password" id="password" value={password} onChange={onChange} placeholder="Digite a senha" />
                </label>
                <button type="submit">Cadastrar</button>
            </form>        
        </Container>
    )

}