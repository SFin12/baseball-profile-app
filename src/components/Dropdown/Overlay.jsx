import React from "react";
import "./Dropdown.css";

export default function Overlay({ closeDropdown }) {
    return <div className="overlay" onClick={closeDropdown}></div>;
}
