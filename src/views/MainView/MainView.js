import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HomeView from "./HomeView/HomeView";
import StatsView from "./StatsView/StatsView";
import TrainingView from "./TrainingView/TrainingView";

export default function MainView() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeView />}></Route>
                <Route path="/stats" element={<StatsView />}></Route>
                <Route path="/training" element={<TrainingView />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}
