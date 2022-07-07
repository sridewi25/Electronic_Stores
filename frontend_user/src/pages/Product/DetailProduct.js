import React, { useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faShirt,
  faCalendarDays,
  faMagnifyingGlass,
  faShapes,
  faWarehouse,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { get_product_detail } from "../.././actions/ProductAction";
import { useParams } from "react-router-dom";

function DetailProduct() {
  const {
    getDetailProductResult,
    getDetailProductLoading,
    getDetailProductError,
  } = useSelector((state) => state.productReducer);

  const { id } = useParams();

  console.log(+id);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1.Masuk UseEffect");
    dispatch(get_product_detail(+id));
  }, [dispatch]);

  return (
    <div className="bg-color-product-all">
      {getDetailProductResult ? (
        getDetailProductResult.map((e) => {
          return (
            <>
              <div class="container-fluid">
                <div class="row px-xl-5">
                  <div class="col-lg-5 pb-5">
                    <div
                      id="product-carousel"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <br></br>
                      <div class="carousel-inner border">
                        <div class="carousel-item active">
                          <img
                            class="w-100 h-100"
                            src={require(`../../file_image/${e.prod_image}`)}
                            alt="Image"
                          />
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        href="#product-carousel"
                        data-slide="prev"
                      >
                        <i class="fa fa-2x fa-angle-left text-dark"></i>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#product-carousel"
                        data-slide="next"
                      >
                        <i class="fa fa-2x fa-angle-right text-dark"></i>
                      </a>
                    </div>
                  </div>

                  <div class="col-lg-7 pb-5">
                    <br></br>
                    <h3 class="font-weight-semi-bold">{e.prod_name}</h3>
                    <div class="d-flex mb-3">
                      <p className="card-text">
                        <small className="text-muted">
                          {" "}
                          <Rating initialValue="3" />
                        </small>
                      </p>
                    </div>
                    <h3 class="font-weight-semi-bold mb-4">
                      <span>Rp </span>
                      {e.prod_price}
                    </h3>
                    <p className="card-text">
                      <small className="text-muted">
                        <span>
                          <FontAwesomeIcon icon={faWarehouse}></FontAwesomeIcon>{" "}
                          Jumlah Stock :{" "}
                        </span>
                        {e.prod_stock}{" "}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <span>
                          <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                          ></FontAwesomeIcon>{" "}
                          Condition:{" "}
                        </span>{" "}
                        {e.prod_condition}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <span>
                          <FontAwesomeIcon icon={faShirt}></FontAwesomeIcon>{" "}
                          Brand:{" "}
                        </span>{" "}
                        {e.prod_brand}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <span>
                          <FontAwesomeIcon icon={faShapes}></FontAwesomeIcon>{" "}
                          Category:{" "}
                        </span>{" "}
                        {e.prod_category}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <span>
                          <FontAwesomeIcon
                            icon={faWeightHanging}
                          ></FontAwesomeIcon>{" "}
                          Berat Barang:{" "}
                        </span>{" "}
                        {e.prod_weight}
                      </small>
                    </p>
                  </div>
                </div>
                <div class="row px-xl-5">
                  <div class="col">
                    <div class="nav nav-tabs justify-content-center border-secondary mb-4"></div>
                    <div class="tab-content">
                      <div class="tab-pane fade show active" id="tab-pane-1">
                        <h4 class="mb-3">Product Description</h4>
                        <p>{e.prod_desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : getDetailProductLoading ? (
        <p>Loading</p>
      ) : (
        <p>{getDetailProductError ? getDetailProductError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default DetailProduct;
