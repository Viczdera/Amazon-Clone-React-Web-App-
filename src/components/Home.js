import React from "react";
import "./Home.css";
import home_background from "../assets/home_background.png";
import Products from "./Products";
import chair from "../assets/chair.jpg";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img className="homeImage" src={home_background} />

        <div className="homeRow">
          <Products
            id="1"
            title="cloth"
            price="99.99"
            rating={3}
            image={chair}
          />
          <Products id="2" title="cloth" price="99.99" rating={3} />
          <Products id="3" title="cloth" price="99.99" rating={3} />
        </div>
        <div className="homeRow">
          <Products id="4" title="cloth" price="99.99" rating={4} />
          <Products id="5" title="cloth" price="99.99" rating={4} />
        </div>
        <div className="homeRow">
          <Products />
          <Products />
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Home;
