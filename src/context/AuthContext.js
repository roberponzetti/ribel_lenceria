import React, { useEffect, useState } from 'react'
import { getFirebase } from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getFirebase().auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setIsLoading(false);
        });
    }, []);

    
    return(
        <>
            {isLoading ? (
                <div className="mt-5 spinner-border spinner-color" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
            )}
        </>
    )   
}
