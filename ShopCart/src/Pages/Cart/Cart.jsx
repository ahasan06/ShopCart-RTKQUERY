import "./cart.css"
import CartItem from './../../components/Cart_item/CartItem';
const Cart = () => {
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
                    <CartItem/>
                    </tbody>
                </table>
            </div>
            <h2 className="total__price">Your Total Price Will be : <span>$600</span> </h2>
            <div className="cart__actions">
                <button className="clear__cart_btn">
                    Clear Cart
                </button>
            </div>
        </div>
    </>
    );
};

export default Cart;