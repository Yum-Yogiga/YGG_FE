import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { signin } from "api";

const TOKEN_KEY = "my-jwt";
const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({ token: null, authenticated: null });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            console.log("stored:", token);
        };

        axios.defaults.withCredentials = true;
        loadToken();
    }, []);

    const login = async ({ userId, password }) => {
        try {
            const result = await signin({ userId, password }).catch((e) => console.log(e));
            console.log("~AuthContext.js: 29 ~ login ~ result:", result.data);

            setAuthState({
                token: result.data.token,
                authenticated: true,
            });

            axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.token}`;

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

            return result.data.success;
        } catch (e) {
            console.log(`~ ~ AuthContext.js: 46 ~ ~: ${e}`);
        }
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync(TOKEN_KEY);
        axios.defaults.headers.common["Authorization"] = "";
        setAuthState({
            token: null,
            authenticated: false,
        });
    };

    const value = {
        onLogin: login,
        onLogout: logout,
        authState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
