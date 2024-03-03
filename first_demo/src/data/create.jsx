import {useState} from 'react';
import axios from 'axios';

function CreateProduct({setProductList, productList, setOpenForm}){
    // const [newProduct, setNewProduct] = useState('');

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('')
    const postData = () => {
        let newPro = {
            name: name,
            quantity: quantity,
            price: price,
            image: image
        }

        console.log(newPro);
        productList.push(newPro)
        setProductList(productList)

        axios.post('http://localhost:8080/api/product', newPro)
        .then(res => console.log(res.data))
        .catch((err) => alert(err))
    }

    return(
        <div>
            <form>
                    <label>Name</label>
                    <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                    <label>Quantity</label>
                    <input type='text' placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)}/>
                    <label>Price</label>
                    <input type='text' placeholder='Price' onChange={(e) => setPrice(e.target.value)}/>
                    <label>Image</label>
                    <input type='text' placeholder='Image' onChange={(e) => setImage(e.target.value)}/>
                <button type='button' onClick={() => postData()} >Submit</button>
                <button type='button' onClick={() => setOpenForm(false)}>close</button>
            </form>
        </div>
    )
}

export default CreateProduct