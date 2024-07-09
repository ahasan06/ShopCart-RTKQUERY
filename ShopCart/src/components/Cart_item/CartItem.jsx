/* eslint-disable react/prop-types */
import "./cartItem.css"
import {useDispatch } from "react-redux";
import { modifyCart,removeCart } from "../../store/reducers/CartReducer";
import { useState } from "react";
const CartItem = ({prod}) => {

    console.log("prod",prod);
    const [itemQty,setItemQty] = useState(prod.quantity)
    const totalPrice = itemQty*prod.price

    const dispatch = useDispatch()

    const modifyCartHandler =(e)=>{

        const newQuantity = e.target.value
        if (Number(e.target.value)<1 || typeof newQuantity !== Number) {
            alert("Cant Insert Unreal value")
        }
        else{   
        dispatch(modifyCart(prod.id, newQuantity));
        setItemQty(Number(newQuantity));
    }
    }

    const removeFormcartHandler =()=>{
        dispatch(removeCart(prod))
    }
    const increaseHandler =()=>{
        const newQuantity = itemQty + 1;
        setItemQty(newQuantity);
        dispatch(modifyCart(prod.id, newQuantity));
    }
    const decreaseHandler =()=>{
        const newQuantity = itemQty - 1;
        if (newQuantity>0) {
            setItemQty(newQuantity);
            dispatch(modifyCart(prod.id, newQuantity));
        }
        else{
            alert("Cant Insert Unreal value")
        }
    }
    return (


        <tr>
            <td className="product">
                <img src={prod.image} alt="" />
            </td>
            <td>
                <p>{prod.name}</p>
            </td>
            <td>
                <p>${prod.price}</p>
            </td>
            <td>
            <div className="qty_input">
                    <button
                        className="qty_count qty__count_minus"
                        onClick={decreaseHandler}
                    >
                        <figure>-</figure>
                    </button>
                    <input
                        value={itemQty}
                        onChange={modifyCartHandler}
                        className="product-qty"
                        type="text"
                        name="product-qty"
                        min="1"
            
                    />
                    <button
                        className="qty_count qty__count_add"
                        onClick={increaseHandler}
                    >
                        <figure>+</figure>
                    </button>
                </div>
            </td>
            <td>
                <p>${totalPrice}</p>
            </td>
            <td>
               <div>
                <button className="qty_count product__remove" onClick={removeFormcartHandler}>  <figure>X</figure></button>
               </div>
            </td>
        </tr>

    );
};

export default CartItem;