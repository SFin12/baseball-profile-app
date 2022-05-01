import React from "react";
import "./Navbar.css";
import logo from "../../assets/angels-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="custom-navbar-container">
            <span className="d-flex align-items-center">
                <img
                    src={logo}
                    className="logo"
                    alt="Los Angeles Angels Logo"
                />
            </span>
            <span className="d-flex align-items-center px-3">
                <Link to={"/main"} className="tab maroon">
                    <div>Home</div>
                </Link>
                <Link to={"/main/stats"} className="tab maroon">
                    <div>Stats</div>
                </Link>
                <Link to={"/main/training"} className="tab maroon">
                    <div>Training</div>
                </Link>
            </span>
        </nav>
    );
}
