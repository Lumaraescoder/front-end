import {ICartProduct,} from '../types/types'


export const getTotalItems = (cart: ICartProduct[]) => {
 return cart.reduce((acc, curr) => {
   return acc + curr.count;
 }, 0);
};
