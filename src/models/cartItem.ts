import { Item } from "."
import { Base } from "./base"

export interface CartItem extends Base {
    item_id: number,
    user_id: number,
    count: number,
    item: Item
}