import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { stats } from "../../../data/data";
import { nanoid } from "nanoid";
import "./StatsView.css";

export default function StatsView({ activateTab }) {
    const [topTen, setTopTen] = useState([]);
    const [type, setType] = useState("Hits");

    useEffect(() => {
        activateTab("stats");
    }, []);

    // create soreted array based based on most hits.
    function sortStats(type = "Hits") {
        setType(type);
        let sortedStats = [];
        if (stats.length === 0) {
            return;
        }
        if (typeof stats[0][type] === "number") {
            sortedStats = stats.sort(
                (current, next) => next[type] - current[type]
            );
        } else {
            sortedStats = stats.sort((current, next) => {
                const nameA = current[type].toUpperCase(); // ignore upper and lowercase
                const nameB = next[type].toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                // names must be equal
                return 0;
            });
        }

        const sortedTopTen = sortedStats.slice(0, 10);
        setTopTen(sortedTopTen);
    }

    useEffect(() => {
        sortStats();
    }, []);

    function handleSort(e) {
        sortStats(e.target.title);
    }

    return (
        <>
            <h1 className="mb-1 mt-3">Top 10 Players</h1>
            <p className="text-white">(By {type})</p>
            <section className="stats-container d-flex  justify-content-center">
                <div className="table-container">
                    <Table
                        className="h-100"
                        striped
                        bordered
                        hover
                        size="sm"
                        variant="dark"
                    >
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th onClick={handleSort} title="Name">
                                    Player Name
                                </th>
                                <th onClick={handleSort} title="Hits">
                                    Hits
                                </th>
                                <th onClick={handleSort} title="Walks">
                                    Walks
                                </th>
                                <th onClick={handleSort} title="Runs">
                                    Runs
                                </th>
                                <th onClick={handleSort} title="Stolen_Bases">
                                    Stolen Bases
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {topTen.map((player, i) => {
                                return (
                                    <tr key={nanoid()}>
                                        <td>{i + 1}</td>
                                        <td>{player.Name}</td>
                                        <td>{player.Hits}</td>
                                        <td>{player.Walks}</td>
                                        <td>{player.Runs}</td>
                                        <td>{player.Stolen_Bases}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </section>
        </>
    );
}
