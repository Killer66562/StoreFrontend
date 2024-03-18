import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from "axios"
import { useUserStore } from "../stores/userStore";

export class ApiInstance {
    protected _instance: AxiosInstance

    public constructor(config: CreateAxiosDefaults) {
        this._instance = axios.create(config);
        this._instance.interceptors.request.use((request) => {
            const userStore = useUserStore()
            if (userStore.isLogin)
                request.headers.Authorization = `Bearer ${userStore.accessToken}`;
            return request;
        })
        this._instance.interceptors.response.use((response) => {
            return response.data;
        }, (error: AxiosError) => {
            if (error.message == "Network Error")
                return Promise.reject("網路錯誤，請檢查網路連線。")
            else
                return Promise.reject({status: error.response?.status, data: error.response?.data});
        });
    }

    public async get<T>(url: string, params: object): Promise<T> {
        return await this._instance.get(url, {params: params});
    };

    public async post<T, D>(url: string, data: D): Promise<T> {
        return await this._instance.post(url, data);
    };

    public async put<T, D>(url: string, data: D): Promise<T> {
        return await this._instance.put(url, data);
    };

    public async patch<T, D>(url: string, data: D): Promise<T> {
        return await this._instance.patch(url, data);
    };

    public async delete<T>(url: string): Promise<T> {
        return await this._instance.delete(url);
    };
};