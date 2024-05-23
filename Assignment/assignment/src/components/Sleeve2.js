import React from "react";
import "./Sleeve2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppDoppler from "./Assets/Images/AppDoppler.jpg";
import img1 from "./Assets/Images/img1.png";
import AppMusic from "./Assets/Images/AppMusic.png";
import AppSpotify from "./Assets/Images/AppSpotify.png";
import ShelfCallout from "./Assets/Images/ShelfCallout@2x.png";
import change from "./Assets/Images/change-it-up.png";
import sharing from "./Assets/Images/sharing.png";
import allapp from "./Assets/Images/all-app-images.png";

import { FaArrowCircleRight } from "react-icons/fa";

import { FaApple } from "react-icons/fa";

function Sleeve2() {
  return (
      <div className="container">
        <div>
          <h1 className="sleeve">
            Sleeve <span className="sleeve2">2</span>
          </h1>
          <h2>The ultimate music accessory for your Mac.</h2>
          <p width="10">
            Sleeve sits on the desktop, displaying and controlling the music
            you're currently playing in{" "}
            <span>
              <img src={AppMusic} alt="AppMusic" height="24px" width="24px" />
            </span>{" "}
            Apple Music,{" "}
            <span>
              <img
                src={AppSpotify}
                alt="AppSpotify"
                height="24px"
                width="24px"
              />
            </span>{" "}
            Spotify, and{" "}
            <span>
              <img
                src={AppDoppler}
                alt="AppDoppler"
                height="24px"
                width="24px"
              />
            </span>
            Doppler.
          </p>
          <div className="mac-buy-container">
            <div className="Mac-App-Store-container">
              <h6 className="app-store-heading">
                {" "}
                <span className="logo">
                  <FaApple />
                </span>
                Mac App Store
              </h6>
            </div>
            <div className="Buy-container">
              <h6 className="buy-heading">Buy Directly</h6>
              <span className="buy-span">$5.99</span>
            </div>
          </div>
          <div>
            <p className="no-subscriptoins-text">
              No subscriptions. No in-app purchases. Requires macOS 11 Big Sur
              or later.
            </p>
          </div>

          <div className="main-ShelfCallout-container">
            <div className="ShelfCallout-container">
              <img
                src={ShelfCallout}
                alt="ShelfCallout"
                width="64px"
                height="62"
                className="ShelfCallout-img"
              />
              <span className="ShelfCallout-para">
                Now with shelves and a progress bar. See what's new in Sleeve
                2.3{" "}
                <i className="m-3">
                  <FaArrowCircleRight />
                </i>
              </span>
            </div>
          </div>

          <span className="mt-5 new-text">
            NEW IN <span className="new-text-span">2.0</span>
          </span>
          <div className="mt-5">
            <h1>Themes. Unlimited themes.</h1>
            <p>
              Themes in Sleeve make creating and switching between
              customizations easy. Share your own creations with friends and
              install as many themes as you like with just a double-click.
            </p>
          </div>
          <div className="img1-container">
            <img src={img1} alt="" className="img1" />
          </div>

          <div className="changeit-and-shareable-main-container">
            <div className="change-it-up-inner-container">
              <div>
                <h3>Change it up</h3>
                <p>
                  Switch between themes with just a click. Modify the built-in
                  themes or create your own using Sleeve’s extensive
                  preferences.
                </p>
              </div>
            </div>

            <div className="sharable-iner-container">
              <div>
                <h3>Shareable</h3>
                <p>
                  Export your themes and share them with friends using the handy
                  new Sleeve Theme file format. Install themes from anywhere
                  with a double-click or a drag and drop.
                </p>
              </div>
            </div>
          </div>
          <span className="customization-text">CUSTOMIZATION</span>
          <h1 className="customization-heading mt-5">
            Countless ways to customize.
          </h1>
          <p className="customization-para mt-5">
            Customization is at the core of the Sleeve experience — choose from
            any combination of design choices, behaviors and settings to make
            Sleeve at home on your desktop.
          </p>
          <img src={allapp} alt="" className="mt-5 mb-5" />
          
          <p className="integrations">INTEGRATIONS</p>
          <h1 className="scorobble-heading">Like, Scrobble.</h1>
        </div>
      </div>
  );
}

export default Sleeve2;
