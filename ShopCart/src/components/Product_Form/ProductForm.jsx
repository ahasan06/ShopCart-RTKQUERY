import { useEffect, useState } from 'react';
import './productForm.css'
import { useCreateProductMutation, useUpdateProductMutation } from '../../store/features/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { clearEditProduct } from '../../store/reducers/CartReducer';
const ProductForm = () => {
    const [updateProduct] = useUpdateProductMutation()
    const dispacth = useDispatch()
    const selectedProduct = useSelector(state => state.cart.editProduct)



    const [addProduct] = useCreateProductMutation()
    const initialFormData = {
        name: "",
        price: "",
        image: "",
        description: "",
        longDescription: "",
        available: "true",
        issueDate: new Date().toISOString().slice(0, 10)
    }
    const [formData, setFormData] = useState(initialFormData)
    console.log("select Product",formData);

    useEffect(() => {
        if (selectedProduct) {
     
            setFormData(selectedProduct);
        }
        else {
            setFormData(initialFormData)
        }

    }, [selectedProduct])


    const inputOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const validFormData = () => {
        const isValid = Object.keys(formData).every(key => {
            const value = typeof formData[key] === 'string'? formData[key].trim() : formData[key];
            return value !== '';
        });
        if (!isValid) {
            alert("please Fill all the feild");
            return false
        }
        return true
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (validFormData()) {

            if (selectedProduct) {
                updateProduct(formData)
            }
            else {
                addProduct(formData);
            }
            dispacth(clearEditProduct())
            setFormData(initialFormData);

        }
    }


    return (
        <div className='Product_Form'>
            <form onSubmit={formSubmit} >
                <div className='form_container'>

                    <div className='form_input'>
                        <label>Product Name</label>
                        <input type="text" name='name' value={formData.name} onChange={inputOnChange} />
                    </div>

                    <div className='form_input'>
                        <label>Product Price</label>
                        <input type="number" name='price' value={formData.price} onChange={inputOnChange} />
                    </div>
                    <div className='form_input'>
                        <label>Product Image Url</label>
                        <input type="text" name='image' value={formData.image} onChange={inputOnChange} />
                    </div>
                    <div className='form_input'>
                        <label>Product Description</label>
                        <textarea name='description' value={formData.description} onChange={inputOnChange}></textarea>
                    </div>

                    <div className='form_input'>
                        <label>Product Long Description</label>
                        <textarea name='longDescription' value={formData.longDescription} onChange={inputOnChange}></textarea>
                    </div>

                    <div className='form_input'>
                        <label>
                            Product Available:
                        </label>
                        <select name="available" value={formData.available} onChange={inputOnChange}>
                            <option value="true">Avilable</option>
                            <option value="false">Not Available</option>
                        </select>
                    </div>

                    <div className='form_btn'>
                        {
                            selectedProduct?(

                                <button type="submit" className='customBtn'>Update</button>
                            ):(
                                <button type="submit" className='customBtn'>Submit</button>
                            )
                        }
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;