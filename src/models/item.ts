import { ItemImage } from "./itemImage"
import { Store } from "./store"


export interface Item {
    id: number
    name: string,
    icon: string | null,
    price: number,
    count: number,
    introduction?: string
    store?: Store

    images: ItemImage[]
}