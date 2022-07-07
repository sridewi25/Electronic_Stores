import React, { useEffect } from "react";
import "./style.css";
import {
  getorder_user,
  deleteorderuser,
  detailorder,
} from "../../actions/OrderAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListOl,
  faMapLocationDot,
  faMapPin,
  faFileInvoice,
  faBox,
  faPencil,
  faTrashCan,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function OrderUser() {
  const {
    getorderuserResult,
    getorderuserLoading,
    getorderuserError,
    deleteorderuserResult,
  } = useSelector((state) => state.orderReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (deleteorderuserResult) {
      Swal.fire("Delete Successfully!", "Clicked the button!", "success");
      dispatch(getorder_user(localStorage.getItem("access_token")));
    }
  });

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getorder_user(localStorage.getItem("access_token"),));
  }, [dispatch]);

  return (
    <div className="bg-color-order">
      <div className="container-sm">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-bg justify-content-center">
            <br></br>
            {getorderuserResult ? (
              getorderuserResult.map((e) => {
                return (
                  <div class="card">
                    <div class="card-header text-center">Order</div>
                    <div class="card-body">
                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon>
                          </span>{" "}
                          Jumlah Barang
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_total_qty}{" "}
                        </h5>
                      </div>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon
                              icon={faMapLocationDot}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Alamat Pengiriman
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_addres}
                        </h5>
                      </div>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
                          </span>{" "}
                          Kota Pengiriman
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_city}
                        </h5>
                      </div>
                      <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                        <Link
                          className="btn btn-sm btn btn-outline-primary"
                          onClick={() => dispatch(detailorder(e))}
                          to={`edit/${e.id}`}
                        >
                          <span>
                            <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                          </span>{" "}
                          Edit
                        </Link>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() =>
                            dispatch(
                              deleteorderuser(
                                localStorage.getItem("access_token"),
                                +e.id
                              )
                            )
                          }
                        >
                          <span>
                            <FontAwesomeIcon
                              icon={faTrashCan}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Delete
                        </button>
                      </div>

                      <hr></hr>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon
                              icon={faFileInvoice}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Harga Total
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                         <span>Rp </span>{e.order_total_due}
                        </h5>
                      </div>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
                          </span>{" "}
                          Status Order
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_status}
                        </h5>
                      </div>
                      <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                        <button
                          className="btn btn-sm btn-outline-success"
                          onClick={() => Swal.fire("Checkout Successfully!", `Your Transaction Number Is ${e.order_payt_trx_number}`, "success")}
                        >
                          <span>
                            <FontAwesomeIcon
                              icon={faMoneyBill}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Check Out
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : getorderuserLoading ? (
              <p>Loading</p>
            ) : (
              <p>{getorderuserError ? getorderuserError : "Data Kosong"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderUser;
