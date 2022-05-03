import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import HomeView from "./HomeView/HomeView";
import StatsView from "./StatsView/StatsView";
import "./MainView.css";
import TutorialsLayout from "../../Layouts/TutorialsLayout";

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
                    <Route
                        path="/training/hitting"
                        element={
                            <TutorialsLayout
                                type={"hitting"} // Uses type to filter tutorials data.
                                moduleName={"Hitting"} // Name to display in title and under each video
                            />
                        }
                    ></Route>
                    <Route
                        path="/training/base-running"
                        element={
                            <TutorialsLayout
                                type={"running"}
                                moduleName={"Base Running"}
                            />
                        }
                    ></Route>
                </Routes>
            </div>
            <Footer />
        </>
    );
}
