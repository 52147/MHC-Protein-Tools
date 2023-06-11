import React, { useEffect } from "react";

import "./Card.scss";

export const CardComponent = () => {
  return (
    <>
      <div className="site__wrapper">
        <div className="grid">
          <div className="card">
            <div className="card__image">
              <img src="https://unsplash.it/400/608?image=123" alt="" />

              <div className="card__overlay card__overlay--indigo">
                <div className="card__overlay-content">
                  <ul className="card__meta">
                    <li>
                      <a href="#0">
                        <i className="fa fa-tag"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-clock-o"></i> 2 min ago
                      </a>
                    </li>
                  </ul>

                  <a href="#0" className="card__title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </a>

                  <ul className="card__meta card__meta--last">
                    <li>
                      <a href="#0">
                        <i className="fa fa-user"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-facebook-square"></i> Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card__image">
              <img src="https://unsplash.it/400/300?image=100" alt="" />

              <div className="card__overlay card__overlay--blue">
                <div className="card__overlay-content">
                  <ul className="card__meta">
                    <li>
                      <a href="#0">
                        <i className="fa fa-tag"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-clock-o"></i> 2 days ago
                      </a>
                    </li>
                  </ul>

                  <a href="#0" className="card__title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </a>

                  <ul className="card__meta card__meta--last">
                    <li>
                      <a href="#0">
                        <i className="fa fa-user"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-facebook-square"></i> Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card__image">
              <img src="https://unsplash.it/400/300?image=200" alt="" />

              <div className="card__overlay card__overlay--indigo">
                <div className="card__overlay-content">
                  <ul className="card__meta">
                    <li>
                      <a href="#0">
                        <i className="fa fa-tag"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-clock-o"></i> 2 days ago
                      </a>
                    </li>
                  </ul>

                  <a href="#0" className="card__title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </a>

                  <ul className="card__meta card__meta--last">
                    <li>
                      <a href="#0">
                        <i className="fa fa-user"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-facebook-square"></i> Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card__image">
              <img src="https://unsplash.it/400/300?image=300" alt="" />

              <div className="card__overlay card__overlay--indigo">
                <div className="card__overlay-content">
                  <ul className="card__meta">
                    <li>
                      <a href="#0">
                        <i className="fa fa-tag"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-clock-o"></i> 2 days ago
                      </a>
                    </li>
                  </ul>

                  <a href="#0" className="card__title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </a>

                  <ul className="card__meta card__meta--last">
                    <li>
                      <a href="#0">
                        <i className="fa fa-user"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-facebook-square"></i> Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card__image">
              <img src="https://unsplash.it/400/300?image=400" alt="" />

              <div className="card__overlay card__overlay--blue">
                <div className="card__overlay-content">
                  <ul className="card__meta">
                    <li>
                      <a href="#0">
                        <i className="fa fa-tag"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-clock-o"></i> 2 days ago
                      </a>
                    </li>
                  </ul>

                  <a href="#0" className="card__title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </a>

                  <ul className="card__meta card__meta--last">
                    <li>
                      <a href="#0">
                        <i className="fa fa-user"></i> Lorem ipsum
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fa fa-facebook-square"></i> Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site__info"></div>
      </div>
    </>
  );
};
