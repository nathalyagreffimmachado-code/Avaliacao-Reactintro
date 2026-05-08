import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Exercicio8() {

const [idade, setIdade] = useState("")
const [resultado, setResultado] = useState("")

function calcular(event) {event.preventDefault()
const semanas = Number(idade) * 52

setResultado(`Você viveu aproximadamente ${semanas} semanas`)
}

return (
<>
<h2>Semanas vividas</h2>

<form onSubmit={calcular}>
<input
type="number"
value={idade}
onChange={(e) => setIdade(e.target.value)}
/>

<button type="submit">Calcular</button>
</form>
   <br />
            <Link to="/">
                <button>navegar para home </button>
            </Link>
<p>{resultado}</p>
</>

)
}

export default Exercicio8