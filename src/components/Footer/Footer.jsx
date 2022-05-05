import React from "react";

import "./Footer.css";

export default function Footer() {
    return (
        <footer className="custom-footer-container">
            <span className="d-flex px-3">
                <a
                    href="http://google.com"
                    className="tab blue"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div>About</div>
                </a>
                <a
                    href="http://google.com"
                    className="tab blue"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div>Team</div>
                </a>
                <a
                    href="http://google.com"
                    className="tab blue"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div>Contact</div>
                </a>
            </span>
        </footer>
    );
}
