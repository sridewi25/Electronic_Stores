import {
    GET_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DETAIL_PRODUCT,
    DELETE_PRODUCT,
  } from "../../actions/ProductActions";
  
  const initialState = {
    getProductResult: false,
    getProductLoading: false,
    getProductError: false,
  
    addProductResult: false,
    addProductLoading: false,
    addProductError: false,
  
    updateProductResult: false,
    updateProductLoading: false,
    updateProductError: false,
  
    detailProductResult: false,
  
    deleteProductResult: false,
    deleteProductLoading: false,
    deleteProductError: false,
  };
  
  const AllProducts = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT:
        return {
          ...state,
          getProductResult: action.payload.data,
          getProductLoading: action.payload.loading,
          getProductError: action.payload.errorMessage,
        };
      case ADD_PRODUCT:
        return {
          ...state,
          addProductResult: action.payload.data,
          addProductLoading: action.payload.loading,
          addProductError: action.payload.errorMessage,
        };
      case UPDATE_PRODUCT:
        return {
          ...state,
          updateProductResult: action.payload.data,
          updateProductLoading: action.payload.loading,
          updateProductError: action.payload.errorMessage,
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          deleteProductResult: action.payload.data,
          deleteProductLoading: action.payload.loading,
          deleteProductError: action.payload.errorMessage,
        };
      case DETAIL_PRODUCT:
        return {
          ...state,
          detailProductResult: action.payload.data,
        };
      default:
        return state;
    }
  };
  
  export default AllProducts;
  