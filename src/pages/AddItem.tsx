import { Link } from "react-router-dom";
import ButtonDefault from "../components/MyButton/ButtonDefault";

const AddItem = () => {
    return<>
    <div className="container">
    <h1>Adicionar Item </h1><br />
    <h6>ainda em teste nada funcionando (somente os botões de navegação)</h6><br /><br />
    <label htmlFor="">item:</label><br />
    <input type="text"/><br /><br />
    <label htmlFor="">quantidade:</label><br />
    <input type="text"/><br /><br />
    
    <Link to="/ItemList" >
        <ButtonDefault title="Lista"/>
        </Link>
        <Link to="/Welcome" >
        <ButtonDefault title="Bem Vindo"/>
        </Link>
    </div> 
    </>
  ;

};

export default AddItem;