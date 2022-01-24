import { Home, Info, School, ContactMail, DateRange } from '@mui/icons-material';

export const menu = [
    {
        label:"Home", 
        link:"/",
        icon: <Home />
    },{
        label:"Quem Somos", 
        link:"/about",
        icon: <Info />
    },{
        label:"Cursos", 
        link:"/courses",
        icon: <School />
    },{
        label:"Cursos Agendados", 
        link:"/courses-scheduled",
        icon: <DateRange />
    },{
        label:"Contatos", 
        link:"/contact",
        icon: <ContactMail />
    }
]