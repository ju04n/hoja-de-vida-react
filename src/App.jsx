import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="perfil">
          <h2>Perfil Profesional</h2>
          <img
            src=""
            alt="Foto de perfil"
            className="profile-img"
          />
          <p>
            Profesional en formación ADSO SENA con conocimientos en desarrollo
            web, React, Git y GitHub, herramientas digitales, análisis de
            información y trabajo colaborativo.
          </p>
        </section>

        <section id="educacion">
          <h2>Logros Académicos</h2>

          <div className="card-grid">
            <div className="card">
              <h3>ADSO</h3>
              <p>SENA</p>
              <p>Año: 2026</p>
            </div>

            <div className="card">
              <h3>Bachiller Académico</h3>
              <p>Colegio General Gustavo Rojas Pinilla</p>
              <p>Año: 2024</p>
            </div>
          </div>
        </section>

        <section id="experiencia">
          <h2>Experiencia Laboral</h2>

          <div className="card-grid">
            <div className="card">
              <h3>...</h3>
              <p>...</p>
              <p>...</p>
            </div>

            <div className="card">
              <h3>...</h3>
              <p>...</p>
              <p>...</p>
            </div>
          </div>
        </section>

        <section id="habilidades">
          <h2>Habilidades y Hobbies</h2>

          <div className="card-grid">
            <div className="card">React</div>
            <div className="card">HTML y CSS</div>
            <div className="card">Git y GitHub</div>
            <div className="card">Música</div>
            <div className="card">Mecánica de bicicletas</div>
          </div>
        </section>

        <section id="contacto">
          <h2>Contáctame</h2>

          <form className="contact-form">
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo electrónico" required />

            <label>¿Requiere mis servicios de desarrollador?</label>

            <div className="radio-group">
              <label><input type="radio" name="servicio" /> Sí</label>
              <label><input type="radio" name="servicio" /> No</label>
            </div>

            <textarea placeholder="Cuéntame la necesidad" rows="5"></textarea>

            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;