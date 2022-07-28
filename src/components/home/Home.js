import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from "react";
import Poster from "./Poster";


export default function Home() {
    const [inTheaters, setInTheaters] = useState([]);

    useEffect(() => {
    const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');

    promise.then(answer => setInTheaters(answer.data));
    promise.catch(() => console.log('erro nos filmes'));
    },
    []);

    return (
        <Main>
            <h3>Selecione o filme</h3>
            <Container>
                {inTheaters.map(value => <Poster inTheaters={value}/>)}
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

    h3 {
        font-size: 24px;
        font-weight: 400;
        margin: 30px 0;
    }
`;

const Container = styled.div`
    gap: 11px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;