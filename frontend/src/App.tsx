import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Order } from './pages/Order';
import { Confirmation } from './pages/Confirmation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/encomenda" element={<Order />} />
        <Route path="/confirmacao/:orderId" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
