export interface CreateItem {
    name: string,
    price: number,
    count: number,
    introduction: string
}

export interface CreateItemIcon {
    icon: File | null | undefined
}