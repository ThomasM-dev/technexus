import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DestactProduct from './components/DestactProduct';
import HeroBanner from './components/HeroBanner';
import NavBar from './components/NavBar';
import ChatBot from './components/ChatBot';
import ProductoDetalle from './pages/ProductoDetalle';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <ChatBot />

      <Routes>
        <Route path="/" element={
          <>
            <HeroBanner />
            <DestactProduct />
          </>
        } />

        <Route path="/producto/:nombre" element={<ProductoDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
