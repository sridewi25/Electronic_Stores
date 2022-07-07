import {
  GET_ORDER,
  UPDATE_ORDER,
  DETAIL_ORDER,
} from "../../actions/OrderActions";

const initialState = {
  getOrderResult: false,
  getOrderLoading: false,
  getOrderError: false,

  updateOrderResult: false,
  updateOrderLoading: false,
  updateOrderError: false,

  detailOrderResult: false,
};

const orderuser = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        getOrderResult: action.payload.data,
        getOrderLoading: action.payload.loading,
        getOrderError: action.payload.errorMessage,
      };

    case UPDATE_ORDER:
      return {
        ...state,
        updateOrderResult: action.payload.data,
        updateOrderLoading: action.payload.loading,
        updateOrderError: action.payload.errorMessage,
      };

    case DETAIL_ORDER:
      return {
        ...state,
        detailOrderResult: action.payload.data,
      };
    default:
      return state;
  }
};

export default orderuser;
