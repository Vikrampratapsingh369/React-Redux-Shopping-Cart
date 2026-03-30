import {combineReducers} from 'redux';
import * as cartReducer from './ShoppingCartItem/shoppingcartItem.reducers';

let rootReducer = combineReducers({
    cartKey: cartReducer.reducer
});
export default rootReducer;