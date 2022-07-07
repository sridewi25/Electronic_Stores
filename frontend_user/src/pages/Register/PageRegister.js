import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import image_login from "../Login/image-1.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../../actions/UserActions";

function PageRegister() {
  const navigate = useNavigate();
  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [user_gender, setGender] = useState("");

  const dispatch = useDispatch();

  const { addUsersResult } = useSelector((state) => state.userReducer);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      adduser({
        user_name: user_name,
        user_email: user_email,
        user_password: user_password,
        user_gender: user_gender,
      })
    );
  };

  useEffect(() => {
    if (addUsersResult) {
      Swal.fire("Register Successfully!", "Clicked the button!", "success");
      navigate("/login_user");
    } else {
    }
  });
  return (
    <div className="bg-login">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-md">
        <div className="row justify-content-center bg-row">
          <div className="col-6 bg-col">
            <img
              src={image_login}
              alt=""
              align="center"
              className="img-responsive"
            />
          </div>
          <div className="col-6 bg-col-1">
            <h1>Welcome</h1>
            <h4>Create Your Account</h4>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="user_name"
                  value={user_name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="user_email"
                  value={user_email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="user_password"
                  value={user_password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender: Female or Male"
                  name="user_gender"
                  value={user_gender}
                  onChange={(event) => setGender(event.target.value)}
                />
              </div>

              <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
                <button className="btn text-add" type="submit">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default PageRegister;
