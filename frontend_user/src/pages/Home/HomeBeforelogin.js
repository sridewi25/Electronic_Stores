import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image_hero from './hero-img.png';
import './style.css'

function HomeBeforelogin() {
  return (
    <div id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
             Welcome to Electronic Stores
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
             Nikmatin Diskon yang sudah disediakan oleh toko kami, Selamat Berbelanja
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start"></div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src={image_hero} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBeforelogin;
