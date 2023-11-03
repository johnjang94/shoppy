import React from "react";
import Banner from "../../assets/clothes_banner.jpeg";

export default function BannerBox() {
  return (
    <section className="relative">
      <div className="w-full h-full bg-cover bg-banner opacity-80">
        <img src={Banner} alt="Clothes banner" className="w-full h-80 py-2" />
      </div>
      <div className="absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl">
        <h2 className="text-6xl">Shop With Us</h2>
        <p className="text-2xl">Best Products, High Quality</p>
      </div>
    </section>
  );
}
