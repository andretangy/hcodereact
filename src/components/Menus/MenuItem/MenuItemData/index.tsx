import { Home, Info, School, ContactMail, DateRange, VerifiedUserSharp, People } from '@mui/icons-material';

export const menu = [
    {
        id: 1,
        label:"Home", 
        link:"/",
        icon: <Home />
    },{
        id: 2,
        label:"Quem Somos", 
        link:"/about",
        icon: <Info />
    },{
        id: 3,
        label:"Cursos", 
        link:"/courses",
        icon: <School />
    },{
        id: 4,
        label:"Cursos Agendados", 
        link:"/courses-scheduled",
        icon: <DateRange />
    },{
        id: 5,
        label:"Usuários", 
        link:"/users",
        icon: <People />
    },{
        id: 6,
        label:"Contatos", 
        link:"/contact",
        icon: <ContactMail />
    }
]