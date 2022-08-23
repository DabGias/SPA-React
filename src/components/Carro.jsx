import {useState} from "react"

function Carro() {

    const [carro, setCarro] = useState({'marca' : '', 'modelo' : ''})

    const mostrarCarro = (e) => {
        const {name, value} = e.target

        if (name === 'marca') {
            setCarro({'marca' : value, 'modelo' : carro.modelo})
        } else if (name === 'modelo') {
            setCarro({'modelo' : value, 'marca' : carro.marca})
        }
    }

    return(
        <>
            <h2>Dados do Carro</h2>

            <label>Marca: </label>
            <input type={"text"} name='marca' onChange={mostrarCarro}></input>
            <br/>
            <br/>
            <label>Modelo: </label>
            <input type={"text"} name='modelo' onChange={mostrarCarro}></input>
            <p>Meu carro é um {carro.marca} {carro.modelo}</p>
        </>
    )
}

export default Carro