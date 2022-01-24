import React from 'react';
import styled from 'styled-components';
import CoursesScheduledGrid from '../components/CoursesScheduledGrid';
import SideBar from '../components/Menus/SideBar';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

const CoursesScheduled:React.FC = () => (
    <Container>        
        <SideBar />
        <CoursesScheduledGrid welcome="Cursos Agendados" route="courses-scheduled" />                
    </Container>
)

export default CoursesScheduled;
