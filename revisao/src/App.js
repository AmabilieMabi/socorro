import './App.css';
import Imagem from "./img/Scream_03-1c6647feac364a8e89598b9fbb7897c8.jpg"
import NoticiaComponente from './componente/Noticia';
function App() {
  return (
    <div className="App">

      <h1>Billy meu marido</h1>
      <NoticiaComponente
      titulo="Um titulo top"
      imagem={Imagem}
      descricao="Descrição top do filme"
      categoria="categoria"/>     
    </div>
  );
}

export default App;
