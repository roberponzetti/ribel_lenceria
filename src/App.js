import './App.css';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductContext';
import Routes from './router/Routes';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <Routes />
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
