import React from 'react';
import styled from 'styled-components';
import Main from '../components/Main';
import SideBar from '../components/Menus/SideBar';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

const About:React.FC = () => (
    <Container>        
        <SideBar />
        <Main welcome="Quem Somos" route="about" />                
    </Container>
)

export default About;
