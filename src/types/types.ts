export interface IProduct {
 id: string;
 name: string;
 price: string;
 image: string;
 stock: number;
}

export interface ICartProduct extends IProduct {
 count: number;
}
