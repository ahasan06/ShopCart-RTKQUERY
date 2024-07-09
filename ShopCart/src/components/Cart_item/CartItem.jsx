import "./cartItem.css"
const CartItem = () => {
    return (

        <tr>
            <td className="product">
                <img src="https://images.unsplash.com/photo-1527698266440-12104e498b76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </td>
            <td>
                <p>Product 1</p>
            </td>
            <td>
                <p>$500</p>
            </td>
            <td>
            <div className="qty_input">
                    <button
                        className="qty_count qty__count_minus"
                    >
                        <figure>-</figure>
                    </button>
                    <input
                    
                        className="product-qty"
                        type="text"
                        name="product-qty"
                        min="1"
            
                    />
                    <button
                        className="qty_count qty__count_add"
                    >
                        <figure>+</figure>
                    </button>
                </div>
            </td>
            <td>
                <p>$500</p>
            </td>
            <td>
               <div>
                <button className="qty_count product__remove">  <figure>X</figure></button>
               </div>
            </td>
        </tr>

    );
};

export default CartItem;