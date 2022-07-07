import axios from "axios";

const GET_ORDER= "GET_ORDER";
const UPDATE_ORDER = "UPDATE_ORDER";
const DETAIL_ORDER = "DETAIL_ORDER";

const getorders = (access_token) => {
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "GET_ORDER",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:3000/orders",
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "GET_ORDER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_ORDER",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};

const updateorder = (access_token,data,id) => {
  console.log("2.");
  console.log(data)
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "UPDATE_ORDER",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "PUT",
      url: `http://localhost:3000/orders/update_order_admin/${id}`,
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
      data: data,
    })
      .then((response) => {
        console.log("3.", response.data);
        dispatch({
          type: "UPDATE_ORDER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_ORDER",
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
      type: DETAIL_ORDER,
      payload: {
        data: data,
      },
    });
  };
};


export {
  getorders,
  GET_ORDER,
  UPDATE_ORDER,
  updateorder,
  DETAIL_ORDER,
  detailorder,
};
