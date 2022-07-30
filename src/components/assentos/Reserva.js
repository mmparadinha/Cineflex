import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import Assentos from "./Assentos";

export default function Reserva() {
    const { idSessao } = useParams();
    const [sessao, setSessao] = useState(null);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)

        promise.then((resposta) => setSessao(resposta.data));
        promise.catch(() => console.log('deu erro nos assentos'));
    }, [idSessao]);

    return (
        <Main>
            <h3>Selecione o(s) assento(s)</h3>
            <Sala>
                {sessao && sessao.seats.map((valor) => <Assentos idAssento={valor.id} numeroAssento={valor.name} disponivel={valor.isAvailable} />)}
            </Sala>
            <Legenda>
                <div>
                    <ion-icon name="ellipse"></ion-icon>
                    Selecionado
                </div>
                <div>
                    <ion-icon name="ellipse"></ion-icon>
                    Disponível
                </div>
                <div>
                    <ion-icon name="ellipse"></ion-icon>
                    Indisponível
                </div>
            </Legenda>
            <Comprador>
                <h5>Nome do comprador:</h5>
                <input placeholder="Digite seu nome..."></input>
                <h5>CPF do comprador:</h5>
                <input placeholder="Digite seu CPF..."></input>
            </Comprador>
            <Link to={'/sucesso'}>
                <Button>Reservar assento(s)</Button>
            </Link>

            {sessao && <Footer filme={sessao.movie} dia={sessao.day.weekday} hora={sessao.name} />}
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-top: 67px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    h3 {
        text-align: center;
        font-size: 24px;
        margin: 30px 0;
    }
`;

const Sala = styled.div`
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px 7px;
`;

const Legenda = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 10px 0;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
        color: #4E5A65;
    }

    ion-icon {
        font-size: 24px;
    }

    div:nth-child(1) ion-icon {
        background-color: #1AAE9E;
        color: #8DD7CF;
        border-radius: 50%;
    }

    div:nth-child(2) ion-icon {
        background-color: #7B8B99;
        color: #C3CFD9;
        border-radius: 50%;
    }

    div:nth-child(3) ion-icon {
        background-color: #F7C52B;
        color: #FBE192;
        border-radius: 50%;
    }
`;

const Comprador = styled.div`
    margin: 10px 0;

    h5 {
        font-size: 18px;
        color: #293845;
    }

    input {
        height: 30px;
        width: 100%;
        margin-bottom: 5px;
        border: inset 1px solid #D4D4D4;
    }

    input::placeholder {
        font-style: italic;
        font-size: 18px;
        color: #AFAFAF;
    }
`;

const Button = styled.button`
    background-color: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 225px;
    height: 42px;
    border: none;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    color: #FFFFFF;
    font-size: 18px;

    &&:hover {
        cursor: pointer;
    }
`