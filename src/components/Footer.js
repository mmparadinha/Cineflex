import styled from "styled-components";

export default function Footer({ filme, dia, hora }) {
    return (
        <Container>
            <ContainerPoster key={filme.id}>
                <img src={filme.posterURL} alt={filme.title} />
            </ContainerPoster>
            <h2>
                {filme.title}
                <br/>
                {dia ? `${dia} - ${hora}` : ''}
            </h2>
        </Container>
    )
}

const Container = styled.div`
    border: 1px solid #9EADBA;
    background-color: #DFE6ED;
    width: 100%;
    min-height: 117px;
    padding: 20px;
    gap: 14px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: left;
    align-items: center;

    h2 {
        color: #293845;
        font-size: 26px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`;

const ContainerPoster = styled.div`
    background-color: #FFFFFF;
    width: 64px;
    height: 89px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 48px;
        height: 72px;
    }
`;