import React from "react";

import Khalopop from "../images/khalo-pop.jpeg";
import Khalopoptwo from "../images/khalo-pop2.jpeg";

function Membershipmenu() {
  return (
    <section className="membership-menu">
      <div className="membership-container">
        <div className="membership-first">
          <div className="membership-img">
            <div className="membership-img_1">
              <img
                src={Khalopop}
                alt="Khalo pop"
                width="60px"
                height="60px"
              />
            </div>
            <div className="membership-img_2">
              <img
                src={Khalopoptwo}
                alt="Khalo pop"
                width="60px"
                height="60px"
              />
            </div>
          </div>
          <div className="membership-text">
            <h3>Introducing Khalo Pop</h3>
            <p>Single Serve Meals, Free Delivery, No Extra Charges</p>
          </div>
          <div className="mebership-button">
            <button className="btn-common">order now</button>
          </div>
        </div>
        <div className="membership-second">
         
          <div className="membership-text">
            <h3>Introducing Khalo SUPER</h3>
            <p>
              The membership program you've been waiting for.
              <span>Grab it at unbelievable introductory prices!</span>
            </p>
          </div>
          <div className="mebership-button">
            <button className="btn-common">get super now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Membershipmenu;
