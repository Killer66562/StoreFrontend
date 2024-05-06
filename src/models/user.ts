import { Base } from "./base";

export interface User extends Base {
    username: string,
    email: string,
    is_verified: boolean,
    is_admin: boolean,
    icon: string
}