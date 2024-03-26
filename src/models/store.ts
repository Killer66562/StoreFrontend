import { Base } from "./base"

export interface Store extends Base {
    name: string
    introduction: string,
    icon: string | null,
    user_id: number
};