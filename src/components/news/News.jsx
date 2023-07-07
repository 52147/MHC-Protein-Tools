import React from "react";
import "./News.css";
import { NewsCard } from "./NewsCard";
import { Title } from "./Title";

export const News = () => {
  return (
    <>
      <Title />
      <div className="custom-container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <NewsCard
              title="Breaking News"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageUrl="pexels-neosiam-707571.jpg"
              cardWidth="300px"
            />
          </div>
          <div className="col-md-6 mb-4">
            <NewsCard
              title="Latest Updates"
              description="Praesent pretium dapibus est, vel sagittis mauris feugiat et."
              imageUrl="pexels-neosiam-707571.jpg"
            />
          </div>
          <div className="col-md-6 mb-4">
            <NewsCard
              title="Latest Updates"
              description="Praesent pretium dapibus est, vel sagittis mauris feugiat et."
              imageUrl="pexels-neosiam-707571.jpg"
            />
          </div>
          <div className="col-md-6 mb-4">
            <NewsCard
              title="Latest Updates"
              description="Praesent pretium dapibus est, vel sagittis mauris feugiat et."
              imageUrl="pexels-neosiam-707571.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};
