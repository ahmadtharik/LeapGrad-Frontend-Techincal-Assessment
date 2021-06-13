import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="ui grid">
        <div className="three wide column">
          <i className="grey large horizontally flipped phone icon"></i>
        </div>
        <div className="three wide column">
          <i className=" large grey user outline icon"></i>
        </div>
        <div className="four wide column">
          <i
            className="green inverted bordered circular big braille icon"
            id="dialer"
          ></i>
        </div>

        <div className="three wide column">
          <i className="large grey cog icon"></i>
        </div>
        <div className="three wide column">
          <i className="large green bullseye icon"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
