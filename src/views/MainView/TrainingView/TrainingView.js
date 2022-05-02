import React from "react";
import { Route, Routes } from "react-router-dom";

export default function TrainingView() {
    return (
        <div>
            <Routes>
                <Route to={"/hitting"}></Route>
                <Route to={"/base-running"}></Route>
            </Routes>
        </div>
    );
}
