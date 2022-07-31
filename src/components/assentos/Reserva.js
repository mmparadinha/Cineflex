import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import Assentos from "./Assentos";
import Legenda from "./Legenda";

export default function Reserva() {
    const { idSessao } = useParams();
    const [sessao, setSessao] = useState(null);
    const [reservar, setReservar] = useState([]);
    const [nomeComprador, setNomeComprador] = useState('');
    const [CPFComprador, setCPFComprador] = useState('');

    function reservarAssentos(event) {
        event.preventDefault();
        console.log(reservar, nomeComprador, CPFComprador)

        if (reservar.length === 0) {
            alert('Escolha algum assento')
        } else {
            const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', {
                ids: {reservar},
                name: {nomeComprador},
                cpf: {CPFComprador}
            });
            promise.then(() => console.log('reservemo'));
            promise.catch(() => console.log('deu erro na reserva'))
        }
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)

        promise.then((resposta) => setSessao(resposta.data));
        promise.catch(() => console.log('deu erro nos assentos'));
    }, [idSessao]);

    return (
        <Main>
            <h3>Selecione o(s) assento(s)</h3>
            <Sala>
                {sessao && sessao.seats.map((valor) => <Assentos idAssento={valor.id} numeroAssento={valor.name} disponivel={valor.isAvailable} reservar={reservar} setReservar={setReservar}/>)}
            </Sala>
            <Legenda />
            <Dados>
                <form onSubmit={() => reservarAssentos}>
                    <h5>Nome do comprador:</h5>
                    <input  required value={nomeComprador} onChange={e => setNomeComprador(e.target.value)}placeholder="Digite seu nome..."></input>
                    <h5>CPF do comprador:</h5>
                    <input required value={CPFComprador} onChange={e => setCPFComprador(e.target.value)} placeholder="Digite seu CPF..."></input>
                    <Link to={'/sucesso'}>
                        <button type="submit">Reservar assento(s)</button>
                    </Link>
                </form>
            </Dados>

            {sessao && <Footer filme={sessao.movie} dia={sessao.day.weekday} hora={sessao.name} />}
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    width: 90%;
    margin: 70px auto 120px;
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

const Dados = styled.div`
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

    button {
        background-color: #E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        width: 225px;
        height: 42px;
        border: none;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        color: #FFFFFF;
        font-size: 18px;

        &&:hover {
        cursor: pointer;
        }
    }
`;