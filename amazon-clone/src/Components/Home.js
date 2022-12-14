import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="flex justify-center mx-auto min-w-[400px]  max-w-6xl">
      <div className="">
        <img
          className="w-full -z-1 -mb-36 grad home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="bg"
        />
        <div className="flex z-1 mx-2 justify-center flex-col xl:flex-row md:flex-row">
          <Product
            id={1}
            image="https://m.media-amazon.com/images/I/71QTp57MfhL._AC_SX425_.jpg"
            title="Fitbit Luxe Fitness and Wellness Tracker with stress management, sleep tracking and 24/7 Heart Rate"
            price={29}
            rating={5}
          ></Product>
          <Product
            id={2}
            image="https://m.media-amazon.com/images/I/61jE6lnCTqL.__AC_SX300_SY300_QL70_ML2_.jpg"
            title="VR Headset Compatible for iPhone and Android Phone, 3D Glasses Virtual Reality With Wireless Bluetooth Earphone for TV,Movies"
            price={29}
            rating={5}
          ></Product>
        </div>
        <div className="flex z-1 mx-2 justify-center flex-col xl:flex-row md:flex-row">
          <Product
            id={3}
            image="https://m.media-amazon.com/images/I/71hU2icwj2L._AC_SX425_.jpg"
            title="Holy Stone HS110D FPV RC Drone with 1080P HD Camera Live Video 120° "
            price={29}
            rating={5}
          ></Product>
          <Product
            id={4}
            image="https://m.media-amazon.com/images/I/413MbCa36bL._SX327_BO1,204,203,200_.jpg"
            title="Friends, Lovers, and the Big Terrible Thing: A Memoir"
            price={29}
            rating={3}
          ></Product>
          <Product
            id={5}
            image="https://m.media-amazon.com/images/I/613tsNzTCQL._AC_SX679_.jpg"
            title="Neutrogena Hydro boost Facial gel-cream with hyaluronic acid"
            price={29}
            rating={4}
          ></Product>
        </div>
        <div className="flex z-1 mx-2 flex-col xl:flex-row md:flex-row">
          <Product
            id={6}
            image="https://m.media-amazon.com/images/I/41r5FlsCcyL._SY300_SX300_QL70_FMwebp_.jpg"
            title="AmazonBasics 81 cm (32 inches) HD Ready Smart LED Fire TV AB32E10SS (Black)"
            price={1299}
            rating={4}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
