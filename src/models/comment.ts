import { Base } from "./base";
import { User } from "./user";

export interface Comment extends Base {
    content: string,
    user_id: number,
    item_id: number,

    user: User
}