import React from "react";
import "./Card.css";

export default function Card(props) {
    const children = props.children; // Takes all child elements when used as a wrapper
    const backgroundColor = props.background || "white";
    const color = props.textColor || "black";
    return (
        <div
            className="custom-card"
            style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
        >
            {children}
        </div>
    );
}
