import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section className='inicio'>
      <div className='inicio-superior'>
        <div className='inicio-texto'>
          <h2>HOJA DE VIDA DIGITAL</h2>
          <p>Mockup de página web personal</p>
        </div>

        <div className='inicio-imagen'>
          <img src='/imgs/foto.png' alt='Foto Principal' />
        </div>
      </div>

      <div className='inicio-inferior'>
        <div className='inicio-menu'>
          <Link to='/perfil'>Perfil Profesional</Link>
          <Link to='/educacion'>Logros Académicos</Link>
          <Link to='/experiencia'>Experiencia Laboral</Link>
          <Link to='/habilidades'>Habilidades</Link>
        </div>

        <div className='inicio-contacto'>
          <Link to='/contacto'>Contacto</Link>
        </div>
      </div>
    </section>
  );
}

export default Inicio;