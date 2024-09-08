import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com./images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325-BO1,204,203,200_.jpg"
          />
          <Product
            id="12321354"
            title="RRFTOK 72 INCHES DISPLAY EASEL STAND"
            price={27}
            rating={4}
            image="https://m.media-amazon.com/images/I/618MskKAv5S._AC_UL600_FMwebp_QL65_.jpg"
          />
          <Product
            id="12321354"
            title="DELSEY Paris Chatelet Hardside Luggage"
            price={514}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31lsUrNB10L._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12322341"
            title="BathBlocks Ball Run & Waterfall "
            price={18.39}
            rating={5}
            image="https://m.media-amazon.com/images/I/51eDvSor4EL._AC_SY400_.jpg"
          />
          <Product
            id="12321341"
            title="Echo Dot 5th generation "
            price={29.96}
            rating={3}
            image="	https://images-na.ssl-images-amazon.com/images/I/51FytxrYnoL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
          />
          <Product
            id="13321341"
            title="Women's Crystal Bracelet Watch "
            price={19}
            rating={4}
            image="	https://m.media-amazon.com/images/I/41WDciTnnxL._AC_SR400,600_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates  "
            price={23.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg"
          />
          <Product
            id="12321341"
            title="INCLY 32OZ CRYSTAL   "
            price={24.96}
            rating={3}
            image="	https://m.media-amazon.com/images/I/71aE1lZj5QL._AC_UL600_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
