import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/angels-logo.png";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Overlay from "../Dropdown/Overlay";

export default function Navbar() {
    const [trainingDropdown, setTrainingDropdown] = useState(false);

    function toggleDropdown() {
        if (trainingDropdown) {
            setTrainingDropdown(false);
        } else {
            setTrainingDropdown(true);
        }
    }

    function closeDropdown() {
        console.log("closeDropdown");
        const close = () => setTrainingDropdown(false);
        close();
    }

    return (
        <>
            <nav className="custom-navbar-container">
                <span className="d-flex align-items-center">
                    <img
                        src={logo}
                        className="logo"
                        alt="Los Angeles Angels Logo"
                    />
                </span>
                <span className="d-flex align-items-center px-3">
                    <Link
                        to={"/main"}
                        className="tab maroon"
                        onClick={trainingDropdown && closeDropdown}
                    >
                        <div>Home</div>
                    </Link>
                    <Link
                        to={"/main/stats"}
                        className="tab maroon"
                        onClick={trainingDropdown && closeDropdown}
                    >
                        <div>Stats</div>
                    </Link>
                    <div className="tab maroon" onClick={toggleDropdown}>
                        <div>Training</div>
                        {trainingDropdown ? (
                            <Dropdown closeDropdown={closeDropdown} />
                        ) : null}
                    </div>
                </span>
            </nav>
            {trainingDropdown && <Overlay closeDropdown={closeDropdown} />}
        </>
    );
}
