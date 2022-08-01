import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from "react";
import Poster from "./Poster";


export default function Home({setConfirmacao}) {
    const [emCartaz, setEmCartaz] = useState(null);
    
    useEffect(() => {
        setConfirmacao({
            filme: '',
            dia: '',
            hora: '',
            assentos: [],
            nome: '',
            cpf: ''
        });
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');

        promise.then(answer => setEmCartaz(answer.data));
        promise.catch(() => alert('Esquecemos de ligar as luzes e não achamos os filmes em cartaz, tenta de novo!'));
        },
        []
    );

    return (
        <Main>
            <h3>Selecione o filme</h3>
            <Container>
                {emCartaz !== null ? emCartaz.map(value => <Poster emCartaz={value}/>) : 'Carregando os filmes em exibição'}
            </Container>
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    margin-top: 67px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #293845;

    h3 {
        font-size: 24px;
        font-weight: 400;
        margin: 30px 0;
        text-align: center;
    }
`;

const Container = styled.div`
    gap: 11px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;