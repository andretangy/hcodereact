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

const NotFound:React.FC = () => (
    <Container>        
        <SideBar />
        <Main welcome="Oppsss" route="notfound" />                
    </Container>
)

export default NotFound;
