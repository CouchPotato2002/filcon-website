import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Address:</h4>
            <h1 className="list-unstyled">
              <li>#86,#3rd Main,2nd Stage,</li>
              <li>AGB Layout,Mahalakshmipuram,</li>
              <li>Bengaluru-560086</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Contact info:</h4>
            <ui className="list-unstyled">
              <li>number</li>
              <li>email id</li>
              
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>FILCON</h4>
            
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} FILCON | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
