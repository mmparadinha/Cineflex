import styled from "styled-components";

export default function Assentos({idAssento, numeroAssento, disponivel}) {
    if (disponivel) {
        return (
            <AssentoDisponivel key={idAssento}>
                {numeroAssento}
            </AssentoDisponivel>
        )
    } else {
        return (
            <AssentoIndisponivel key={idAssento}>
                {numeroAssento}
            </AssentoIndisponivel>
        )
    }
    
}

const AssentoDisponivel = styled.div`
    background-color: #C3CFD9;
    border: solid 1px inset #808F9D;

    color: #000000;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
`;

const AssentoIndisponivel = styled.div`
    background-color: #FBE192;
    border: solid 1px inset #F7C52B;

    color: #000000;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
`;