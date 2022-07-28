import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Poster({filme}) {
    return (
        <Link to={`/filme/${filme.id}`}>
            <ContainerPoster key={filme.id}>
                <img src={filme.posterURL} alt={filme.title} />
            </ContainerPoster>
        </Link>

    )
}

const ContainerPoster = styled.div`
    box-shadow: 0px 2px 4px 2px #0000001A;
    width: 145px;
    height: 209px;
    border-radius: 3px;
    padding: 8px;

    img {
        width: 129px;
        height: 193px;
    }
`;