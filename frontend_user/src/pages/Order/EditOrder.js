import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListOl,
  faMapLocationDot,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { updateorderuser } from "../../actions/OrderAction";

function EditOrder() {
  const navigate = useNavigate();
  const [order_city, setCity] = useState("");
  const [order_addres, setAddress] = useState("");
  const [order_total_qty, setTotalqty] = useState("");
  const [id, setID] = useState("");
  const [order_total_due, setTotaldue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      updateorderuser(
        localStorage.getItem("access_token"),
        {
          order_city: order_city,
          order_addres: order_addres,
          order_total_qty: order_total_qty,
        },
        +id
      )
    );
  };
  const { updateorderuserResult, getdetailorderuserResult } = useSelector(
    (state) => state.orderReducer
  );

  useEffect(() => {
    if (updateorderuserResult) {
      Swal.fire("Update Successfully!", "Clicked the button!", "success");
      navigate("/order");
    }
  });

  useEffect(
    () => {
      if (getdetailorderuserResult) {
        setCity(getdetailorderuserResult.order_city);
        setAddress(getdetailorderuserResult.order_addres);
        setTotalqty(getdetailorderuserResult.order_total_qty);
        setTotaldue(getdetailorderuserResult.order_total_due);
        setID(getdetailorderuserResult.id);
      }
    },
    [getdetailorderuserResult],
    [dispatch]
  );

  return (
    <div className="bg-color-order">
      <div className="container-sm">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-bg justify-content-center">
            <br></br>

            <br></br>
            <br></br>
            <div class="card text-center">
              <div class="card-header">Update Order</div>
              <div class="card-body">
                <form onSubmit={(event) => handleSubmit(event)}>
                  <div className="input-group flex-nowrap input-align">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="order_total_qty"
                      value={order_total_qty}
                      onChange={(event) => setTotalqty(event.target.value)}
                    />
                  </div>

                  <div className="input-group flex-nowrap input-align">
                    <span className="input-group-text">
                      <FontAwesomeIcon
                        icon={faMapLocationDot}
                      ></FontAwesomeIcon>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Caption"
                      name="order_addres"
                      value={order_addres}
                      onChange={(event) => setAddress(event.target.value)}
                      //
                    />
                  </div>

                  <div className="input-group flex-nowrap input-align">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Caption"
                      name="order_city"
                      value={order_city}
                      onChange={(event) => setCity(event.target.value)}
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
