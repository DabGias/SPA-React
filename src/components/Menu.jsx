import {Link} from "react-router-dom"
import './Menu.css'

function Menu() {
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/servicos'>Serviços</Link></li>
                <li><Link to='/carro'>Carro</Link></li>
            </ul>
        </nav>
    )
}

export default Menu