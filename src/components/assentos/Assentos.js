import styled from "styled-components";
import {useState} from "react";

export default function Assentos({idAssento, numeroAssento, disponivel, form, setForm}) {
    const [selecionado, setSelecionado] = useState(false)

    function reservado(numero) {
        if (numero !== idAssento) {
            return true;
        }
        return false;
    }

    function escolherAssento(idAssento) {
        console.log(form.ids, 'pré')
        setSelecionado(!selecionado);
        for (let i = 0; i < form.ids.length; i++) {
            if (form.ids[i] === idAssento) {
                return setForm({...form, ids: form.ids.filter(reservado)});
            }
        }
        console.log(form.ids, 'pós')
        setForm({ ...form, ids: [...form.ids, idAssento] })
    }

    if (disponivel) {
        return (
            <AssentoDisponivel key={idAssento} selecionado={selecionado} onClick={() => escolherAssento(idAssento)}>
                {numeroAssento}
            </AssentoDisponivel>
        )
    } else {
        return (
            <AssentoIndisponivel key={idAssento} onClick={() => alert('Esse assento não está disponível')}>
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