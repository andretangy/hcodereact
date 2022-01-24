import { Home, Info, School, ContactMail } from '@mui/icons-material';

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
        label:"Contatos", 
        link:"/contact",
        icon: <ContactMail />
    }
]