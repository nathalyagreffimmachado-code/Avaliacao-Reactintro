import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
function Ex6() {
    const [litros, setLitros] = useState("")
    const [distancia, setDistancia] = useState("")
    const [resultado, setResultado] = useState("")

    function calcular(event) {
        event.preventDefault();
        const consumo = Number(distancia) / Number(litros)

        setResultado(`Consumo médio: ${consumo.toFixed(2)} km/l`)
    }
    return (
        <>
            <h2>Consumo médio</h2>

            <form onSubmit={calcular}>
                <input
                    type="number"
                    placeholder="Litros"
                    value={litros}
                    onChange={(e) => setLitros(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Distância"
                    value={distancia}
                    onChange={(e) => setDistancia(e.target.value)}
                />
                <p>{resultado}</p>
                <button type="submit">enviar</button>
            </form>
            <br />
            <Link to="/">
                <button>navegar para home </button>
            </Link>
        </>
    )
}

export default Ex6