import {useState} from 'react';
import axios from 'axios';

function ProductDetail({product, setOpenDetail}){
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    function deleteProduct(){
        axios.delete(`http://localhost:8080/api/product?id=${product.id}`);
        setOpenDetail(false);

        
    }

    function updateProduct(){
            axios.put(`http://localhost:8080/api/product?id=${product.id}&quantity=${quantity}&price=${price}`);
            setOpenDetail(false);
        
    }

    return (
        <div>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.quantity}</p>
            <p>{product.price}</p>

            <button type="button" onClick={deleteProduct}>Delete</button>
            {/* <button type="button" onClick={() => setOpenDetail(false)}>close</button> */}
            <form>
                        <label>Quantity</label>
                        <input type='text' placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)}/>
                        <label>Price</label>
                        <input type='text' placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
                        <button type='button' onClick={() => updateProduct()} >Update</button>
            </form>
        </div>
    )
}

export default ProductDetail
