import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Conferencia({form, filme, dia, hora}) {
    return (
        <Main>
            <h3>Confirme a sua reserva</h3>
            <Container>
                <h3>Filme e sessão</h3>
                <p>{filme.title}
                <br/>
                {dia} {hora}</p>

                <h3>Ingressos</h3>
                <p>Assento xx</p>

                <h3>Comprador</h3>
                <p>Nome: {form.name}
                <br/>
                CPF: {form.cpf}</p>
            </Container>
            <Link to={'/sucesso'} params={{name:`${form.name}`, filme:'zack', dia:{dia}, hora:{hora}}}>
                <Button>Confirmar</Button>
            </Link>
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E8833A;
    opacity: 1;
    position: fixed;
    top: 67px;
    left: 0;
    z-index: 1;
    color: #293845;

    h3 {
        font-size: 24px;
        font-weight: 700;
        margin: 30px 0;
        text-align: center;
    }
`;

const Container = styled.div`
    background-color: #DFE6ED;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    width: 80%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    h3 {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        text-align: left;
    }

    p {
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }
`;

const Button = styled.button`
    background-color: greenyellow;
    border-radius: 3px;
    margin-top: 60px;
    width: 225px;
    height: 42px;
    border: none;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    font-size: 18px;

    &:hover {
    cursor: pointer;
    }
`;