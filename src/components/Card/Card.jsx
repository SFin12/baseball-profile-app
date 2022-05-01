import React from "react";
import "./Card.css";

export default function Card(props) {
    const children = props.children;
    const backgroundColor = props.background;
    const color = props.textColor;
    return (
        <div
            className="card"
            style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
        >
            {children}
        </div>
    );
}
