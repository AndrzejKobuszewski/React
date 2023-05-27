import React from "react";
import { useContext } from "react";
import { ColorContext } from "./VisitCardPage";
import WwwProject from "./WwwProject";
import codeLanguageToNumber from "./codeLanguageToNumber";
import project from "../src/data/wwwProjects.json";
import Gitrepos from "./GitRepos";
import Fetch from "./fetch";
import data from "./data/wwwProjectsGitRepos.json";

import { useEffect } from "react";

function WwwProjects({ number = codeLanguageToNumber(), mode }) {
  const { colors } = useContext(ColorContext);

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

  const stylesSpeakSumUp = {
    backgroundColor: handleThemes(mode, colors, 2),
    opacity: "82%",
    borderRadius: "5px",
    marginBottom: "-0.6rem",
  };

  const FetchedIntro = useEffect(() => {
    function Loaddata() {
      fetch(
        "https://raw.githubusercontent.com/AndrzejKobuszewski/AndrzejKobuszewski/master/README.md"
      )
        .then(
          (document.querySelector(".readMe").innerHTML =
            "Loading file from Github.com...")
        )
        .then((response) => response.text())
        .then((data) => {
          let txt = data.replaceAll("**", "");
          data = txt.replace(":flight_departure:", "");
          txt = data.replace(":motorway:", "");
          data = txt.replace(":left_speech_bubble:", "");
          txt = data.replace(":moneybag:", "");
          document.querySelector(".readMe").innerHTML = txt
            .split(" - ")
            .join("\n");
        })
        .catch((error) => console.error(error));
    }
    Loaddata();
  }, [number]);

  return (
    <div className="projectContainer" >
      <div
        className="speak"
        
      >
        <textarea
          rows="18"
          cols="30"
          value={JSON.stringify(FetchedIntro)}
          name="gitReadMe"
          style={stylesSpeakSumUp}
          className="readMe"
        >
          {/* */}
        </textarea>
        <br></br>
        <label style={{ fontSize: "11px" }} htmlFor="gitReadMe">
          *) my profile fetched from github
        </label>
      </div>
      <article className="" style={{ borderRadius: "5px" }}>
        <div
          className="projectdesc"
          
        >
          <h3 style={{ borderRadius: "5px", marginLeft: "15px" }}>
            <b>{project[0].wwwProjectsIntro[number]}</b>
          </h3>
          <WwwProject />
          <br></br>
          <h2 style={{ borderRadius: "5px", marginLeft: "15px" }}>
            <b>{data[codeLanguageToNumber()].intro}</b>
          </h2>
          <Gitrepos style={{ borderRadius: "5px", marginLeft: "15px" }} />
        </div>
      </article>
    </div>
  );
}

export default WwwProjects;
