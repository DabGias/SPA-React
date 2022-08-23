import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Produtos from "./components/Produtos"
import Servicos from "./components/Servicos"
import Carro from "./components/Carro"


function App() {
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/servicos" element={<Servicos/>}/>
                <Route path="/carro" element={<Carro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App