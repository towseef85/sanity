import React from "react";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">smalltext</p>
        <h3>midtext</h3>
        <h1>largetext</h1>
        <img alt="headphones" className="hero-banner-image" />

        <div>
          <Link href="">
            <button type="button">buttontext</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
