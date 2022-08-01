import styled from "styled-components";
import {useState} from "react";

export default function Assentos({idAssento, numeroAssento, disponivel, form, setForm, confirmacao, setConfirmacao}) {
    const [selecionado, setSelecionado] = useState(false)

    function idReservado(valor) {
        if (valor !== idAssento) {
            return true;
        }
    }

    function numeroReservado(valor) {
        if (valor !== numeroAssento) {
            return true;
        }
    }

    function escolherAssento() {
        setSelecionado(!selecionado);
            if (selecionado) {
                setConfirmacao({...confirmacao, assentos: confirmacao.assentos.filter(numeroReservado)});
                setForm({...form, ids: form.ids.filter(idReservado)});
                return;
            }
        setConfirmacao({...confirmacao, assentos: [...confirmacao.assentos, numeroAssento]});
        setForm({ ...form, ids: [...form.ids, idAssento] });
    }

    if (disponivel) {
        return (
            <AssentoDisponivel selecionado={selecionado} onClick={() => escolherAssento()}>
                {numeroAssento}
            </AssentoDisponivel>
        )
    } else {
        return (
            <AssentoIndisponivel onClick={() => alert('Esse assento não está disponível')}>
                {numeroAssento}
            </AssentoIndisponivel>
        )
    }
    
}

const AssentoDisponivel = styled.div`
    background-color: ${props => props.selecionado ? '#8DD7CF' : '#C3CFD9'};
    border: solid 1px ${props => props.selecionado ? '#45BDB0' : '#808F9D'};

    color: #000000;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    &&:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const AssentoIndisponivel = styled.div`
    background-color: #FBE192;
    border: solid 1px #F7C52B;

    color: #000000;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    &&:hover {
        cursor: not-allowed;
    }
`;