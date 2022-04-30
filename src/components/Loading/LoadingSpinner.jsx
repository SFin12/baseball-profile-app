import React from "react";
import baseballSpinner from "../assets/baseballSpinner.png";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
    return (
        <div className="d-flex justify-content-start">
            <img
                src={baseballSpinner}
                className="baseball-loading-spinner"
                alt="baseball loading spinner"
            />
        </div>
    );
}
