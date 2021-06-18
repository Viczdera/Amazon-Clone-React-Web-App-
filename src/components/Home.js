import React from "react";
import "./Home.css";
import home_background from "../assets/home_background.png";
import Products from "./Products";
import chair from "../assets/chair.jpg"; 
import cream from  "../assets/cream.jpg";
import headset from  "../assets/headset.jpg";
import joggers from  "../assets/joggers.jpg";
import boil from  "../assets/boil.jpg";
import sweats from  "../assets/sweats.jpg"

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
          <Products id="2" title="lotion" price="50.99" rating={3} image={boil} />
          <Products id="3" title="protective screen" price="5.99" rating={5} image={headset} />
        </div>
        <div className="homeRow">
          <Products id="4" title="joggers" price="19.99" rating={3} image={joggers} />
          <Products id="5" title="sweats" price="14.99" rating={4} image={sweats} />
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
