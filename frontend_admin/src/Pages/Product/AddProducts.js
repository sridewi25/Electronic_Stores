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
  faImage,
  faFileLines,
  faBox,
  faRupiahSign

} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {addproduct,imageupload} from '../../actions/ProductActions'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'

function AddProducts() {
  const navigate = useNavigate()
  const [prod_image,setImage] = useState({}) 
  const [prod_name,setProdname] = useState("") 
  const [prod_desc,setProddesc] = useState("") 
  const [prod_stock,setProdstock] = useState("") 
  const [prod_price,setProdprice] = useState("") 
  const [prod_weight,setWeight] = useState("") 
  const [prod_category,setCategory] = useState("") 
  const [prod_brand,setBrand] = useState("") 
  const [prod_condition,setCondition] = useState("") 
  const [prod_rating,setRating] = useState("") 

  const dispatch = useDispatch()

  
  const imageOnChange = (event) =>{
    setImage(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const fileupload = new FormData()
    fileupload.append("image",prod_image)
    imageupload(fileupload)

    dispatch(addproduct(localStorage.getItem("access_token"),
    {prod_image:'--'+ prod_image.name,
    prod_name:prod_name,
    prod_desc: prod_desc,
    prod_stock: prod_stock,
    prod_price:prod_price,
    prod_weight:prod_weight,
    prod_category:prod_category,
    prod_brand:prod_brand,
    prod_condition:prod_condition,
    prod_rating:prod_rating
  },fileupload))
  }
  const {addProductResult} = useSelector ((state)=>state.productReducer)

  useEffect(()=>{
    if(addProductResult){
      Swal.fire(
        'Add Product Successfully!',
        'Clicked the button!',
        'success'
      )
      navigate("/")
    }
  })
  return (
    <div className="bg-color-product-admin">
      <div className="container">
        <div className="row ">
          <br></br>
          <div className="text-center pb-2 tile-line">
            <br></br>
            <h1 className="mb-4 title-style-job">Add Product</h1>
          </div>
          <div className="col-md-6 offset-md-3 justify-content-center bg-color-order">
            <img
              className="img-fluid img-responsive mx-auto d-block"
              src=""
              alt=""
            />
            <form onSubmit={(event)=>handleSubmit(event)}>
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
                  name="Rating"
                  value={prod_rating}
                  onChange={(event) => setRating(event.target.value)}
                  
                />
              </div>

              <div className="input-group flex-nowrap input-align input-group">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                </span>
                <input
                  type="file" className="form-control" id="inputGroupFile01"
                  name="image" 
                  onChange={imageOnChange}
                />
              </div>

              <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
                <button className="btn text-add" type="submit">
                  Add
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

export default AddProducts;
