import { Link } from 'react-router-dom';
import ListaMercado from '../components/ListaMercado';
import ButtonDefault from '../components/MyButton/ButtonDefault';

function ItemsList(){
    return<><div className="container">
        <h1>Lista de compras</h1>
        <ListaMercado />
        <Link to="/Welcome" >
        <ButtonDefault title="Bem vindo"/>
        </Link>
        <Link to="/AddItem" >
        <ButtonDefault title="Adicionar Item"/>
        </Link>
      </div>
      </>
}

export default ItemsList