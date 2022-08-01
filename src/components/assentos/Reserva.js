import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import Assentos from "./Assentos";
import Legenda from "./Legenda";

export default function Reserva({confirmacao, setConfirmacao}) {
    const { idSessao } = useParams();
    const navigate = useNavigate();
    const [sessao, setSessao] = useState(null);
    const [form, setForm] = useState({
        ids: [],
        name: '',
        cpf: ''
    });

    function preencherFormulario(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function conferirDados() {
        if (form.ids.length === 0) return alert('Escolha algum assento');
        if (form.name === '') return alert('Preencha o nome do responsável pela compra');
        if (form.cpf === '') return alert('Preencha o CPF do responsável pela compra');
        setConfirmacao({...confirmacao,
            filme: sessao.movie.title,
            dia: sessao.day.weekday,
            hora: sessao.name,
            nome: form.name,
            cpf: form.cpf
        });
        enviarFormulario();
    }

    function enviarFormulario() {
        const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', form);
        promise.then(() => {navigate('/sucesso')});
        promise.catch(() => alert('Não foi possível confirmar sua reserva, tente novamente!'))
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`)

        promise.then((resposta) => setSessao(resposta.data));
        promise.catch(() => alert('Tivemos um problema, por favor tente novamente!'));
    }, [idSessao]);

    return (
            <Main>
                <h3>Selecione o(s) assento(s)</h3>
                <Sala>
                    {sessao !== null ? sessao.seats.map((valor) => <Assentos idAssento={valor.id} numeroAssento={valor.name} disponivel={valor.isAvailable} form={form} setForm={setForm} confirmacao={confirmacao} setConfirmacao={setConfirmacao}/>) : 'Carregando os assentos da sessão!'}
                </Sala>
                <Legenda />
                <Dados>
                    <h5>Nome do comprador:</h5>
                    <input required name='name' value={form.name} onChange={preencherFormulario} placeholder="Digite seu nome..."></input>
                    <h5>CPF do comprador:</h5>
                    <input required name='cpf' value={form.cpf} onChange={preencherFormulario} placeholder="Digite seu CPF..."></input>
                    <button onClick={conferirDados}>Reservar assento(s)</button>
                </Dados>

                {sessao && <Footer filme={sessao.movie} dia={sessao.day.weekday} hora={sessao.name} />}
            </Main>
    )
}

const Main = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    width: 90%;
    margin: 67px auto 120px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #293845;

    h3 {
        text-align: center;
        font-size: 24px;
        margin: 30px 0;
    }
`;

const Sala = styled.div`
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px 7px;
`;

const Dados = styled.div`
    margin: 10px 0;

    h5 {
        font-size: 18px;
        color: #293845;
    }

    input {
        height: 30px;
        width: 100%;
        margin-bottom: 5px;
        border: inset 1px solid #D4D4D4;
    }

    input::placeholder {
        font-style: italic;
        font-size: 18px;
        color: #AFAFAF;
    }

    button {
        background-color: #E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        width: 225px;
        height: 42px;
        border: none;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        color: #FFFFFF;
        font-size: 18px;

        &:hover {
        cursor: pointer;
        }
    }
`;