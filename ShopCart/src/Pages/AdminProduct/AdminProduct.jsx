import AdminProductCart from "../../components/Admin_ProductCart/AdminProductCart";
import ProductForm from "../../components/Product_Form/ProductForm";
import "./AdminProduct.css"


import { useGetAllProductsQuery } from "../../store/features/apiSlice";

const AdminProduct = () => {

    const {isFetching,isError,error,data:cart} = useGetAllProductsQuery()
    if (isFetching) {
        return <h1>Loading........</h1>
    }
    if (isError) {
        return <h1>Error: {error.message}</h1>
    }

    
    return (
        <>
            <div className="home__section">
                <div className="home__container">
                    <div className="home__content">
                        <div className="home__title">
                            <h1>Welcome to Admin Pannal</h1>
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
            <div className="admin_product">
                <div className="admin__product_container">
                    <div className="product_content">
                        <h1>Admin Pannel Products</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum aut error consequuntur temporibus voluptatem provident similique placeat quae nisi pariatur?</p>
                    </div>
                    <div className="cart__container">
                        <h4 className="cart__title">Product list in your Shop</h4>
                        <div className="cart__table-container">
                            <table className="cart__table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Title</th>
                                        <th>Price</th>
                                        <th>Product Available</th>
                                        <th>Issue Date</th>
                                        <th>Edit Product</th>
                                        <th>Remove Product</th>
                                    </tr>
                                </thead>
                                <tbody className="cart__details">
                                    {
                                        cart.map((item)=>(
                                            <AdminProductCart prod={item} key={item.id}/>
                                        ))

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AdminProduct;