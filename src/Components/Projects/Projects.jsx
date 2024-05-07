import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useState } from "react";

const detailOne = `
I created a robot that registers any plant or human mouth and begins to shoot water at it! 
In a crowded office setting, people seem to be uninterested in watering indoor plants and sometimes even themselves. 
My goal was to provide a robot to fix that issue and reinforce a healthy lifestyle.
`;
const detailTwo = `
I was curious about how writers and bloggers were getting paid and found out 
they weren't getting paid as much through online articles. 
So I built a software service that allows users to pay for the article and a 
large percentage of the money goes straight to the creator. 
In that project, I focused on building up the frontend service of the 
platform using Javascript and CSS libraries. 
Before each feature was submitted, I was in charge of functional, performance,
 and cross-browser compatibility testing before they made it to the final release.
`;

export default function Projects() {
  const [info, setInfo] = useState("");

  const handleHover = (paragraph) => {
    setInfo(paragraph);
  };

  return (
    <section className="container mx-auto h-screen max-h-screen text-center">
      <h1 className="font-bold text-3xl p-11"> Projects</h1>
      <div className="flex flex-row justify-center items-center gap-7 overflow-auto">
        <ProjectCard
          info={detailOne}
          handleInfo={handleHover}
          title={"Dihydrogen Monoxide Saving Robot"}
        />
        <ProjectCard
          info={detailTwo}
          handleInfo={handleHover}
          title={"Pay Per Read"}
        />
        <ProjectCard
          info={detailOne}
          handleInfo={handleHover}
          title={"Dihydrogen Monoxide Saving Robot"}
        />
        <ProjectCard
          info={detailOne}
          handleInfo={handleHover}
          title={"Dihydrogen Monoxide Saving Robot"}
        />
      </div>
      <div>
        <p className="">{info}</p>
      </div>
    </section>
  );
}
