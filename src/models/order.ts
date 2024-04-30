import { Item } from "."
import { Base } from "./base"

export interface Order extends Base {
    item_id: number,
    user_id: number,
    count: number,
    status: number
    item: Item
}