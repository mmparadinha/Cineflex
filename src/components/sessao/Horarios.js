import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Horarios({hora, idSessao}) {
    return (
        <Link to={`/sessao/${idSessao}`}>
            <Button>{hora}</Button>
        </Link>
    )
}

const Button = styled.button`
    background-color: #E8833A;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    border: none;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;

    &&:hover {
        cursor: pointer;
    }
`