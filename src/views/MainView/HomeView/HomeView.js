import React, { useEffect } from "react";
import Card from "../../../components/Card/Card";
import profilePicture from "../../../assets/michael-lorenzen.webp";
import ronanPicture from "../../../assets/ronan.png";
import "./HomeView.css";
import { Col, Row } from "react-bootstrap";

export default function HomeView({ username, activateTab }) {
    useEffect(() => {
        // Make sure home tab is activated when rendered.
        activateTab("home");
    }, []);

    return (
        <>
            <h1 className="text-white">{username || "Michael Lorenzen"}</h1>
            <div>
                <a
                    href="https://www.mlb.com/angels"
                    target="_blank"
                    className="team-name"
                    rel="noreferrer"
                >
                    Los Angeles Angels
                </a>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Card textColor="white" background="rgb(0, 50, 99)">
                    <img
                        className="profile-image"
                        src={
                            username === "Ronan" || username === "Ronan Finegan"
                                ? ronanPicture
                                : profilePicture
                        }
                        alt="Baseball player pitching"
                    />
                    <h3 className="mt-2 mb-0">
                        {username || "Michael Lorenzen"}
                    </h3>
                    <hr color="rgba(255,255,255,.5)" width="70%" />
                    <div className="mb-1">
                        <span>
                            <div className="d-inline-block bold">Born: </div>{" "}
                            1/04/1992 in Anaheim, CA
                        </span>
                    </div>
                    <div className="mb-1">
                        <span>
                            <div className="d-inline-block bold">Draft: </div>{" "}
                            2013, Overall Pick: 38
                        </span>
                    </div>
                    <div className="mb-1">
                        <span>
                            <div className="d-inline-block bold">Debut: </div>{" "}
                            4/29/2015
                        </span>
                    </div>
                </Card>
                <Card textColor="white" background="rgb(134, 38, 51)">
                    <h3 className="mb-5">Personal Stats</h3>

                    <div className="w-100">
                        <Row xs={3}>
                            <Col>
                                <span>
                                    <h5 className="d-inline-block"> </h5>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <h5 className="d-inline-block">2022</h5>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <h5 className="d-inline-block">2021</h5>
                                </span>
                            </Col>

                            <div className="d-flex justify-content-center w-100">
                                <hr color="rgba(255,255,255,.5)" width="80%" />
                            </div>
                            <Col>
                                <span>
                                    <h5 className="d-inline-block">Hits:</h5>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">16</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">31</p>
                                </span>
                            </Col>

                            <Col>
                                <span>
                                    <h5 className="d-inline-block">Walks:</h5>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">9</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">10</p>
                                </span>
                            </Col>

                            <Col>
                                <span>
                                    <h5 className="d-inline-block">Runs:</h5>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">12</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">19</p>
                                </span>
                            </Col>

                            <Col>
                                <span>
                                    <h5 className="d-inline-block">
                                        Stolen Bases:
                                    </h5>
                                </span>
                            </Col>
                            <Col className="justify-content-end">
                                <span>
                                    <p className="d-inline-block">8</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">11</p>
                                </span>
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-center w-100">
                            <hr color="rgba(255,255,255,.5)" width="80%" />
                        </div>
                    </div>
                </Card>
            </div>
        </>
    );
}
