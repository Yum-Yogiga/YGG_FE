import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { API_END_POINT } from "../../constants/api";

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
    });

    const register = async (email, password) => {
        try {
            //api 주소 수정 필요
            return await axios.post(`${API_END_POINT}/users`, { email, password });
        } catch (e) {
            return { error: true, msg: e.response.data.msg };
        }
    };

    const login = async (email, password) => {
        try {
            const result = await axios.post(`${API_END_POINT}/sign-in`, { email, password });
            console.log("~AuthContext.js: 28 ~ login ~ result:", result);

            setAuthState({
                token: result.data.token,
                authenticated: true,
            });

            axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.token}`;

            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

            return result;
        } catch (e) {
            return { error: true, msg: e.response.data.msg };
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
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
