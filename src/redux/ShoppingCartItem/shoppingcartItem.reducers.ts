import * as cartAction from './shoppingcartitem.actions';
import {Product} from '../../components/models/Products';
import {DECREMENT_TTEM_QTY, INCREMENT_TTEM_QTY} from "./shoppingcartitem.actions";

export interface CartState{
    products: Product[];
}

let initialState: CartState = {
    products: [
        {sno:'ARTE101',name:'fresh capsicum green',image:'https://www.bbassets.com/media/uploads/p/m/10000067_27-fresho-capsicum-green.jpg',price:1500,qty:5},
        {sno:'ARTE102',name:'fresh carrot orange',image:'https://www.bbassets.com/media/uploads/p/m/10000070_17-fresho-carrot-orange.jpg',price:500,qty:50},
        {sno:'ARTE103',name:'resh cauliflower',image:'https://www.bbassets.com/media/uploads/p/m/10000074_21-fresho-cauliflower.jpg',price:2500,qty:150},
        {sno:'ARTE104',name:'fresh coriander leaves',image:'https://www.bbassets.com/media/uploads/p/m/10000326_17-fresho-coriander-leaves.jpg',price:500,qty:250},
        {sno:'ARTE105',name:'fresh onion',image:'https://www.bbassets.com/media/uploads/p/m/10000150_21-fresho-onion.jpg',price:400,qty:350}
    ]
};


export const reducer =(state=initialState, action:cartAction.ActionTypes):CartState => {
    switch (action.type) {
        case INCREMENT_TTEM_QTY:
            let incrProducts: Product[] = state.products.map(product =>{
                if(product.sno === action.payload.productId){
                    return{
                        ...product,
                        qty:product.qty +1
                    }
                }
                return product;
            });
            return {
                products:[...incrProducts]
            };
        case DECREMENT_TTEM_QTY:
            let decrProducts: Product[] = state.products.map(product =>{
                if(product.sno === action.payload.productId){
                    return{
                        ...product,
                        qty:product.qty -1 >0 ? product.qty -1 : 1
                    }
                }
                return product;
            });
            return {
                products:[...decrProducts]
            };

        case cartAction.DELETE_TTEM_QTY:
            let remainigItems = state.products.filter(product => product.sno !== action.payload.productId);
            return {
                products:[...remainigItems]
            };
        default:return state;
    }
};