import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Sessao() {
    const params = useParams();
    console.log(params)

    return (
        <H2>sou eu, a pagina sessao</H2>
    )
}

const H2 = styled.h2`
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