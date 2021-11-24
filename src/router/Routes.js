import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from '../layouts/item-list-container/ItemListContainer'
import NavBar from '../components/nav-bar/NavBar';
import NotFound from '../layouts/not-found/NotFound'
import ItemDetailContainer from '../layouts/item-detail-container/ItemDetailContainer';
import CartContainer from '../layouts/cart-container/CartContainer'
import FinishPurchaseContainer from '../layouts/finish-purchase-container/FinishPurchaseContainer';
import LoginContainer from '../layouts/login-container/LoginContainer';
import PrivateRoute from '../components/private-route/PrivateRoute';
import SignUpContainer from '../layouts/signup-container/SignUpContainer';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginContainer />
                </Route>
                <Route exact path="/signup">
                    <SignUpContainer />
                </Route>
                <Route exact path="/">
                    <NavBar />
                    <ItemListContainer />
                </Route>
                <Route exact path="/products">
                    <NavBar />
                    <ItemListContainer />
                </Route>
                <Route exact path="/category/:categoryId">
                    <NavBar />
                    <ItemListContainer />
                </Route>
                <Route exact path="/item/:itemId">
                    <NavBar />
                    <ItemDetailContainer />
                </Route>
                <PrivateRoute exact path="/cart">
                    <NavBar />
                    <CartContainer />
                </PrivateRoute>
                <PrivateRoute exact path="/purchase">
                    <NavBar />
                    <FinishPurchaseContainer />
                </PrivateRoute>
                <Route exact path="*">
                    <NavBar />
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;