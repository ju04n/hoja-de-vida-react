import { Link } from 'react-router-dom';

function Habilidades() {
  return (
    <section className='habilidades'>
      <h2>Habilidades y Hobbies</h2>

      <div className='habilidades-galeria'>
        <figure className='hab-item'>
          <img src='/imgs/react.png' alt='React' />
          <figcaption>Desarrollo web con React</figcaption>
        </figure>

        <figure className='hab-item'>
          <img src='/imgs/github.png' alt='GitHub' />
          <figcaption>Control de versiones con Git y GitHub</figcaption>
        </figure>

        <figure className='hab-item'>
          <img src='/imgs/musica.jpg' alt='Música' />
          <figcaption>Música y creatividad</figcaption>
        </figure>
      </div>

      <div className='habilidades-textos'>
        <p>
          Competencias técnicas en HTML, CSS, JavaScript y React para el
          desarrollo de interfaces web modernas.
        </p>

        <p>
          Habilidades blandas como trabajo colaborativo, comunicación y
          aprendizaje autónomo.
        </p>

        <p>
          Pasatiempos relacionados con la música, la tecnología y el
          mejoramiento continuo.
        </p>
      </div>

      <div className='habilidades-footer'>
        <Link to='/' className='inicio-link'>
          Inicio
        </Link>
      </div>
    </section>
  );
}

export default Habilidades;