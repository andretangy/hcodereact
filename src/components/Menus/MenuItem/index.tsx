import { Link } from "react-router-dom";

//Interface é uma forma de padronizar ou criar uma regra com os dados e seus tipos que serão utilizados.
interface Item {
    label: string;
    link: string;
    icon?: JSX.Element;
}

interface ItemProps {
    linkProps: Item[];
}
// map é uma função que só pode ser utilizada para mapear um array
export default function MenuItem({linkProps}:ItemProps) {    
    return(    
        <ul>
            {linkProps.map((item:Item)=>(
                <li>
                    <Link to={item.link}>
                    {item?.icon} <span className="label">{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>         
    )
}