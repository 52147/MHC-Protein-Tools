import React from "react";
import "./Home.css";

export const Home = () => {
  const showcaseStyle = {
    backgroundImage: `url("https://i.ibb.co/8XmGhGg/Cells-And-DNA-Share.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    transition: "all 0.4s ease-in-out",
    };
  return (
    <div className="home">
      <section className="showcase" style={showcaseStyle}>
        <video
          src="https://i.ibb.co/8XmGhGg/Cells-And-DNA-Share.jpg"
          muted
          loop
          autoplay
        ></video>
        <div className="overlay"></div>
        <div className="text text-right">
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

      <section className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
};
