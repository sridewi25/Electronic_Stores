import {
    GET_DETAIL_PRODUCT,
    GET_PRODUCT_ALL,
  } from "../../actions/ProductAction";
  
  const initialState = {
    getDetailProductResult: false,
    getDetailProductLoading: false,
    getDetailProductError: false,
  
    getProductResult: false,
    getProductLoading: false,
    getProductError: false,
  };
  
  const products = (state = initialState, action) => {
    switch (action.type) {
      case GET_DETAIL_PRODUCT:
        return {
          ...state,
          getDetailProductResult: action.payload.data,
          getDetailProductLoading: action.payload.loading,
          getDetailProductError: action.payload.errorMessage,
        };
      case GET_PRODUCT_ALL:
        return {
          ...state,
          getProductResult: action.payload.data,
          getProductLoading: action.payload.loading,
          getProductError: action.payload.errorMessage,
        };
      default:
        return state;
    }
  };
  
  export default products;
  