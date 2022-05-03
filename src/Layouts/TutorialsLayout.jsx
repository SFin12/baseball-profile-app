import React from "react";
import { tutorials } from "../data/data";
import { nanoid } from "nanoid";

export default function TutorialsLayout({ type, moduleName }) {
    // only get the hitting tutorials and sort them from first to last by their order.
    const sortedTutorials = tutorials
        .filter((tutorial) => tutorial.type === type)
        .sort((current, next) => current.module - next.module);

    return (
        <div>
            <h1 className="mt-3">{moduleName} Tutorials</h1>
            <section className="d-flex justify-content-around flex-wrap align-items-center h-100">
                {sortedTutorials.map((tutorial, i) => {
                    if (i < 6) {
                        return (
                            <div
                                className="m-3 maroon text-white"
                                key={nanoid()}
                            >
                                <iframe
                                    width={350}
                                    src={tutorial.url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={
                                        "Embedded youtube " + tutorial.module
                                    }
                                />
                                <h4>
                                    {moduleName} Module {tutorial.module}
                                </h4>
                            </div>
                        );
                    }
                    return null;
                })}
            </section>
        </div>
    );
}
