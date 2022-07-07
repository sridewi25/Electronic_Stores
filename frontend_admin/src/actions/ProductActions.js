import axios from "axios";

const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DETAIL_PRODUCT = "DETAIL_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";


const getproducts = () => {
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "GET_PRODUCT",
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
          type: "GET_PRODUCT",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_PRODUCT",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};

const updateproduct = (access_token,data,id) => {
  console.log("2.");
  console.log(data)
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "UPDATE_PRODUCT",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "PUT",
      url: `http://localhost:3000/products/update_product/${id}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
      data: data,
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "UPDATE_PRODUCT",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_PRODUCT",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
        console.log(error.message);
      });
  };
};

const addproduct = (access_token, data) => {
  console.log("2.");
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "POST",
      url: "http://localhost:3000/products/add",
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
      data: data,
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "ADD_PRODUCT",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "ADD_PRODUCT",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
        console.log(error.message);
      });
  };
};

const deleteproduct = (access_token, id) => {
  console.log("2.");
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "DELETE_PRODUCT",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "DELETE",
      url: `http://localhost:3000/products/delete_product/${id}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "DELETE_PRODUCT",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_PRODUCT",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
        console.log(error.message);
      });
  };
};

const detailproduct= (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_PRODUCT,
      payload: {
        data: data,
      },
    });
  };
};

const imageupload = (data) => {
  fetch("http://localhost:3000/single",{
    method:"POST",
    body:data,
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error.message)
  })
}

export {
  getproducts,
  GET_PRODUCT,
  ADD_PRODUCT,
  addproduct,
  UPDATE_PRODUCT,
  updateproduct,
  DETAIL_PRODUCT,
  detailproduct,
  DELETE_PRODUCT,
  deleteproduct,
  imageupload
};
