import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import axios from 'axios';


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res)
    localStorage.setItem("token", res?.data?.accessToken);

    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    let TOKEN = localStorage.getItem('token')
    const res = await axios
        .delete(`https://ecommerce-api-bookstore.herokuapp.com/api/products/${id}`, {
            headers: { 'Content-type': 'application/json; charset=UTF-8',
            token: `Bearer ${TOKEN}` }
        });
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {

    let TOKEN = localStorage.getItem('token')

    const res = await axios
        .post('https://ecommerce-api-bookstore.herokuapp.com/api/products/', product, {
            headers: { 'Content-type': 'application/json; charset=UTF-8',
            token: `Bearer ${TOKEN}` }
        });
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    console.log(err)
    dispatch(addProductFailure());
  }
};