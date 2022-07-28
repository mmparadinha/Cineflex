import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from "react";
import Poster from "./Poster";


export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

    promise.then(answer => setFilmes(answer.data));
    promise.catch(() => console.log('erro nos filmes'));
    },
    []);

    return (
        <Main>
            <h2>Selecione o filme</h2>
            <Container>
                {filmes.map(value => <Poster filme={value}/>)}
            </Container>
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 24px;
        font-weight: 400;
        margin: 30px 0;
    }
`;

const Container = styled.div`
    padding: 20px;
    gap: 11px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;