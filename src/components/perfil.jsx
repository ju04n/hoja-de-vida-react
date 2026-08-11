import { Link } from 'react-router-dom';

function Perfil() {
    return (
        <section className='perfil'>
            <h2>Perfil Profesional</h2>

            <div className='perfil-contenido'>
                <img
                    src='/imgs/foto.png'
                    alt='Foto Juan Yara'
                    className='profile-img'
            />

            <div className="perfil-texto">
                <p>
                Aprendiz en formación ADSO SENA con conocimientos en desarrollo
                web, React, Git y GitHub, herramientas digitales, análisis de
                información y trabajo colaborativo.
                </p>
            </div>
            </div>

            <Link to='/' className='inicio-link'>Inicio</Link>
        </section>
    );
}

export default Perfil;