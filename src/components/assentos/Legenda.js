import styled from "styled-components";

export default function Legenda() {
    return (
        <Wrapper>
            <div>
                <ion-icon name="ellipse"></ion-icon>
                Selecionado
            </div>
            <div>
                <ion-icon name="ellipse"></ion-icon>
                Disponível
            </div>
            <div>
                <ion-icon name="ellipse"></ion-icon>
                Indisponível
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 10px 0;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 13px;
        color: #4E5A65;
    }

    ion-icon {
        font-size: 24px;
    }

    div:nth-child(1) ion-icon {
        background-color: #1AAE9E;
        color: #8DD7CF;
        border-radius: 50%;
    }

    div:nth-child(2) ion-icon {
        background-color: #7B8B99;
        color: #C3CFD9;
        border-radius: 50%;
    }

    div:nth-child(3) ion-icon {
        background-color: #F7C52B;
        color: #FBE192;
        border-radius: 50%;
    }
`;