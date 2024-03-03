import React, {useState, useEffect} from 'react';
import ProductDetail from "../data/productDetail";
import CreateProduct from '../data/create';
import axios from 'axios'

function Product(){
  const [productList, setProductList] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);

    const [productDetail, setProductDetail] = useState({})
    const [openForm, setOpenForm] = useState(false)

    function showProductDetail(product) {
      setOpenDetail(true);
      setProductDetail(product);
    }

    useEffect(() => {
      axios.get('http://localhost:8080/api/product')
      .then(res => setProductList(res.data))
      .catch((err) => alert(err))
    }, []);

  function createNewProduct(){
    setOpenForm(true)
  }

  return (
      <div>
        {console.log(productList)}
        <div>
          <button type='button' onClick={() => createNewProduct()}> Create New Product </button>
        </div>

        <div className='d-flex'>
          {productList !== null ? productList.map(pro => 
            <div key={pro.id}>
            <div>
          <img onClick={() => showProductDetail(pro)} style={{width:"100px"}} src={pro.image} alt="Iphone 13"></img>
          <p>{pro.name}</p>  
          <div>
            {openDetail === true && productDetail !== null && productDetail.id === pro.id ? <ProductDetail product={productDetail} setProductList = {setProductList} productList={productList} setOpenDetail={setOpenDetail}/>: ""}
          </div>
            </div>
          </div>
          ):' '}
        </div>
        <div>
            {openForm === true ? <CreateProduct setProductList = {setProductList} productList={productList} setOpenForm = {setOpenForm}></CreateProduct> : ""}
        </div>
        
      </div>
  )
}

export default Product;