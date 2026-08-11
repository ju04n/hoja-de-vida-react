import { Link } from "react-router-dom";

function Educacion () {
  return (
    <section className='educacion'>
      <h2>Logros Académicos</h2>

      <div className='educacion-grid'>
        <article className='edu-card'>
          <img src='/imgs/sena.png' alt='Logo SENA' className='edu-logo' />
          <h3>Análisis y Desarrollo de Software</h3>
          <p>Servicio Nacional de Aprendizaje SENA</p>
          <span>Año de graduación: 2027</span>
        </article>

        <article className='edu-card'>
          <img src='/imgs/grp.jpg' alt='Logo GRP' className='edu-logo' />
          <h3>Bachiller Académico</h3>
          <p>Colegio General Gustavo Rojas Pinilla</p>
          <span>Año de graduación: 2024</span>
        </article>
      </div>

        <div className="educacion-footer">
          <Link to='/' className='inicio-link'>
          Inicio
          </Link>
        </div>
    </section>
  )
}

export default Educacion;