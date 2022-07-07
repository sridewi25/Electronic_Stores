import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWeightHanging,
  faShirt,
  faMagnifyingGlass,
  faShapes,
  faWarehouse,
  faStar,
  faBasketShopping,
  faFileLines,
  faBox,
  faRupiahSign,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateproduct } from "../../actions/ProductActions";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditProduct() {
  const navigate = useNavigate();
  const [id, setID] = useState("");

  const [prod_name, setProdname] = useState("");
  const [prod_desc, setProddesc] = useState("");
  const [prod_stock, setProdstock] = useState("");
  const [prod_price, setProdprice] = useState("");
  const [prod_weight, setWeight] = useState("");
  const [prod_category, setCategory] = useState("");
  const [prod_brand, setBrand] = useState("");
  const [prod_condition, setCondition] = useState("");
  const [prod_rating, setRating] = useState("");
  const [prod_total_sold, setTotal] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      updateproduct(
        localStorage.getItem("access_token"),
        {
          prod_name: prod_name,
          prod_desc: prod_desc,
          prod_stock: prod_stock,
          prod_price: prod_price,
          prod_weight: prod_weight,
          prod_category: prod_category,
          prod_brand: prod_brand,
          prod_condition: prod_condition,
          prod_rating: prod_rating,
          prod_total_sold: prod_total_sold,
        },
        +id
      )
    );
  };
  const { updateProductResult, detailProductResult } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    if (updateProductResult) {
      Swal.fire("Update Successfully!", "Clicked the button!", "success");
      navigate("/");
    }
  });

  useEffect(
    () => {
      if (detailProductResult) {
        setProdname(detailProductResult.prod_name);
        setProddesc(detailProductResult.prod_desc);
        setProdstock(detailProductResult.prod_stock);
        setProdprice(detailProductResult.prod_price);
        setWeight(detailProductResult.prod_weight);
        setCategory(detailProductResult.prod_category);
        setBrand(detailProductResult.prod_brand);
        setCondition(detailProductResult.prod_condition);
        setRating(detailProductResult.prod_rating);
        setTotal(detailProductResult.prod_total_sold);
        setID(detailProductResult.id);
      }
    },
    [detailProductResult],
    [dispatch]
  );

  return (
    <div className="bg-color-product-admin">
      <div className="container">
        <div className="row ">
          <br></br>
          <div className="text-center pb-2 tile-line">
            <br></br>
            <h1 className="mb-4 title-style-job">Edit Product</h1>
          </div>
          <div className="col-md-6 offset-md-3 justify-content-center bg-color-order">
            <img
              className="img-fluid img-responsive mx-auto d-block"
              src=""
              alt=""
            />
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="prod_name"
                  placeholder="Name Product"
                  value={prod_name}
                  onChange={(event) => setProdname(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description Product"
                  name="prod_desc"
                  value={prod_desc}
                  onChange={(event) => setProddesc(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faWarehouse}></FontAwesomeIcon>{" "}
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stock"
                  name="prod_stock"
                  value={prod_stock}
                  onChange={(event) => setProdstock(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faWeightHanging}></FontAwesomeIcon>{" "}
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Weight"
                  name="prod_weight"
                  value={prod_weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faShapes}></FontAwesomeIcon>{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category"
                  name="prod_category"
                  value={prod_category}
                  onChange={(event) => setCategory(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faShirt}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brand"
                  name="prod_brand"
                  value={prod_brand}
                  onChange={(event) => setBrand(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Condition"
                  name="prod_condition"
                  value={prod_condition}
                  onChange={(event) => setCondition(event.target.value)}
                />
              </div>
              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faRupiahSign}></FontAwesomeIcon>{" "}
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="prod_price"
                  value={prod_price}
                  onChange={(event) => setProdprice(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Rating"
                  name="prod_rating"
                  value={prod_rating}
                  onChange={(event) => setRating(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faBasketShopping}></FontAwesomeIcon>
                </span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Rating"
                  name="prod_total_sold"
                  value={prod_total_sold}
                  onChange={(event) => setRating(event.target.value)}
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
      </div>
    </div>
  );
}

export default EditProduct;
