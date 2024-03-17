import { Store } from "./store"


export interface Item {
    id: number
    name: string,
    price: number,
    count: number,
    introduction?: string
    store?: Store
}