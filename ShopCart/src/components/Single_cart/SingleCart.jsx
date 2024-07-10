/* eslint-disable react/prop-types */

import './singlecart.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from '../../store/reducers/CartReducer';
const SingleCart = ({ prod }) => {

    const cart = useSelector(storeState => storeState.cart.cartItems)
    const dispatch = useDispatch()

    const addToCartHander = () => {
        dispatch(addToCart(prod))
    }
    const removeFormCartHandler = () => {
        dispatch(removeCart(prod))
    }

    const IsinCart = cart?.some(item => item.id == prod.id)
    return (
        <>
            <div className="cart__section">
                <div className="cart__image">
                    <img src={prod.image} alt="Product" />
                </div>
                <div className="cart__body">
                    <div className="cart__content">
                        <p className="cart__item_name">{prod.name}</p>
                        <p className="product__item_price">${prod.price}</p>
                    </div>
                    <div className="cart__btn">
                        {
                            IsinCart ? (
                                <div className="frombtn">
                                    <button onClick={removeFormCartHandler}>Remove From Cart</button>
                                </div>
                            ) : (
                                prod.available ==="true" ? (
                                    <div className="frombtn">
                                        <button onClick={addToCartHander}>Add To Cart</button>
                                    </div>
                                ):(
                                    <div>
                                    <button  className="disable_product">Not Availabe</button>
                                </div>
                                )
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCart;
