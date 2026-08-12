import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Inicio from './components/inicio';
import Perfil from './components/perfil';
import Educacion from './components/educacion';
import Experiencia from './components/experiencia';
import Habilidades from './components/habilidades';
import Contacto from './components/contacto';
import Footer from './components/footer';

function App() {
  return (
    <div className='page'>
      <Header />

      <main className='content'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/educacion' element={<Educacion />} />
          <Route path='/experiencia' element={<Experiencia />} />
          <Route path='/habilidades' element={<Habilidades />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;