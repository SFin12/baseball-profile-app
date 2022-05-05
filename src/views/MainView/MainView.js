import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
import HomeView from "./HomeView/HomeView";
import StatsView from "./StatsView/StatsView";
import "./MainView.css";
import TutorialsLayout from "../../Layouts/TutorialsLayout";

export default function MainView({ username }) {
    const [activeTab, setActiveTab] = useState("");
    const location = useLocation();
    useEffect(() => {
        // Change active tab based on current url the url is changed without clickong on tabs.
        switch (location.pathname) {
            case "/main":
                setActiveTab("home");
                break;
            case "/main/stats":
                setActiveTab("stats");
                break;
            case "/main/stats/hitting":
                setActiveTab("training");
                break;
            case "/main/stats/base-running":
                setActiveTab("training");
                break;
            default:
                setActiveTab("");
                break;
        }
    }, [location]);

    function showActiveTab(activeTab) {
        // active tag will be a string with "home", "stats", "training", or "".
        setActiveTab(activeTab);
    }

    return (
        <>
            <Navbar activeTab={activeTab} activateTab={showActiveTab} />
            <div className="main-view-container background-filter">
                <Routes>
                    <Route
                        path="/" //This is /main
                        element={
                            <HomeView
                                username={username}
                                activateTab={showActiveTab}
                            />
                        }
                    ></Route>
                    <Route
                        path="/stats"
                        element={<StatsView activateTab={showActiveTab} />}
                    ></Route>
                    <Route
                        path="/training/hitting"
                        element={
                            <TutorialsLayout
                                type={"hitting"} // Uses type to filter tutorials data.
                                moduleName={"Hitting"} // Name to display in title and under each video
                                activateTab={showActiveTab}
                            />
                        }
                    ></Route>
                    <Route
                        path="/training/base-running"
                        element={
                            <TutorialsLayout
                                type={"running"}
                                moduleName={"Base Running"}
                                activateTab={showActiveTab}
                            />
                        }
                    ></Route>
                </Routes>
            </div>
            <Footer />
        </>
    );
}
