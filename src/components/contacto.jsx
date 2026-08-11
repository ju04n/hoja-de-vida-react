import { Link } from 'react-router-dom';

function Contacto() {
  return (
    <section className='contacto'>
      <h2>Contáctame</h2>

      <p className='contacto-intro'>
        Formulario para saber qué piensa de mi hoja de vida y si requiere
        servicios de desarrollo.
      </p>

      <form className='contacto-form'>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre: </label>
          <input
            type='text'
            id='nombre'
            placeholder='Ingrese su nombre'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='correo'>Correo electrónico: </label>
          <input
            type='email'
            id='correo'
            placeholder='Ingrese su correo'
          />
        </div>

        <fieldset className='form-group'>
          <legend>¿Requiere de mis servicios de desarrollador? </legend>

          <label className='radio-option'>
            <input type='radio' name='servicio' value='si' />
            Sí
          </label>

          <label className='radio-option'>
            <input type='radio' name='servicio' value='no' />
            No
          </label>
        </fieldset>

        <div className='form-group'>
          <label htmlFor='mensaje'>Cuénteme la necesidad</label>

          <textarea
            id='mensaje'
            rows='5'
            placeholder='Escriba aquí su mensaje'
          ></textarea>
        </div>

        <button type='submit' className='btn-enviar'>
          Enviar
        </button>
      </form>

      <div className='contacto-footer'>
        <Link to='/' className='inicio-link'>
          Inicio
        </Link>
      </div>
    </section>
  );
}

export default Contacto;