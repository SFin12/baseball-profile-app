import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import HomeView from "./HomeView/HomeView";
import StatsView from "./StatsView/StatsView";
import TrainingView from "./TrainingView/TrainingView";
import "./MainView.css";

export default function MainView({ username }) {
    return (
        <>
            <Navbar />
            <div className="main-view-container background-filter">
                <Routes>
                    <Route
                        path="/"
                        element={<HomeView username={username} />}
                    ></Route>
                    <Route path="/stats" element={<StatsView />}></Route>
                    <Route path="/training" element={<TrainingView />}></Route>
                </Routes>
            </div>
            <Footer />
        </>
    );
}
