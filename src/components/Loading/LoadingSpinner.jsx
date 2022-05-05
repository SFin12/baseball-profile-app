import React from "react";
import baseballSpinner from "../../assets/baseballSpinner.png";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
    return (
        <div className="center">
            <img
                src={baseballSpinner}
                className="baseball-loading-spinner"
                alt="baseball loading spinner"
            />
        </div>
    );
}
