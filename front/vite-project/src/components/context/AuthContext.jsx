import { createContext, useCallback, useMemo, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }){
    const [isAuthenticated, setIsAuthenticated] = useState(
        window.localStorage.getItem('userID') ?? false
    );

    const login = useCallback(function (){
        window.localStorage.setItem('userID', true);
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(function (){
        window.localStorage.removeItem('userID');
        setIsAuthenticated(false);
    }, []);

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated
        }),
        [login, logout, isAuthenticated]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    return useContext(AuthContextProvider)
  };