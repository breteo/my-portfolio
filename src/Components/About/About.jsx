import "./About.css";
import Card from "../Card/Card.jsx";
import Icon from "@mdi/react";
import { mdiFileAccount } from "@mdi/js";

export default function About() {
  return (
    <section className="mx-auto flex flex-col justify-center items-center gap-5 bg-gray-200 ">
      <h1 className="text-3xl font-bold py-9">About</h1>
      <div id="description" className="flex flex-col text-center gap-5 mx-32">
        <p>{"Good afternoon! ☕ It's nice to meet you."}</p>
        <p>
          Contributor and team player. Visionary, explorer, and achiever. I
          thrive on teaming up with designers and engineers to infuse software
          with beauty and clarity. My objectives revolve around refining my
          skills and delivering top-notch work to craft delightful, purposeful
          experiences.
        </p>
        <div className="flex justify-center items-center">
          <a className="flex  gap-2" href="">
            <Icon path={mdiFileAccount} size={1} />
            <h2 className="font-bold">Resume</h2>
          </a>
        </div>
      </div>
      <div className="container text-center">
        <p className="font-bold pt-11 pb-28">
          Highly proficient in Agile freelance developing using these
          technlogies
        </p>
        <div className="flex flex-wrap flex-row justify-evenly max-h-72 gap-x-32 p-11 mx-11">
          <Card icon="src\assets\AboutIcons\mongodb.svg" title="MongoDB" />
          <Card icon="src\assets\AboutIcons\expressjs.svg" title="ExpressJS" />
          <Card icon="src\assets\AboutIcons\react.svg" title="React" />
          <Card icon="src\assets\AboutIcons\nodejs.svg" title="NodeJS" />
        </div>
        <p className="font-bold pt-11 pb-28">
          Proven quality and test-driven development with these frameworks
        </p>
        <div className="flex flex-wrap flex-row justify-evenly max-h-72 gap-x-32 gap-y-16 p-11 mx-11 overflow-auto">
          <Card icon="src\assets\AboutIcons\jest.svg" title="Jest" />
          <Card icon="src\assets\AboutIcons\cypress.svg" title="Cypress" />
          <Card icon="src\assets\AboutIcons\selenium.svg" title="Selenium" />
        </div>
      </div>
    </section>
  );
}
