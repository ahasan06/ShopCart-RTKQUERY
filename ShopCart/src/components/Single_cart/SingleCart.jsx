
import './singlecart.css';

const SingleCart = () => {
    return (
        <>
        <div className="cart__section">
            <div className="cart__image">
                <img src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" alt="Product" />
            </div>
            <div className="cart__body">
                <div className="cart__content">
                    <p className="cart__item_name">Product 1</p>
                    <p className="product__item_price">$500</p>
                </div>
                <div className="cart__btn">
                    <div className="frombtn">
                        <button>Add To Cart</button>
                    </div>
                    <div className="frombtn">
                        <button>Remove From Cart</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SingleCart;
