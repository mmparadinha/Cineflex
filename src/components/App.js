import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Home from './home/Home';
import Sessoes from './sessao/Sessoes';
import Reserva from './assentos/Reserva';
import Sucesso from './confirmacao/Sucesso';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/filme/:idFilme" element={<Sessoes />}/>
                    <Route path="/sessao/:idSessao" element={<Reserva />} />
                    <Route path="/sucesso" element={<Sucesso />} />

                </Routes>
            </BrowserRouter>
        </>
        
    );
}