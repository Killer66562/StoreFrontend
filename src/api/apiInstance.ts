import axios, { AxiosInstance, CreateAxiosDefaults } from "axios"

export class ApiInstance {
    protected _instance: AxiosInstance

    public constructor(config: CreateAxiosDefaults) {
        this._instance = axios.create(config);
        this._instance.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
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