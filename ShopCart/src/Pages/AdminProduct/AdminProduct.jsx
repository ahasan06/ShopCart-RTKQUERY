import AdminProductCart from "../../components/Admin_ProductCart/AdminProductCart";
import "./AdminProduct.css"
const AdminProduct = () => {
    return (
        <div className="admin_product">
            <div className="admin__product_container">
                <div className="product_content">
                    <h1>Welcome to Admin Pannel</h1>
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
                                    <th>Remove Product</th>
                                </tr>
                            </thead>
                            <tbody className="cart__details">
                            <AdminProductCart/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProduct;