import React, { useState, useContext, useEffect } from "react";
import projects from "../src/data/wwwProjects.json";
import StarRating from "./StarRating";
import TechnologiesData from "../src/data/technologies.json";
import codeLanguageToNumber from "../src/codeLanguageToNumber";
import { ColorContext } from "./VisitCardPage";



function Technologies({ number = codeLanguageToNumber(), mode }) {
    const [direction, setDirection] = useState("ascending");
    const [sortCriteria, setSortCriteria] = useState("entry");
    const { colors } = useContext(ColorContext);


    useEffect(() => {
        setSortCriteria(TechnologiesData[number].SortBy[0]), setDirection(TechnologiesData[number].SortOrder[0]),
            document.querySelector('#sortOrder1').checked = "true",
            document.querySelector('#' + TechnologiesData[number].SortBy[0]).checked = "true"
    }, [number]);

    function handleThemes(mode, colors, i) {
        switch (mode) {
            case "regular":
                const regularStyle = `${colors[i]}`;
                return regularStyle;

            case "contrast":
                const contrastStyle = "#393939";
                return contrastStyle;
                break;
            case "dark":
                const darkStyle = "#393939";
                return darkStyle;
                break;
                break;
            default:
                `${colors[i]}`;
                break;
        }
    }
    const stylesThink = {
        backgroundColor: handleThemes(mode, colors, 1),
        opacity: "82%",
    };

    function markSort({ n }) {
        setSortCriteria(n);
    }
    function markDirection(n = { n }) {
        setDirection(n);
    }
    function createEntryTable() {
        const entryArr = [...TechnologiesData[0].technologies];
        return entryArr;
    }
    function createNameTable() {
        const nameArr = [...TechnologiesData[0].technologies];
        nameArr.map((n, i) =>
            n.map((m, i) => {
                m;
            })
        );
        return nameArr.sort();
    }
    function createKnowledgeTable() {
        const knowledgeArr = [...TechnologiesData[0].technologies];
        knowledgeArr.map((n, i) =>
            n.map((m, i) => {
                i % 3 == 1 ? n.unshift(m) : null;
            })
        );
        knowledgeArr.sort();
        knowledgeArr.map((n, i) =>
            n.map((m, i) => {
                i % 3 == 0 ? n.shift(m) : null;
            })
        );
        return knowledgeArr;
    }
    function createExpTable() {
        const expirienceArr = [...TechnologiesData[0].technologies];
        expirienceArr.map((n, i) =>
            n.map((m, i) => {
                i % 3 == 2 ? n.unshift(m) : null;
            })
        );
        expirienceArr.sort();
        expirienceArr.map((n, i) =>
            n.map((m, i) => {
                i % 3 == 0 ? n.shift(m) : null;
            })
        );
        return expirienceArr;
    }
    function TechBlock({ data = TechnologiesData[0].technologies }) {
        return (
            <>
                {data.map((n, i) => (
                    <div className="singleTechnology" key={i+8000}>
                        {data[i].map((n, i) =>
                            i % 3 == 0 ? (
                                <div className="singleTechnologyName" name={n} key={i+9000}>
                                    <h2>
                                        <b>{n}</b>
                                    </h2>
                                </div>
                            ) : (
                                <div key={i+10000} className="ratings">
                                    {i % 3 == 1 ? (
                                        <div key={i+11000} score={n}>
                                            <StarRating
                                                totalStars={5}
                                                s={parseInt(n)}
                                                subjectOfRating="capability"
                                            />
                                        </div>
                                    ) : (
                                        <div key={i+7000} score={n}>
                                            <StarRating
                                                totalStars={projects.length}
                                                s={parseInt(n)}
                                                subjectOfRating="projects"
                                            />
                                        </div>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                ))}
            </>
        );
    }

    function DisplayOrderedTech({
        direction,
        sortCriteria,
        number = codeLanguageToNumber(),
    }) {


        switch (sortCriteria) {
            case TechnologiesData[number].SortBy[0]:
                return direction == TechnologiesData[number].SortOrder[0] ? (
                    <TechBlock data={createEntryTable()} />
                ) : direction == TechnologiesData[number].SortOrder[1] ? (
                    <TechBlock data={createEntryTable().reverse()} />
                ) : null;
                break;
            case TechnologiesData[number].SortBy[1]:
                return direction == TechnologiesData[number].SortOrder[0] ? (
                    <TechBlock data={createNameTable()} />
                ) : (
                    <TechBlock data={createNameTable().reverse()} />
                );
                break;
            case TechnologiesData[number].SortBy[2]:
                return direction == TechnologiesData[number].SortOrder[0] ? (
                    <TechBlock data={createKnowledgeTable()} />
                ) : (
                    <TechBlock data={createKnowledgeTable().reverse()} />
                );

                break;
            case TechnologiesData[number].SortBy[3]:
                return direction == TechnologiesData[number].SortOrder[0] ? (
                    <TechBlock data={createExpTable()} />
                ) : (
                    <TechBlock data={createExpTable().reverse()} />
                );

                break;

            default:
                break;
        }
    }

    return (
        <div className="technologyContainer" style={{ diplay: "flex" }}>
            <div className="sortingFilrtersTechnology">
                <form name="firstRadio" className="firstRadio">
                    <h3>{TechnologiesData[number].labels[0]}</h3>
                    <div>
                        <label htmlFor="sortOrder1">
                            {" "}
                            {TechnologiesData[number].SortOrder[0]}
                        </label>
                        <input

                            onClick={() =>
                                markDirection(TechnologiesData[number].SortOrder[0])
                            }
                            type="radio"
                            id="sortOrder1"
                            name="sortOrder"
                            defaultChecked="true"
                        />
                    </div>
                    <div>
                        <label htmlFor="sortOrder2">
                            {" "}
                            {TechnologiesData[number].SortOrder[1]}
                        </label>
                        <input
                            onClick={() =>
                                markDirection(TechnologiesData[number].SortOrder[1])
                            }
                            type="radio"
                            id="sortOrder2"
                            name="sortOrder"
                        ></input>
                    </div>
                </form>
                <br></br>

                <form className="sortingFilrtersTechnology">
                    <h3>{TechnologiesData[number].labels[1]}</h3>
                    <div className="secRadio">
                        {TechnologiesData[number].SortBy.map((n, i) => (
                            <div key={i+6000}>
                                <label htmlFor={n}> {n}</label>
                                <input
                                    onClick={(e) => markSort({ n }, e)}
                                    type="radio"
                                    name="secRadio"
                                    id={n}
                                    defaultChecked={i == 0 ? "true" : null}
                                />
                            </div>
                        ))}
                    </div>
                </form>
            </div>

            <div style={stylesThink} className="technologyDisplay">
                <DisplayOrderedTech direction={direction} sortCriteria={sortCriteria} />
            </div>
        </div>
    );
}
export default Technologies;
