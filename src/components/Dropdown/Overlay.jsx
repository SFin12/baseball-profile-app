import React from "react";
import "./Dropdown.css";

export default function Overlay({ closeDropdown }) {
    // Sets over all other elements except the navbar when dropdown is open to close dropdown when clicking off of it.
    return <div className="overlay" onClick={closeDropdown}></div>;
}
