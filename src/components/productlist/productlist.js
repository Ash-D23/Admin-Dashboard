import "./productList.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import Topbar from '../topbar/topbar';
import Button from '@material-ui/core/Button';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products)

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  return (
    <>
    <Topbar />
    <div className="productList">
      {products?.map( item => (
          <div className="product-row">
            <img className="productListImg" src={item.img} />
            <div className="product-desc">
                <p> Product Name: {item.title}</p>
                <p>{item.desc}</p>
            </div>
            <p>Price:{item.price}</p>
            
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(item._id)}
            />
          </div>
      ))}
    </div>
    </>
  );
}
