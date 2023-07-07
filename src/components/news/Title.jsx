import React from "react";
import "./Title.css";

export const Title = () => {
  return (
    <>
      <section className="showcase pub-title">
        <header>123456</header>
        <video
          src="https://traversymedia.com/downloads/videos/explore.mp4"
          muted
          loop
          autoplay
        ></video>
        <div className="overlay"></div>
        <div className="text text-right">
          {" "}
          {/* Updated className */}
          <h2>Lorem ipsum dolor</h2>
          <h3>Lorem ipsum dolor sit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#">Explore</a>
        </div>
      </section>
    </>
  );
};
