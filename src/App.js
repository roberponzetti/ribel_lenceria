import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/nav-bar/NavBar';
import ItemListContainer from './layouts/item-list-container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Catálogo de mi tienda">
            <ItemCount stock={10} initial={1} imgSource={"./img/art1_ribel.jpg"} />
            <ItemCount stock={0} initial={1} imgSource={"./img/art2_ribel.jpg"}/>
      </ItemListContainer>
    </div>
  );
}

export default App;
