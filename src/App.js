import './App.css';
import ItemList from './components/ItemList';
import NavBar from './components/nav-bar/NavBar';
import CartContext, { CartProvider } from './context/CartContext';
import { products } from './data/products';
import ItemListContainer from './layouts/item-list-container/ItemListContainer';
import Routes from './router/Routes';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
      {/* <NavBar/> */}
      {/* <ItemListContainer>
        <ItemList products={products} /> */}
            {/* <ItemCount stock={10} initial={1} imgSource={"./img/art1_ribel.jpg"} />
            <ItemCount stock={0} initial={1} imgSource={"./img/art2_ribel.jpg"}/> */}
      {/* </ItemListContainer> */}
    </div>
  );
}

export default App;
