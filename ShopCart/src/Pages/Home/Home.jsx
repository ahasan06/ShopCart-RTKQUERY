
import SingleCart from "../../components/Single_cart/SingleCart";
import './home.css'
import { useGetAllProductsQuery } from "../../store/features/apiSlice";
const Home = () => {

    const {isError,isFetching,error,data:products} = useGetAllProductsQuery()
    const currentDate = new Date();
    
    
    if (isFetching) {
        return <h1>Loading........</h1>
    }
    if (isError) {
        return <h1>Error: {error.message}</h1>
    }

    const isWithinTwoDays = (issueDate) => {
        const issueDateObj = new Date(issueDate);
        const diffTime = Math.abs(currentDate - issueDateObj);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <=1;
    };

    return (
        <div>
            <div className="home__section">
                <div className="current__product">
                <div className="product__title">
                        <h1>Recent Product Add to Mega Shop</h1>
                </div>
                    <div className="shop__body">
                    {
                        products?.filter(item => isWithinTwoDays(item.issueDate)).map(item => (
                            <SingleCart prod={item} key={item.id}/>
                        ))
                    }
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
                    {
                        products?.map(item=>(
                            <SingleCart prod={item} key={item.id}/>
                        ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Home;