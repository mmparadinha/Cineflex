import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import Dias from "./Dias";

export default function Sessoes() {
    const {idFilme} = useParams();
    const [filme, setFilme] = useState(null);

    useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

    promise.then(resposta => {
        setFilme(resposta.data);
    });
    promise.catch(() => console.log('erro no filme'));
    }, [idFilme]);

    return (
        <Main>
            <h3>Selecione o horário</h3>
            {filme !== null ? filme.days.map((valor) => <Dias data={valor.date} id={valor.id} horarios={valor.showtimes} dia={valor.weekday}/>) : '' }
            {filme && <Footer filme={filme} />}
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 90%;
    margin: 70px auto 120px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    h3 {
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        margin: 30px 0;
    }
`;