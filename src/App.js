import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConainer greeting={'Bienvendio al Centro Cultural y Entretenimiento Córdoba.'}/>
    </div>
  );
}

export default App;
