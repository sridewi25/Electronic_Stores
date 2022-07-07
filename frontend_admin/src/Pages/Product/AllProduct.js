import React, { useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  getproducts,
  deleteproduct,
  detailproduct,
} from "../../actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export default function AllProduct() {
  const {
    getProductResult,
    getProductLoading,
    getProductError,
    deleteProductResult,
  } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getproducts());
  }, [dispatch]);

  
  useEffect(() => {
    if (deleteProductResult) {
      Swal.fire("Delete Successfully!", "Clicked the button!", "success");
      dispatch(getproducts(localStorage.getItem("access_token")));
    }
  });

  return (
    <div className="bg-color-product-admin">
      <div className="container">
        <div className="row">
          <div className=" justify-content-center input-group flex-nowrap submit-btn-product input-align">
            <Link to="/add">
              <button className="btn text-add">Add Product</button>
            </Link>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">ID Product</th>
                <th scope="col">Name Product</th>
                <th scope="col">Description</th>
                <th scope="col">Stock</th>
                <th scope="col">Price (Rp)</th>
                <th scope="col">Weight</th>
                <th scope="col">Category</th>
                <th scope="col">Brand</th>
                <th scope="col">Condition</th>
                <th scope="col">Total Sold</th>
                <th scope="col">Rating</th>
                <th scope="col">Views</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {getProductResult ? (
                getProductResult.map((e) => {
                  return (
                    <tr>
                      <th scope="row">{e.id}</th>
                      <td>{e.prod_name}</td>
                      <td>{e.prod_desc}</td>
                      <td>{e.prod_stock}</td>
                      <td>{e.prod_price}</td>
                      <td>{e.prod_weight}</td>
                      <td>{e.prod_category}</td>
                      <td>{e.prod_brand}</td>
                      <td>{e.prod_condition}</td>
                      <td>{e.prod_total_sold}</td>
                      <td>{e.prod_rating}</td>
                      <td>{e.prod_views}</td>
                      <td>
                        <Link
                          to={`edit/${e.id}`}
                          class="btn btn-sm btn-success edit-btn"
                          onClick={() => dispatch(detailproduct(e))}
                        >
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                          ></FontAwesomeIcon>
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() =>
                            dispatch(
                              deleteproduct(
                                localStorage.getItem("access_token"),
                                e.id
                              )
                            )
                          }
                        >
                          {" "}
                          <span>
                            <FontAwesomeIcon
                              icon={faTrashCan}
                            ></FontAwesomeIcon>
                          </span>{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : getProductLoading ? (
                <p>Loading</p>
              ) : (
                <p>{getProductError ? getProductError : "Data Kosong"}</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
