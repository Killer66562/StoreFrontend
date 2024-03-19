import { defineStore } from "pinia";
import { ref } from "vue";
import { Register } from "../models/register";
import { useJsonGeneral } from "../composibles";
import { router } from "../routes";

export const useRegisterStore = defineStore("registerStore", () => {
    const { apiInstance, toast } = useJsonGeneral();
    const data = ref<Register>({
        username: "",
        email: "",
        password: ""
    });
    const clearData = () => {
        data.value = {
            username: "",
            email: "",
            password: ""
        }
    }
    const sendData = async () => {
        try {
            await apiInstance.post("/register", data.value);
            await router.replace("/login");
            clearData();
            toast.success("註冊成功");
            toast.info("已將您重新定向至登入頁面");
        }
        catch (err) {
            throw err;
        }
    }
    return {
        data,
        sendData,
        clearData
    }
})