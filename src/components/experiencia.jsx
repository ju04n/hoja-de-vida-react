import { Link } from 'react-router-dom';

function Experiencia() {
  return (
    <section className='experiencia'>
      <h2>Experiencia Laboral</h2>

      <div className='experiencia-grid'>
        <article className='exp-card'>
          <img src='/imgs/glg.png' alt='Logo empresa' className='exp-logo' />

          <h3>Desarrollador Web Junior</h3>
          <p>Google</p>
          <span>Periodo: 2025 - 2026</span>
        </article>

        <article className='exp-card'>
          <img src='/imgs/add.png' alt='Logo empresa' className='exp-logo' />

          <h3>Auxiliar de Sistemas</h3>
          <p>Adidas</p>
          <span>Periodo: 2024 - 2025</span>
        </article>
      </div>

      <div className='experiencia-footer'>
        <Link to='/' className='inicio-link'>Inicio</Link>
      </div>
    </section>
  );
}

export default Experiencia;