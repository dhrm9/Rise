import React, { useState } from "react";
import "../styles/ClaimForm.css";
import { IoLocationOutline, IoLanguageOutline } from "react-icons/io5";
import { AiTwotoneCalculator } from "react-icons/ai";

const ClaimForm = () => {
  const [claimValue, setClaimValue] = useState("");
  const [contractValue, setContractValue] = useState("");
  const [place, setPlace] = useState("");
  const [language, setLanguage] = useState("");
  const [errors, setErrors] = useState({
    claimValue: "",
    contractValue: "",
    place: "",
    language: "",
  });

  
  const handleClaimValueChange = (e) => {
    setClaimValue(e.target.value);
  };

  const handleContractValueChange = (e) => {
    setContractValue(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!claimValue || isNaN(claimValue)) {
      formErrors.claimValue = "Please enter a valid claim value.";
      isValid = false;
    }

    if (!contractValue || isNaN(contractValue)) {
      formErrors.contractValue = "Please enter a valid contract value.";
      isValid = false;
    }

    if (!place) {
      formErrors.place = "Please select a place for proceedings.";
      isValid = false;
    }

    if (!language) {
      formErrors.language = "Please select a language for proceedings.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  return (
    <div className="claim-form">
      <h3 className="highlighted-text">
        <span>File</span>
        <span className="highlight-line">
          your Claim. <small className="dull-text">(Approx 5 Minutes)</small>
        </span>
      </h3>

      
      <div className="form-container">
        <div className="form-group">
          <label>
            <AiTwotoneCalculator />
            Claim Value
          </label>
          <small>Contract Value</small>
          <input
            type="text"
            placeholder="10,00,00"
            value={contractValue}
            onChange={handleContractValueChange}
          />

          

          <small>Claim Value</small>
          <input
            type="text"
            placeholder="15,00,00"
            value={claimValue}
            onChange={handleClaimValueChange}
          />
          
        </div>

        <div className="form-group">
          <label>
            <IoLocationOutline /> Place
          </label>
          <select value={place} onChange={handlePlaceChange}>
            <option value="">Select the Place for proceedings</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
          </select>
          {errors.place && <small className="error">{errors.place}</small>}

          <p>
            Is the place for the proceedings the one mentioned in the agreement?
          </p>
          <div
            className="radio-btn"
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="option"
                value="yes"
                style={{ marginRight: "5px" }}
              />
              Yes
            </label>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="option"
                value="no"
                style={{ marginRight: "5px" }}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>
            <IoLanguageOutline /> Language
          </label>
          <select value={language} onChange={handleLanguageChange}>
            <option value="">Select the language for proceedings</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
          {errors.language && (
            <small className="error">{errors.language}</small>
          )}
          <p>Is the language mentioned correct?</p>
          <div
            className="radio-btn"
            style={{ display: "flex", gap: "10px", alignItems: "center" }}
          >
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="option"
                value="yes"
                style={{ marginRight: "5px" }}
              />
              Yes
            </label>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="option"
                value="no"
                style={{ marginRight: "5px" }}
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
