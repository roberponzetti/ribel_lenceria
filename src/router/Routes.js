import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from '../layouts/item-list-container/ItemListContainer'
import NavBar from '../components/nav-bar/NavBar';
import NotFound from '../layouts/not-found/NotFound'
import ItemDetailContainer from '../layouts/item-detail-container/ItemDetailContainer';
import CartContainer from '../layouts/cart-container/CartContainer'

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <ItemListContainer />
                </Route>
                <Route exact path="/products">
                    <ItemListContainer />
                </Route>
                <Route exact path="/category/:categoryId">
                    <ItemListContainer />
                </Route>
                <Route exact path="/item/:itemId">
                    <ItemDetailContainer />
                </Route>
                <Route exact path="/cart">
                    <CartContainer />
                </Route>
                <Route exact path="*">
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;