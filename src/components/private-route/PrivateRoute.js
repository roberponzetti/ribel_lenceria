import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'

const PrivateRoute = ({ children, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) => (
                !!currentUser ? (
                    children
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: location }
                      }} />
                ))
            }
        />
    )
}

export default PrivateRoute
