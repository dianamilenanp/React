import logo from './logo.svg';
import './App.css';
import Perfil from './components/perfil.js';

function App() {
  return (
    <div className="App">
      <div class='contenedor-principal'>
        <h1>Mis desarrolladores favoritos</h1>
        <Perfil 
          nombre='Brais Moure'
          pais='España'
          imagen='brais'
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
          />
        <Perfil 
          nombre='Mark Zuckerberg'
          pais='Estados unidos'
          imagen='zuckerberg'
          cargo='Ingeniero de Software'
          empresa='Facebook'
          perfil='Informático y empresario. Fundador de Facebook'
          />

      </div>
    </div>
  );
}

export default App;
