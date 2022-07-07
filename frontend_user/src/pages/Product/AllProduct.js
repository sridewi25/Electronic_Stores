import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEye,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getproduct, get_product_detail } from "../../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addorder } from "../../actions/OrderAction";
import { useNavigate } from "react-router-dom";

function AllProduct() {
  const { getProductResult, getProductLoading, getProductError } = useSelector(
    (state) => state.productReducer
  );
  const { postorderResult } = useSelector((state) => state.orderReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (postorderResult) {
      Swal.fire("Order Successfully!", "Clicked the button!", "success");
      navigate("/order");
    }
  });

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(getproduct());
  }, [dispatch]);
  return (
    <>
      <div className="container-fluid mb-5 color-shop">
        <div className="d-flex flex-column align-items-center justify-content-center weight-shop">
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Our Shop
          </h1>
          <div className="d-inline-flex">
            <p>Home</p>
            <p>-</p>
            <p>Product</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row pb-3">
          <div className="col-lg-4">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </span>
              <input
                type="text"
                className="form-control form-control"
                placeholder="Search by Product Name"
                // onChange={(event) => {
                //   setSearchlocation(event.target.value);
                // }}
              />
            </div>
          </div>
        </div>
        <div className="row pb-3">
          {getProductResult ? (
            getProductResult.map((e) => {
              return (
                <>
                  <div class="col-lg-4 col-md-6 col-sm-12 pb-1 card-style">
                    <div class="card border-0 mb-4 ">
                      <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img
                          class="img-fluid w-100"
                          src={require(`../../file_image/${e.prod_image}`)}
                          alt=""
                        />
                      </div>
                      <div class="card-body border-left border-right text-center p-0 pt-4 pb-3 text-product bg-color-product">
                        <h6 class="text-truncate mb-3">{e.prod_name}</h6>
                        <div class="d-flex justify-content-center">
                          <h6>
                            <span>Rp </span> {e.prod_price}
                          </h6>
                        </div>
                      </div>
                      <div class="card-footer d-flex justify-content-between">
                        <Link
                          class="btn btn-sm p-0"
                          onClick={() => dispatch(get_product_detail(e.id))}
                          to={`detail/${e.id}`}
                        >
                          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> View
                          Detail
                        </Link>
                        <button onClick={() => dispatch(addorder(localStorage.getItem("access_token"),e.id))} class="btn btn-sm p-0">
                          <FontAwesomeIcon
                            icon={faBasketShopping}
                          ></FontAwesomeIcon>{" "}
                          Add To Order
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : getProductLoading ? (
            <p>Loading</p>
          ) : (
            <p>{getProductError ? getProductError : "Data Kosong"}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AllProduct;
