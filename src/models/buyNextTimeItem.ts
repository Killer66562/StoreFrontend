import { Base } from "./base";
import { Item } from "./item";

export interface BuyNextTimeItem extends Base {
    item_id: number,
    user_id: number,

    item: Item
}