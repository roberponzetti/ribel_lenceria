import './App.css';
import NavBar from './components/nav-bar/NavBar';
import ItemListContainer from './layouts/item-list-container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Catálogo de mi tienda">
        <h1>Hola landing</h1>
      </ItemListContainer>
    </div>
  );
}

export default App;
