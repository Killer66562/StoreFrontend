import { useToast } from "vue-toast-notification";

export const useCustomToast = () =>  {
    return useToast({
        dismissible: true,
        duration: 2000,
        position: "bottom"
    });
}