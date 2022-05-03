import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { stats } from "../../../data/data";
import { nanoid } from "nanoid";
import "./StatsView.css";

export default function StatsView() {
    const [sortBy, setSortBy] = useState();

    // create soreted array based based on most hits.
    const sortedStats = stats.sort((current, next) => next.Hits - current.Hits);
    const topTen = sortedStats.slice(0, 10);

    function handleSort(e) {
        console.log(e.target.title);
    }

    return (
        <>
            <h1 className="mb-3 mt-3">Top 10 Players</h1>
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
                                <th onClick={handleSort} title="name">
                                    Player Name
                                </th>
                                <th>Hits</th>
                                <th>Walks</th>
                                <th>Runs</th>
                                <th>Stolen Bases</th>
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
