import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import Dias from "./Dias";

export default function Sessao() {
    const {filmeId} = useParams();
    const [movie, setMovie] = useState([]);
    const [showtime, setShowtime] = useState([]);

    useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${filmeId}/showtimes`);

    promise.then(answer => {
        setMovie(answer.data);
    });
    promise.catch(() => console.log('erro nos filmes'));
    },
    []);

    useEffect(() => setShowtime(movie.days), [movie]);
 
    return (
        <Main>
            <h3>Selecione o horário</h3>
            {showtime !== undefined ? showtime.map(value => <Dias showtime={value}/>) : console.log('erro')}
            <Footer movie={movie} />
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    margin-top: 67px;
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