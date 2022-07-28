import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Poster({inTheaters}) {
    return (
        <Link to={`/filme/${inTheaters.id}`}>
            <ContainerPoster key={inTheaters.id}>
                <img src={inTheaters.posterURL} alt={inTheaters.title} />
            </ContainerPoster>
        </Link>

    )
}

const ContainerPoster = styled.div`
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    width: 145px;
    height: 209px;
    border-radius: 3px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 129px;
        height: 193px;
    }
`;