import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucesso({confirmacao}) {
    return (
        <Main>
            <h3>Pedido feito <br /> com sucesso!</h3>
            <Container>
                <h3>Filme e sessão</h3>
                <p>{confirmacao.filme}</p>
                <p>{confirmacao.dia} {confirmacao.hora}</p>

                <h3>Ingressos</h3>
                {confirmacao.assentos.map(valor => <p>Assento {valor}</p>)}

                <h3>Comprador</h3>
                <p>Nome: {confirmacao.nome}</p>
                <p>CPF: {confirmacao.cpf}</p>
            </Container>
            <Link to={'/'}>
                <Button>Voltar para Home</Button>
            </Link>
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 90%;
    margin: 67px auto 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 24px;
        font-weight: 700;
        margin: 30px 0;
        color: #247A6B;
        text-align: center;
    }
`;

const Container = styled.div`
    width: 100%;
    gap: 5px 0;
    display: flex;
    flex-direction: column;

    h3 {
        margin: 20px 0 5px 0;
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        text-align: left;
    }

    p {
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        letter-spacing: 1px;
    }
`;

const Button = styled.button`
    background-color: #E8833A;
    border-radius: 3px;
    margin-top: 60px;
    width: 225px;
    height: 42px;
    border: none;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    color: #FFFFFF;
    font-size: 18px;

    &:hover {
    cursor: pointer;
    }
`;