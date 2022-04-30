import React from "react";

import "./Footer.css";

export default function Footer() {
    return (
        <footer className="custom-footer-container">
            <span className="d-flex align-items-center">
                <a href="google.com" className="tab blue">
                    <div>About</div>
                </a>
                <a href="google.com" className="tab blue">
                    <div>Team</div>
                </a>
                <a href="google.com" className="tab blue">
                    <div>Contact</div>
                </a>
            </span>
        </footer>
    );
}
