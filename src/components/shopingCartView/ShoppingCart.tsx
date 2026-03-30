import React  from "react";
import * as cartActions from '../../redux/ShoppingCartItem/shoppingcartitem.actions';
import * as cartReducer from '../../redux/ShoppingCartItem/shoppingcartItem.reducers';
import {useDispatch,useSelector} from 'react-redux';
import { AppDispatch } from "../../redux/store";


interface IProps {}
interface IState {
    cartKey : cartReducer.CartState
}


let ShoppingCart:React.FC=()=> {
   // let dispatch = useDispatch();
    //let dispatch = useDispatch();
    const dispatch = useDispatch<AppDispatch>();

    // get cart info from redux Store
    let cartState:cartReducer.CartState=useSelector((store:IState)=>{
       return store.cartKey;
    });

    let incrQty = (productId: string) => {
        dispatch(cartActions.incrItemQty(productId));
    };


 let incrItemQty =(productId:string)=>{
     dispatch(cartActions.incrItemQty(productId));
 }
    let decrQty =(productId:string)=>{
        dispatch(cartActions.decrItemQty(productId));
    };
    let deleteItem =(productId:string)=>{
        dispatch(cartActions.deleteItem(productId));
    };
    let calcGrandTotal =():number =>{
        let total:number=0;
        for(let product of cartState.products){
            total += product.price * product.qty;
        }
        return total;
    };

    let {products}= cartState;


    return(
        <React.Fragment>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-teal">Shopping Cart</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut cupiditate, ea error facilis impedit perferendis quia quidem sint. Debitis delectus ipsum nemo officiis quis! Beatae doloribus ipsam molestiae quam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover text-center table-striped shadow-lg">
                                <thead className="bg-teal text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    products.map(product =>{
                                        return(
                                            <tr key={product.sno}>
                                                <td>{product.sno}</td>
                                                <td>
                                                    <img src={product.image} alt={''} width={50} height={50}/>
                                                </td>
                                                <td>{product.name}</td>
                                                <td>&#8377;{product.price.toFixed(2)}</td>
                                                <td>

                                                    <i onClick={decrQty.bind(this,product.sno)}
                                                        className="fa fa-minus-circle mx-1 text-success"/>
                                                    {product.qty}

                                                    <i
                                                        onClick={incrQty.bind(this,product.sno)}
                                                        className="fa fa-plus-circle mx-1 text-success"/>
                                                </td>
                                                <td>&#8377;{(product.price * product.qty).toFixed(2)}</td>
                                                <td>
                                                    <button onClick={deleteItem.bind(this,product.sno)} className="btn btn-danger btn-sm">
                                                        <i className="fa fa-trash"/>
                                                    </button>
                                                </td>
                                            </tr>



                                    )
                                    })
                                }
                                {
                                    cartState.products.length>0?
                                        <tr>
                                            <td colSpan={4}/>
                                            <td>Grand Total</td>
                                            <td>&#8377; {calcGrandTotal().toFixed(2)} </td>
                                        </tr> :
                                        <tr>
                                            <td colSpan={7} className="text-danger">No Items Found</td>
                                        </tr>
                                }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>

    )
};
export default ShoppingCart;