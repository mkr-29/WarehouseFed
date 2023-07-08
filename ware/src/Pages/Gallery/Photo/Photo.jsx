import React from "react";
import Header from "../../Homepage/Components/Header/Header";
import Footer from "../../Homepage/Components/Footer/Footer";
import Copyrights from "../../Homepage/Components/Footer/Copyrights";
import Carousel2 from "../Template/Carousel";
import Image1 from "./Assets/image1.jpg";
import Image2 from "./Assets/image2.jpg";
import "./Photo.css";
import { Link } from "react-router-dom";

export default function Photo() {
  return (
    <div>
      <Header />
      <section className="photo-gallery">
        <h1>Photo Gallery</h1>
        <Carousel2 images={[Image1, Image2, Image1]} />
        <div className="photo-gs">
          <Link to="">
            <div>
              <img src={Image1} alt="" />
              <span>Pesticides</span>
            </div>
          </Link>
          <Link to="">
            <div>
              <img src={Image2} alt="" />
              <span>Event 1</span>
            </div>
          </Link>
          <Link to="">
            <div>
              <img src={Image1} alt="" />
              <span>Products</span>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
      <Copyrights />
    </div>
  );
}
