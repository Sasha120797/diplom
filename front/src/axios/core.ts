import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Интерцептор для добавления токена в заголовки
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth-token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);