import {useState} from 'react';
import axios from 'axios';

function ProductDetail({product, setProductList, productList, setOpenDetail}){
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    function getIndex(){
        let index;
        for(let i = 0 ; i< productList.length ; i++){
            if(productList[i].id === product.id){
                index = i;
            }
        }
        return index;
    }
    function deleteProduct(){
        let index = getIndex();

        productList.splice(index,1);
        setProductList(productList);
        setOpenDetail(false);

        axios.delete('http://localhost:8080/api/product', productList[index])
        .then(res => console.log(res.data))
        .catch((err) => alert(err))
    }

    function updateProduct(){
let updatePro = productList[getIndex()];
console.log(updatePro);
        // let index = getIndex();
        updatePro.quantity=quantity;
            updatePro.price=price;
            updatePro.image=image;
            // console.log(productList[index]);
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
                        <label>Image</label>
                        <input type='text' placeholder='Image' onChange={(e) => setImage(e.target.value)}/>
                        <button type='button' onClick={() => updateProduct()} >Update</button>
            </form>
        </div>
    )
}

export default ProductDetail
