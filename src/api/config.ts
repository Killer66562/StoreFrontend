import { CreateAxiosDefaults } from "axios"

export const jsonConfig: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
}

export const multipartConfig: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "multipart/formdata"
    }
}