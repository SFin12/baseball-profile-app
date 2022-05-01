import React from "react";
import Card from "../../../components/Card/Card";
import profilePicture from "../../../assets/michael-lorenzen.webp";
import "./HomeView.css";
import { Col, Container, Row } from "react-bootstrap";

export default function HomeView({ username }) {
    return (
        <>
            <h1 className="text-white">{username || "Michael Lorenzen"}</h1>
            <a href="google.com" className="team-name">
                <h2 className="text-white">Los Angeles Angels</h2>
            </a>
            <div className="d-flex flex-wrap justify-content-center">
                <Card textColor="white" background="rgb(0, 50, 99)">
                    <img
                        className="profile-image"
                        src={profilePicture}
                        alt="Baseball player pitching"
                    />
                    <h3 className="mt-2 mb-0">
                        {username || "Michael Lorenzen"}
                    </h3>
                    <hr color="rgba(255,255,255,.5)" width="70%" />
                    <p>
                        <span>
                            <h5 className="d-inline-block">Born: </h5> 1/04/1992
                            in Anaheim, CA
                        </span>
                    </p>
                    <p>
                        <span>
                            <h5 className="d-inline-block">Draft: </h5> 2013,
                            Overall Pick: 38
                        </span>
                    </p>
                    <p>
                        <span>
                            <h5 className="d-inline-block">Debut: </h5>{" "}
                            4/29/2015
                        </span>
                    </p>
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
                                    <p className="d-inline-block">15</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">20</p>
                                </span>
                            </Col>

                            <Col>
                                <span>
                                    <h5 className="d-inline-block">Walks:</h5>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">15</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">20</p>
                                </span>
                            </Col>

                            <Col>
                                <span>
                                    <h5 className="d-inline-block">Runs:</h5>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">15</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">20</p>
                                </span>
                            </Col>

                            <Col>
                                <span>
                                    <h5 className="d-inline-block">
                                        Stolen Bases:
                                    </h5>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">15</p>
                                </span>
                            </Col>
                            <Col>
                                <span>
                                    <p className="d-inline-block">20</p>
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
