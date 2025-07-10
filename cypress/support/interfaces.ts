export interface Product {
    id: number,
    name: string,
    price: string,
    brand: string,
    category: CategoryProduct
}

export interface CategoryProduct {
    usertype: {
        usertype: string
    },
    category: string
}

export interface Pencil {
    title: string,
    id: number,
    color: string
}
