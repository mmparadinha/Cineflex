import styled from "styled-components";

export default function Header() {
    return (
        <Container>
            <Title>CINEFLEX</Title>
        </Container>
    )
}

const Title = styled.h1`
    color: #E8833A;
    font-size: 34px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
`;

const Container = styled.div`
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;