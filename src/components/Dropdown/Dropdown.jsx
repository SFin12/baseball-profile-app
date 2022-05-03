import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function Dropdown({ closeDropdown }) {
    return (
        <>
            <div className="dropdown-container" onClick={closeDropdown}>
                <div>
                    <Link
                        to={"/main/training/hitting"}
                        className="dropdown-link"
                    >
                        Hitting
                    </Link>
                </div>
                <div>
                    <Link
                        to={"/main/training/base-running"}
                        className="dropdown-link"
                    >
                        Base Running
                    </Link>
                </div>
            </div>
        </>
    );
}
