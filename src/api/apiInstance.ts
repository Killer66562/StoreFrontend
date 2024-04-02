import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from "axios"
import { useUserStore } from "../stores/userStore";
import { useToast } from "vue-toast-notification";
import { router } from "../routes";

export class ApiInstance {
    protected _instance: AxiosInstance
    protected _toast = useToast({position: "bottom", dismissible: true, duration: 2000});
    protected _userStore = useUserStore();
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
            if (error.message == "Network Error") {
                this._toast.error("網路錯誤，請檢查網路連線。");
                return Promise.reject("網路錯誤，請檢查網路連線。");
            }
            else {
                if (error.response?.status as number >= 500) {
                    this._toast.error("伺服器錯誤。");
                    return Promise.reject("伺服器錯誤。");
                }
                else if (error.response?.status as number == 429) {
                    this._toast.error("你已被限速。");
                    return Promise.reject("你已被限速。");
                }
                else if (error.response?.status as number == 422) {
                    
                }
                else if (error.response?.status as number == 405) {
                    this._toast.error("未知的伺服器端點。");
                    return Promise.reject("未知的伺服器端點。");
                }
                else if (error.response?.status as number == 401) {
                    if (router.currentRoute.value.path != "/login") {
                        if (this._userStore.isLogin) {
                            this._toast.error("驗證失敗，請重新登入。");
                            return Promise.reject("驗證失敗，請重新登入。");
                        }
                        else {
                            this._toast.error("請先登入。");
                            return Promise.reject("請先登入。");
                        }
                    }
                    else
                        return Promise.reject("使用者名稱或密碼錯誤。");
                }
                else if (error.response?.status as number >= 400) {
                    const responseData = error.response?.data as any;
                    this._toast.error(responseData.message);
                    return Promise.reject(responseData.message);
                }
                else {
                    this._toast.error("未知的錯誤");
                    return Promise.reject("未知的錯誤");
                }
            }
        });
    }

    public async get<T>(url: string, params?: object): Promise<T> {
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