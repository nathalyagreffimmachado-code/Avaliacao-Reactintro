import { Link } from 'react-router-dom';
import './style.css';
function Home () {
    return (
        <>
        <h2>bem-vindo ao meu sistema</h2>
        <Link to ="/Ex6">
        <button>navegar para exercicio 6</button>
        </Link>
          <Link to ="/Ex8">
        <button>navegar para exercicio 8</button>
        </Link>
        </>
    )
}
export default Home 