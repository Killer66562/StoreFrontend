import type { AxiosInstance, CreateAxiosDefaults } from "axios"
import axios from "axios";
import { storeToRefs } from "pinia";
import { useTokenStore } from "../stores/tokenStore";

export class ApiInstance {
    private __instance: AxiosInstance;

    constructor (config: CreateAxiosDefaults) {
        this.__instance = axios.create(config);
        this.__instance.interceptors.request.use((request) => {
            const tokenStore = useTokenStore();
            const { accessToken, isLogin } = storeToRefs(tokenStore);
            if (isLogin.value === true)
                request.headers.Authorization = `Bearer ${accessToken.value}`;
            return request;
        });
        this.__instance.interceptors.response.use((response) => {
            return Promise.resolve(response.data);
        }, (err) => {
            return Promise.reject(err);
        })
    }

    public async get<T> (url: string, params?: object) : Promise<T> {
        return await this.__instance.get(url, { params: params });
    }

    public async post<T, D> (url: string, data: D) : Promise<T> {
        return await this.__instance.post(url, data);
    }

    public async postForm<T, D> (url: string, data: D) : Promise<T> {
        return await this.__instance.postForm(url, data);
    }

    public async put<T, D> (url: string, data: D) : Promise<T> {
        return await this.__instance.put(url, data);
    }

    public async putForm<T, D> (url: string, data: D) : Promise<T> {
        return await this.__instance.putForm(url, data);
    }

    public async patch<T, D> (url: string, data: D) : Promise<T> {
        return await this.__instance.patch(url, data);
    }

    public async patchForm<T, D> (url: string, data: D) : Promise<T> {
        return await this.__instance.patchForm(url, data);
    }

    public async delete<T> (url: string) : Promise<T> {
        return await this.__instance.delete(url);
    }
}