import { Breadcrumbs, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'name',
      headerName: 'Nome',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'username',
      headerName: 'Usuário',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'website',
      headerName: 'Web Site',
      type: 'string',
      width: 200,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      type: 'string',
      width: 200,
      editable: true
    },
  ];
  
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

  
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Header = styled.header`
    min-height: 200px;
    width: 100%;
    padding-top: 2%;
    padding-left: 2%;
`

const Block = styled.div`
    height: 450px;
    width: 90%;
    margin: 0 auto;
`

interface CoursesProps {
    welcome: string;
    route: string;
}


export default function CoursesGrid({welcome,route}:CoursesProps) {

  const [rows, setRows] = useState<any | null>(null);

  const [loading, setLoading] = useState<Boolean>(false);

    //useEffect é um React Hook que permite controlar o ciclo de vida de um componente
    useEffect(()=>{

      const fetchUsers = async () =>{
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );

        setRows(response.data);
        setLoading(false);
      }

      fetchUsers();

    }, []);

    return(

    <Container>
        <Header>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Bitcode
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/courses"
                >
                    Cursos
                </Link>
                <Typography color="text.primary">Lista de Cursos</Typography>
            </Breadcrumbs>
        </Header>
        <Block>       
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
        </Block>
    </Container>
    )
}

