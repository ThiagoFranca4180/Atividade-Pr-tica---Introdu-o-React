import { Link } from "react-router-dom";
import ButtonDefault from "../components/MyButton/ButtonDefault";

const Welcome = () =>{
    return <div className="container">
        <h1>seja bem vindo a sua lista de compra</h1><br />
        <Link to="/ItemList" >
        <ButtonDefault title="Lista"/>
        </Link>
        <Link to="/AddItem" >
        <ButtonDefault title="Adicionar Item"/>
        </Link>
        </div>;
};

export default Welcome;