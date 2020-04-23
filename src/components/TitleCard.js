import React, { useState } from "react";
import PropTypes from "prop-types";

const TitleCard = (props) => {
  return (
    <div className="title-card">
      <h1 className="nunito-sans" style={{ marginBottom: 0 }}>
        Supermarket Tracker
      </h1>
      <h4
        className="nunito-sans"
        style={{
          marginTop: 8,
          marginBottom: "8px",
        }}
      >
        Enter your postal code:
      </h4>

      <form className="form" onSubmit={props.handleFormSubmit}>
        <label>
          <span className="hide-label-on-xs">Postal Code:</span>
          <input
            className="input-text"
            type="text"
            name="post code"
            value={props.postCodeInput}
            onChange={(e) => props.setPostCodeInput(e.target.value)}
            // style={{ border: !isPostCodeInvalid ? "red" : "blue" }}
          />
        </label>
        <input className="input-button" type="submit" value="Submit" />
        <label style={{ display: "block", marginTop: 8 }}>
          <input
            className="input-checkbox"
            type="checkbox"
            name="remember post code"
            checked={props.isRememberPostCode}
            onChange={() =>
              props.setRememberPostCode(!props.isRememberPostCode)
            }
          />
          <span>Remember my Post Code</span>
        </label>
      </form>
    </div>
  );
};

TitleCard.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  postCodeInput: PropTypes.string.isRequired,
  setPostCodeInput: PropTypes.func.isRequired,
  isRememberPostCode: PropTypes.bool.isRequired,
  setRememberPostCode: PropTypes.func.isRequired,
};

export default TitleCard;