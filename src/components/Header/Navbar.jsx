import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/angels-logo.png";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import Overlay from "../Dropdown/Overlay";

export default function Navbar({ activeTab, activateTab }) {
    const [trainingDropdown, setTrainingDropdown] = useState(false);

    function toggleDropdown() {
        if (trainingDropdown) {
            closeDropdown();
            activateTab(""); // sets all tabs to inactive (no red). Function in MainView
        } else {
            setTrainingDropdown(true);
            activateTab("training");
        }
    }

    function closeDropdown() {
        const close = () => setTrainingDropdown(false);
        close();
        activateTab("");
    }

    function setActiveTab(e) {
        const activeTab = e.target.title;
        activateTab(activeTab);

        // if training Dropdown is open, close it.
        if (trainingDropdown) {
            closeDropdown();
        }
    }

    return (
        <>
            <nav
                className={
                    activeTab
                        ? "active-border custom-navbar-container"
                        : "inactive-border custom-navbar-container"
                }
            >
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
                        className={
                            activeTab === "home" ? "tab active" : "tab maroon"
                        }
                        onClick={setActiveTab} // Will also close training dropdown if it's open.
                        title="home"
                    >
                        <div>Home</div>
                    </Link>
                    <Link
                        to={"/main/stats"}
                        className={
                            activeTab === "stats" ? "tab active" : "tab maroon"
                        }
                        onClick={setActiveTab}
                        title="stats"
                    >
                        <div>Stats</div>
                    </Link>
                    <div
                        className={
                            activeTab === "training"
                                ? "tab active"
                                : "tab maroon"
                        }
                        onClick={toggleDropdown} // Open or close training dropdown.
                        title="training"
                    >
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
