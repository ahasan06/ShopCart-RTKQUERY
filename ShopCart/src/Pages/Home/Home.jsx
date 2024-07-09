import ProductForm from "../../components/Product_Form/ProductForm";
import SingleCart from "../../components/Single_cart/SingleCart";
import './home.css'
const Home = () => {
    return (
        <div>
            <div className="home__section">
                <div className="home__container">
                    <div className="home__content">
                        <div className="home__title">
                            <h1>Welcome to Nahids Tech shop</h1>
                        </div>
                        <div className="home__desc">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa possimus sint pariatur libero eum ipsum rem enim magni, iste harum?</p>
                        </div>
                    </div>

                    <div className="home__productForm">
                        <ProductForm />
                    </div>
                </div>
            </div>

            <div className="shop__section">
                <div className="shop__content">
                    <div className="shop__title">
                        <h1>Welcome to Mega Shop</h1>
                    </div>
                    <div className="shop__subtitle">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cumque doloremque suscipit error, eaque nisi provident iste maxime magni iusto quasi totam autem molestias necessitatibus. Iusto esse odit molestias consequuntur.</p>
                    </div>
                </div>

                <div className="shop__body">
                     <SingleCart/>
                </div>
            </div>
        </div>
    );
};

export default Home;