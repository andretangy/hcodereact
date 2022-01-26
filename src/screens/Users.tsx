import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/Menus/SideBar';
import UsersGrid from '../components/UsersGrid';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

const Users:React.FC = () => (
    <Container>        
        <SideBar />
        <UsersGrid welcome="Usuários" route="users" />                
    </Container>
)

export default Users;
