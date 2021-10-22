import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from '../layouts/item-list-container/ItemListContainer'
import ItemList from '../components/ItemList';
import NavBar from '../components/nav-bar/NavBar';
import { products } from '../data/products';
import NotFound from '../layouts/not-found/NotFound'

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <ItemListContainer>
                        <ItemList products={products} />
                    </ItemListContainer>
                </Route>
                <Route exact path="*">
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;