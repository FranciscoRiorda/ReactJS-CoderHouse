import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListConainer from './containers/ItemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConainer greeting={'Bienvendio al Centro Cultural y Entretenimiento Córdoba.'}/>
    </div>
  );
}

export default App;
