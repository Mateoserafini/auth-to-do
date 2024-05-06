import { createContext, useState, useContext } from 'react';
import { registerRequest } from '../api/auth.js';
import { set } from 'react-hook-form';

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Crear un hook para usar el contexto de autenticación
export const useAuth = () => { 
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// Definir el proveedor de autenticación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    // Función para registrarse
    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    // Devolver el proveedor con los valores de estado y funciones
    return (
        <AuthContext.Provider 
            value={{
                signup,
                user,
                isAuthenticated,
                errors
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
