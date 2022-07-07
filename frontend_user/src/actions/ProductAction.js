import axios from "axios";

const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";
const GET_PRODUCT_ALL = "GET_PRODUCT_ALL";

const get_product_detail = (data) => {
  return (dispatch) => {
    // untuk loading
    console.log(data);
    dispatch({
      type: "GET_DETAIL_PRODUCT",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: `http://localhost:3000/products/info_product/${data}`,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: "GET_DETAIL_PRODUCT",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_DETAIL_PRODUCT",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};
const getproduct = () => {
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "GET_PRODUCT_ALL",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:3000/products",
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: "GET_PRODUCT_ALL",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_PRODUCT_ALL",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};
export { GET_DETAIL_PRODUCT, get_product_detail, GET_PRODUCT_ALL,getproduct };
