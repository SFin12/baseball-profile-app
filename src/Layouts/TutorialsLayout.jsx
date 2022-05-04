import React, { useEffect } from "react";
import { tutorials } from "../data/data";
import { nanoid } from "nanoid";
import { Col, Row } from "react-bootstrap";
import "./TutorialsLayout.css";

export default function TutorialsLayout({ type, moduleName, activateTab }) {
    // set to active tab
    useEffect(() => {
        activateTab("training");
    }, []);

    // only get the hitting tutorials and sort them from first to last by their order.
    const sortedTutorials = tutorials
        .filter((tutorial) => tutorial.type === type)
        .sort((current, next) => current.module - next.module);

    return (
        <div className="tutorials-container">
            <h1 className="pt-3">{moduleName} Tutorials</h1>
            <section className="container d-flex justify-content-center flex-wrap align-items-center h-100 w-100 ">
                <Row
                    lg={3}
                    md={2}
                    sm={2}
                    xs={1}
                    className="text-center mb-md-5"
                >
                    {sortedTutorials.map((tutorial, i) => {
                        if (i < 6) {
                            return (
                                <Col key={nanoid()}>
                                    <div className="m-3 text-white">
                                        <iframe
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
