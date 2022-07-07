import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateorder } from "../../actions/OrderActions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faRupiahSign,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function EditOrder() {
  const navigate = useNavigate();
  const [order_status, setStatus] = useState("");
  const [order_tax, setTax] = useState("");
  const [id, setID] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      updateorder(
        localStorage.getItem("access_token"),
        {
          order_status: order_status,
          order_tax: order_tax,
        },
        +id
      )
    );
  };
  const { updateOrderResult, detailOrderResult } = useSelector(
    (state) => state.orderReducer
  );

  useEffect(() => {
    if (updateOrderResult) {
      Swal.fire("Update Successfully!", "Clicked the button!", "success");
      navigate("/order");
    }
  });

  useEffect(
    () => {
      if (detailOrderResult) {
        setStatus(detailOrderResult.order_status);
        setID(detailOrderResult.id);
        setTax(detailOrderResult.order_tax);
      }
    },
    [detailOrderResult],
    [dispatch]
  );
  return (
    <div className="bg-color-product-admin">
      <div className="container-sm">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-bg justify-content-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="card text-center">
              <div class="card-header">Update Order</div>
              <div class="card-body">
                <form onSubmit={(event) => handleSubmit(event)}>
                  <div className="input-group flex-nowrap input-align input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon
                        icon={faBasketShopping}
                      ></FontAwesomeIcon>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Caption"
                      name="order_status"
                      value={order_status}
                      onChange={(event) => setStatus(event.target.value)}
                      //
                    />
                  </div>

                  <div className="input-group flex-nowrap input-align input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faRupiahSign}></FontAwesomeIcon>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Caption"
                      name="posting"
                      value={order_tax}
                      onChange={(event) => setTax(event.target.value)}
                      //
                    />
                  </div>

                  <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
                    <button className="btn text-add" type="submit">
                      Update
                    </button>
                  </div>
                  <br></br>
                </form>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default EditOrder;
