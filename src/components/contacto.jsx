import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    servicio: '',
    mensaje: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState({
    tipo: '',
    texto: ''
  });

  const manejarCambio = (e) => {
      setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
      });
    };

  
  const enviarFormulario = async (e) => {
  e.preventDefault();

  // Limpiar mensaje anterior
  setMensajeEstado({ tipo: '', texto: '' });

  // Validar campos obligatorios
  if (!formulario.nombre || !formulario.correo || !formulario.mensaje) {
    setMensajeEstado({
      tipo: 'error',
      texto: 'Complete los campos obligatorios.'
    });
    return;
  }

  // Validar correo
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!correoValido.test(formulario.correo)) {
    setMensajeEstado({
      tipo: 'error',
      texto: 'Ingrese un correo electrónico válido.'
    });
    return;
  }

  try {
    setEnviando(true);

    await axios.post('http://localhost:5000/contacto', formulario);

    setMensajeEstado({
      tipo: 'exito',
      texto: '¡Mensaje enviado correctamente! Gracias por contactarme.'
    });

    setFormulario({
      nombre: '',
      correo: '',
      servicio: '',
      mensaje: ''
    });
  } catch (error) {
    console.error(error);

    setMensajeEstado({
      tipo: 'error',
      texto: 'Ocurrió un error al enviar el mensaje.'
    });
  } finally {
    setEnviando(false);
  }
};

  return (
    <section className='contacto'>
      <h2>Contáctame</h2>

      <p className='contacto-intro'>
        Formulario para saber qué piensa de mi hoja de vida y si requiere
        servicios de desarrollo.
      </p>

      {mensajeEstado.texto && (
        <div className={mensajeEstado.tipo === 'exito' ? 'mensaje-exito' : 'mensaje-error'}
        >
          {mensajeEstado.texto}
        </div>
      )}

      <form className='contacto-form' onSubmit={enviarFormulario}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre: </label>
          <input
            type='text'
            id='nombre'
            name='nombre'
            value={formulario.nombre}
            onChange={manejarCambio}
            placeholder='Ingrese su nombre'
            />
        </div>

        <div className='form-group'>
          <label htmlFor='correo'>Correo electrónico: </label>
          <input
            type='email'
            id='correo'
            name='correo'
            value={formulario.correo}
            onChange={manejarCambio}
            placeholder='Ingrese su correo'
            />
        </div>

        <fieldset className='form-group'>
          <legend>¿Requiere de mis servicios de desarrollador? </legend>

          <label className='radio-option'>
            <input
              type='radio'
              name='servicio'
              value='si'
              checked={formulario.servicio === 'si'}
              onChange={manejarCambio} 
            />
            Sí
          </label>

          <label className='radio-option'>
            <input
              type='radio'
              name='servicio'
              value='no'
              checked={formulario.servicio === 'no'}
              onChange={manejarCambio}
            />
            No
          </label>
        </fieldset>

        <div className='form-group'>
          <label htmlFor='mensaje'>Cuénteme la necesidad</label>
          <textarea
              id='mensaje'
              name='mensaje'
              rows='5'
              value={formulario.mensaje}
              onChange={manejarCambio}
              placeholder='Escriba aquí su mensaje'>
            </textarea>
        </div>

        <button type='submit' className='btn-enviar' disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar'}
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