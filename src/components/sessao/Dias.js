import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Dias({sessoes}) {
    return (
        <Container>
            <h4>Terça - 26/07</h4>
            <Horarios>
                <Link to={`/sessao/`}>
                    <button>15h</button>
                </Link>

                <Link to={`/sessao/`}>
                    <button>18h</button>
                </Link>
            </Horarios>
        </Container>
    )
}

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 22px;

    h4 {
        font-size: 20px;
        font-weight: 400;
    }
`;

const Horarios = styled.div`
    gap: 8px;
    display: flex;

    button {
        background-color: #E8833A;
        border-radius: 3px;
        width: 83px;
        height: 43px;
        border: none;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
`;