import "./cart.css"
import CartItem from './../../components/Cart_item/CartItem';
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../../store/reducers/CartReducer";
const Cart = () => {
    const cart = useSelector(shopcart=>shopcart.cart)
    const dispatch = useDispatch()
    
    let totalCart =  cart.reduce((acc,item)=>acc+item.price*item.quantity,0)

    const clearCartHandler = ()=>{
        dispatch(clearCart())
    }

    return (
        <>
        <div className="cart__container">
            <h4 className="cart__title">Product list in your cart</h4>
            <div className="cart__table-container">
                <table className="cart__table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>  
                    </thead>
                    <tbody className="cart__details">
                        {
                        cart.map((item)=>(
                            <CartItem prod={item} key={item.id}/>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <h2 className="total__price">Your Total Price Will be : <span>$ {totalCart}</span> </h2>
            <div className="cart__actions">
                <button className="clear__cart_btn" onClick={clearCartHandler}>
                    Clear Cart
                </button>
            </div>
        </div>
    </>
    );
};

export default Cart;