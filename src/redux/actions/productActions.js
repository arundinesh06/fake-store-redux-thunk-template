import { productActionTypes } from "../actionTypes/productActionTypes";
import productAPI from "../../apis/productApi";

// This is the expanded version of the below written thunk
// export const fetchProducts = () => {
//   return async (dispatch, getState) => {
//     const response = await productAPI.get("/products");
//     dispatch({
//       type: productActionTypes.FETCH_PRODUCTS,
//       payload: response.data,
//     });
//   };
// };

export const fetchProducts = () => async (dispatch, getState) => {
  const response = await productAPI.get("/products");
  dispatch({
    type: productActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response = await productAPI.get(`/products/${id}`);
    dispatch({
      type: productActionTypes.FETCH_PRODUCT,
      payload: response.data,
    });
  };
};

export const removeSelectedProduct = () => {
  return {
    type: productActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
