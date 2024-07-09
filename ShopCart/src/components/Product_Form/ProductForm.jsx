import './productForm.css'
const ProductForm = () => {
    return (
        <div className='Product_Form'>
            <form >
                <div className='form_container'>

                    <div className='form_input'>
                        <label>Product Name</label>
                        <input type="text" name='name' />
                    </div>

                    <div className='form_input'>
                        <label>Product Price</label>
                        <input type="text" name='price' />
                    </div>
                    <div className='form_input'>
                        <label>Product Image Url</label>
                        <input type="text" name='image' />
                    </div>
                    <div className='form_input'>
                        <label>Product Description</label>
                        <textarea  name='description'></textarea>
                    </div>

                    <div className='form_input'>
                        <label>Product Long Description</label>
                        <textarea  name='longDescription'></textarea>
                    </div>

                    <div className='form_input'>
                        <label>
                            Product Available:
                        </label>
                        <select name="available">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>

                    <div className='form_btn'>
                        <button type="submit" className='customBtn'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;