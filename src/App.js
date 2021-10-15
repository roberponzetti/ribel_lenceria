import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/nav-bar/NavBar';
import ItemListContainer from './layouts/item-list-container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Catálogo de mi tienda">
        <ItemCount stock={10} initial={1} />
      </ItemListContainer>
    </div>
  );
}

export default App;
