// src/components/IDCard.jsx
import React, { useRef } from "react";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import "./CardStyles.css";

const IDCard = ({ studentData, template }) => {
  const cardRef = useRef();

  const handleDownload = () => {
    if (!cardRef.current) return;
    htmlToImage
      .toPng(cardRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${studentData.name}_IDCard.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Image download failed", err);
      });
  };

  return (
    <div className={`idcard-container`}>
      <div className={`idcard template-${template}`} ref={cardRef}>
        <div className="top-header">
          <h3>SMART SCHOOL</h3>
          <p>Student Identity Card</p>
        </div>

        {template === "1" ? (
          <>
            <div className="photo-section">
              <img src={studentData.photo} alt="Student" />
            </div>
            <h2 className="student-name">{studentData.name}</h2>
            <div className="info-section">
              <p>
                <strong>Roll No:</strong> {studentData.rollNumber}
              </p>
              <p>
                <strong>Class:</strong> {studentData.classDivision}
              </p>
              <p>
                <strong>Rack No:</strong> {studentData.rackNumber}
              </p>
              <p>
                <strong>Bus Route:</strong> {studentData.busRoute}
              </p>
              {studentData.allergies.length > 0 && (
                <p>
                  <strong>Allergies:</strong> {studentData.allergies.join(", ")}
                </p>
              )}
            </div>
            <div className="qr-section">
              <QRCode value={JSON.stringify(studentData)} size={70} />
            </div>
          </>
        ) : (
          <>
            <div className="template2-body">
              <div className="photo-section">
                <img src={studentData.photo} alt="Student" />
              </div>
              <div>
                <h2 className="student-name">{studentData.name}</h2>
                <div className="info-section">
                  <p>
                    <strong>Roll No:</strong> {studentData.rollNumber}
                  </p>
                  <p>
                    <strong>Class:</strong> {studentData.classDivision}
                  </p>
                  <p>
                    <strong>Rack No:</strong> {studentData.rackNumber}
                  </p>
                  <p>
                    <strong>Bus Route:</strong> {studentData.busRoute}
                  </p>
                  {studentData.allergies.length > 0 && (
                    <p>
                      <strong>Allergies:</strong>{" "}
                      {studentData.allergies.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="qr-section">
              <QRCode value={JSON.stringify(studentData)} size={70} />
            </div>
          </>
        )}
      </div>

      <button className="download-btn no-print" onClick={handleDownload}>
        Download as PNG
      </button>
    </div>
  );
  
};

export default IDCard;
