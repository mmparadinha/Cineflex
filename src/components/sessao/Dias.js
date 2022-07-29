import styled from "styled-components";
import Horarios from "./Horarios";

export default function Dias({data, id, horarios, dia}) {
    return (
        <Container key={id}>
            <h4>{dia} - {data}</h4>
            <Wrapper>
                {horarios.map((value) => <Horarios hora={value.name} idSessao={value.id}/>)}
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 22px;

    h4 {
        font-size: 20px;
        font-weight: 400;
    }
`;

const Wrapper = styled.div`
    gap: 8px;
    display: flex;
`;