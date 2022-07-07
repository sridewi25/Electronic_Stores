import axios from "axios";

const POST_ORDER_LINE_SHOP = "POST_ORDER_LINE_SHOP";
const GET_ORDER_USER = "GET_ORDER_USER";
const POST_UPDATE_USER = "POST_UPDATE_USER";
const DELETE_ORDER = "DELETE_ORDER";
const DETAIL_ORDER ="DETAIL_ORDER";

const addorder = (access_token, id) => {
  console.log("2.");
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "POST_ORDER_LINE_SHOP",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "POST",
      url: `http://localhost:3000/orders/create_order/${id}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "POST_ORDER_LINE_SHOP",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "POST_ORDER_LINE_SHOP",
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

const getorder_user = (access_token) => {
  return (dispatch) => {
    // untuk loading
    
    dispatch({
      type: "GET_ORDER_USER",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:3000/orders/order_user",
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "GET_ORDER_USER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_ORDER_USER",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};

const updateorderuser = (access_token, data, id) => {
  console.log("2.");
  console.log(data);
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "POST_UPDATE_USER",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "PUT",
      url: `http://localhost:3000/orders/update_order/${id}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
      data: data,
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "POST_UPDATE_USER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "POST_UPDATE_USER",
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

const deleteorderuser = (access_token, id) => {
  console.log("2.");
  console.log(id)
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "DELETE_POSTING",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "DELETE",
      url: `http://localhost:3000/orders/delete_order/${id}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
      
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "DELETE_ORDER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "DELETE_ORDER",
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

const detailorder = (data) => {
  return (dispatch) => {
    dispatch({
      type: "DETAIL_ORDER",
      payload: {
        data: data,
      },
    });
  };
};

export {
  POST_ORDER_LINE_SHOP,
  addorder,
  GET_ORDER_USER,
  getorder_user,
  POST_UPDATE_USER,
  updateorderuser,
  detailorder,
  deleteorderuser,
  DELETE_ORDER,
  DETAIL_ORDER
};
