import { ApiInstance, jsonConfig } from "../api";
import { useCustomToast } from "../composibles";

export const useJsonGeneral = () => {
    const apiInstance = new ApiInstance(jsonConfig);
    const toast = useCustomToast();
    return {
        apiInstance,
        toast
    }
}