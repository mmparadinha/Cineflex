import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Home from './home/Home';
import Sessoes from './sessao/Sessoes';
import Reserva from './assentos/Reserva';
import Sucesso from './confirmacao/Sucesso';

export default function App() {
const [confirmacao, setConfirmacao] = useState({
    filme: '',
    dia: '',
    hora: '',
    assentos: [],
    nome: '',
    cpf: ''
});

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home setConfirmacao={setConfirmacao}/>}/>
                    <Route path="/filme/:idFilme" element={<Sessoes />}/>
                    <Route path="/sessao/:idSessao" element={<Reserva confirmacao={confirmacao} setConfirmacao={setConfirmacao}/>}/>
                    <Route path="/sucesso" element={<Sucesso confirmacao={confirmacao}/>}/>
                </Routes>
            </BrowserRouter>
        </>
        
    );
}