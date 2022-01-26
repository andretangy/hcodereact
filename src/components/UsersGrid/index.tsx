import { Breadcrumbs, Button, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'email',
      headerName: 'E-mail',
      type: 'string',
      width: 300,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Nome',
      type: 'string',
      width: 250,
      editable: true,
    },
    {
      field: 'created_at',
      headerName: 'Data do Cadastro',
      type: 'date',
      width: 110,
      editable: true,
    },
    {
      field: 'active',
      headerName: 'Ativo',
      type: 'number',
      width: 110,
      editable: true,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
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

const NewUser = styled.div`
    position: absolute;
    right: 5%;
`

interface CoursesScheduledProps {
    welcome: string;
    route: string;
}



export default function CoursesScheduledGrid({welcome,route}:CoursesScheduledProps) {

  const [rows, setRows] = useState<any | null>(null);

  const [loading, setLoading] = useState<Boolean>(false);

    //useEffect é um React Hook que permite controlar o ciclo de vida de um componente
    useEffect(()=>{

      const fetchUsers = async () =>{
        setLoading(true);
        const response = await axios.get(
          'http://20.120.7.70/user'
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
                    Usuários
                </Link>
                <Typography color="text.primary">Lista de Usuários</Typography>
            </Breadcrumbs>
            <NewUser>
              <Button href="users/new" variant="contained">
                Novo Usuário
              </Button>
            </NewUser>

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

