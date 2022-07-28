import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Home from './home/Home';
import Sessao from './sessao/Sessao';
import Reserva from './assentos/Reserva';

export default function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/filme/:filmeId" element={<Sessao />}/>
                    <Route path="/sessao/" element={<Reserva />} />
                </Routes>
            </BrowserRouter>
        </>
        
    );
}