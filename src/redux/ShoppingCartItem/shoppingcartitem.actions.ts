export const  INCREMENT_TTEM_QTY:string = "INCREMENT_TTEM_QTY";
export const DECREMENT_TTEM_QTY = "DECREMENT_TTEM_QTY";
export const DELETE_TTEM_QTY = "DELETE_TTEM_QTY";

export interface ActionTypes{
    type:string;
    payload:{
        productId:string;
    }
}

export const incrItemQty =(productId:string):ActionTypes =>{
    return {
        type:INCREMENT_TTEM_QTY,
        payload:{
            productId:productId
        }
    }
};

export const decrItemQty =(productId:string):ActionTypes=>{
    return {
        type:DECREMENT_TTEM_QTY,
        payload:{
            productId:productId
        }
    }
};

export const deleteItem =(productId:string)=>{
    return {
        type:DELETE_TTEM_QTY,
        payload:{
            productId:productId

        }
    }
};