/* eslint-disable react/prop-types */
import "./AdminProductCart.css"
import { useDispatch, useSelector } from "react-redux";
import { useRemoveProductMutation } from "../../store/features/apiSlice";
import { setEditProduct } from "../../store/reducers/CartReducer";
const AdminProductCart = ({ prod }) => {

    const [deleteProd] = useRemoveProductMutation()
    const dispatch = useDispatch()
    const editingProduct = useSelector(storeState => storeState.cart.editProduct)

    const removeProductFromShop = () => {
        const isDelete = window.confirm("Are you sure you want to delete this product?");
        if (isDelete) {
            deleteProd(prod.id);
        }
    }
    const editProductHandler = () => {
        dispatch(setEditProduct(prod))
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
                {
                    prod.available === 'true' ? (
                        <p>Availabe</p>

                    ) : (
                        <p>Not Availabe</p>
                    )

                }
            </td>

            <td>
                <p>{prod.issueDate}</p>
            </td>
            <td>{
                editingProduct && editingProduct.id === prod.id ? (
                    <div>
                        <button className="qty_count product__edit" >  <figure>Edit Mode On</figure></button>
                    </div>
                ) :
                    (
                        <div>
                            <button className="qty_count product__edit" onClick={editProductHandler} >  <figure>Edit</figure></button>
                        </div>
                    )

            }

            </td>

            <td>
                {
                    editingProduct && editingProduct.id === prod.id ? (
                        <div className="editMode">
                            <div className="loader"></div>
                        </div>
                    ) : (
                        <div>
                            <button className="qty_count product__remove" onClick={removeProductFromShop}>  <figure>X</figure></button>
                        </div>
                    )
                }

            </td>


        </tr>
    );
};

export default AdminProductCart;