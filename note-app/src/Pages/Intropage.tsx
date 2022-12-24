import React from "react";
import { Button } from "../Components/Button";
import Introimg from "../images/intro-image.svg";
import "../dist/css/main.css";
import { useNavigate } from "react-router-dom";

export const Intropage = () => {
  let navigate = useNavigate();

  const navigateToHome = () => {
    navigate("./Home");
  };

  return (
    <>
      <div className="intro-page-container">
        <div className="left-side">
          <div className="left-side-inner">
            <div className="heading">
              <h1>
                Take<span>Note</span>
              </h1>
            </div>

            <div className="para">
              <h2>Meet your modern</h2>
              <h2 className="colored-h2">note taking App</h2>
              <p>
                Manage your daily tasks and workflow in a modern way and boost
                your efficiency without any efforts.
              </p>
              {/* <button className="takeNote-btn" onClick={navigateToHome}>
                Take notes ➜
              </button> */}
              <Button
                handleClick={navigateToHome}
                classname="takeNote-btn"
                text="Take notes ➜"
              />
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="signOut-btn-container"></div>

          <div className="intro-img-container">
            <img src={Introimg} alt="intro" />
          </div>
        </div>
      </div>
    </>
  );
};
