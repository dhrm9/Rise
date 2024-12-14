import React, { useState } from "react";
import "../styles/UploadSection.css";
import { TfiReceipt } from "react-icons/tfi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { HiClipboardDocumentList } from "react-icons/hi2";

const UploadSection = () => {
  const [file1, setFile1] = useState(null); // Statement file
  const [file2, setFile2] = useState(null); // Contract file
  const [file3, setFile3] = useState(null); // Arbitration Agreement file
  const [file4, setFile4] = useState(null); // Additional Contract file

  // Handle file selection
  const handleFileChange = (e, setFile) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="upload-section">
      <div className="first">
        <h4>
          {" "}
          <TfiReceipt /> Statement
        </h4>
        <div className="upload-box">
          <p>
            Write your Statement Here <br /> or
          </p>
          <button onClick={() => document.getElementById("fileInput1").click()}>
            Upload a PDF
          </button>

          {/* Hidden file input for Statement */}
          <input
            type="file"
            id="fileInput1"
            style={{ display: "none" }}
            accept=".pdf"
            onChange={(e) => handleFileChange(e, setFile1)}
          />

          {file1 && (
            <p>
              File Selected: <strong>{file1.name}</strong>
            </p>
          )}
        </div>
      </div>

      <div className="second">
        <h4>
          {" "}
          <HiOutlineClipboardDocumentList /> Agreement under Disputes
        </h4>
        <div className="upload-boxes">
          <div className="upload-box">
            <p>Upload the Contract</p>
            <button
              onClick={() => document.getElementById("fileInput2").click()}
            >
              Choose File
            </button>
            {/* Hidden file input for Contract */}
            <input
              type="file"
              id="fileInput2"
              style={{ display: "none" }}
              accept=".pdf"
              onChange={(e) => handleFileChange(e, setFile2)}
            />
            {file2 && (
              <p>
                File Selected: <strong>{file2.name}</strong>
              </p>
            )}
            <small>Max: 2MB, PDF</small>
          </div>
          <div className="upload-box">
            <p>Arbitration Agreement</p>
            <button
              onClick={() => document.getElementById("fileInput3").click()}
            >
              Choose File
            </button>
            {/* Hidden file input for Arbitration Agreement */}
            <input
              type="file"
              id="fileInput3"
              style={{ display: "none" }}
              accept=".pdf"
              onChange={(e) => handleFileChange(e, setFile3)}
            />
            {file3 && (
              <p>
                File Selected: <strong>{file3.name}</strong>
              </p>
            )}
            <small>Max: 2MB, PDF</small>
          </div>
        </div>
      </div>

      <div className="third">
        <h4>
          {" "}
          <HiClipboardDocumentList /> Additional Documentation
        </h4>
        <div className="additional-upload">
          <div className="upload-box">
            <button
              onClick={() => document.getElementById("fileInput4").click()}
            >
              Upload the Contract
            </button>
            {/* Hidden file input for Additional Documentation */}
            <input
              type="file"
              id="fileInput4"
              style={{ display: "none" }}
              accept=".pdf"
              onChange={(e) => handleFileChange(e, setFile4)}
            />
            {file4 && (
              <p>
                File Selected: <strong>{file4.name}</strong>
              </p>
            )}
          </div>
          <div className="upload-box">
            <span className="add-btn">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSection;
