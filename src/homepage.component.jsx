import React from "react";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Chapeus</h1>
            <span className="subtitle">Comprar</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Chapeus</h1>
            <span className="subtitle">Comprar</span>
          </div>
        </div>{" "}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Casacos</h1>
            <span className="subtitle">Comprar</span>
          </div>
        </div>{" "}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mulheres</h1>
            <span className="subtitle">Comprar</span>
          </div>
        </div>{" "}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Homens</h1>
            <span className="subtitle">Comprar</span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
