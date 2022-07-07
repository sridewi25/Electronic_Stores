import React, { useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  getorders,
  detailorder,
} from "../../actions/OrderActions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
function AllOrder() {
  const {
    getOrderResult,
    getOrderLoading,
    getOrderError,
    
  } = useSelector((state) => state.orderReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getorders(localStorage.getItem("access_token")));
  }, [dispatch]);

  return (
    <div className="bg-color-product-admin">
      <div className="container">
        <div className="row">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Order Subtotal</th>
                <th scope="col">Discount</th>
                <th scope="col">Tax</th>
                <th scope="col">Total (Rp)</th>
                <th scope="col">Total qty</th>
                <th scope="col">TRX Number</th>
                <th scope="col">Order City</th>
                <th scope="col">Address</th>
                <th scope="col">Status</th>
                <th scope="col">User Id</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {getOrderResult ? (
                getOrderResult.map((e) => {
                  return (
              <tr>
                <th scope="row">{e.id}</th>
                <td>{e.order_subtotal}</td>
                <td>{e.order_discount}</td>
                <td>{e.order_tax}</td>
                <td>{e.order_total_due}</td>
                <td>{e.order_total_qty}</td>
                <td>{e.order_payt_trx_number}</td>
                <td>{e.order_city}</td>
                <td>{e.order_addres}</td>
                <td>{e.order_status}</td>
                <td>{e.userId}</td>
                <td>
                        <Link
                          to={`edit/${e.id}`}
                          class="btn btn-sm btn-success edit-btn"
                          onClick={() => dispatch(detailorder(e))}
                        >
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                          ></FontAwesomeIcon>
                        </Link>
                </td>
              </tr>
               );
              })
            ) : getOrderLoading ? (
              <p>Loading</p>
            ) : (
              <p>{getOrderError ? getOrderError : "Data Kosong"}</p>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllOrder;
