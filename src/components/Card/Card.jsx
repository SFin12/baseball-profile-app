import React from "react";
import "./Card.css";

export default function Card(props) {
    const children = props.children;
    return <div className="card">{children}</div>;
}
