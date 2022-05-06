import React, { useEffect, useState } from "react";
import { tutorials } from "../data/data";
import { nanoid } from "nanoid";
import { Col, Row } from "react-bootstrap";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import "./TutorialsLayout.css";

export default function TutorialsLayout({ type, moduleName, activateTab }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set to active tab.
        activateTab("training");

        // Simulate waiting for fetch response
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 700);
    }, [type]);

    // Only get the hitting tutorials and sort them from first to last by their order.
    const sortedTutorials = tutorials
        .filter((tutorial) => tutorial.type === type)
        .sort((current, next) => current.module - next.module);

    return isLoading ? (
        <LoadingSpinner />
    ) : (
        <div className="tutorials-container">
            <h1 className="pt-3 mt-md-3 mt-lg-1">{moduleName} Tutorials</h1>
            {sortedTutorials.length === 0 && (
                <h3 className="text-white">
                    There are no {moduleName.toLowerCase()} tutorials to
                    display.
                </h3>
            )}
            <section className="container d-flex justify-content-center flex-wrap align-items-center h-100 w-100 ">
                <Row
                    lg={3}
                    md={2}
                    sm={2}
                    xs={1}
                    className="text-center mb-md-5"
                >
                    {sortedTutorials.map((tutorial, i) => {
                        // Only display up to 6 videos
                        if (i < 6) {
                            return (
                                <Col key={nanoid()}>
                                    <div className="m-3 text-white">
                                        <iframe
                                            className="m-auto"
                                            src={tutorial.url}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={
                                                "Embedded youtube " +
                                                tutorial.module
                                            }
                                        />
                                        <div className="tutorial-module">
                                            {moduleName} Module{" "}
                                            {tutorial.module}
                                        </div>
                                    </div>
                                </Col>
                            );
                        }
                        return null;
                    })}
                </Row>
            </section>
        </div>
    );
}
