import "./About.css";
import Card from "../Card/Card.jsx";
import Icon from "@mdi/react";
import { mdiFileAccount } from "@mdi/js";
import mongoIcon from "../../assets/AboutIcons/mongodb.svg";
import expressIcon from "../../assets/AboutIcons/expressjs.svg";
import reactIcon from "../../assets/AboutIcons/react.svg";
import nodeIcon from "../../assets/AboutIcons/nodejs.svg";
import jestIcon from "../../assets/AboutIcons/jest.svg";
import cypressIcon from "../../assets/AboutIcons/cypress.svg";
import seleniumIcon from "../../assets/AboutIcons/selenium.svg";

export default function About() {
  return (
    <section className="mx-auto h-screen max-h-screen flex flex-col justify-center items-center gap-5 bg-gray-200 scroll-m-7">
      <h1 className="font-bold text-3xl py-3 md:py-9">About</h1>
      <div
        id="description"
        className="container flex flex-col text-center gap-5 mx-16 md:mx-32 text-xs sm:text-s md:text-xl"
      >
        <p>{"Good afternoon! ☕ It's nice to meet you."}</p>
        <p className="md:mx-72 md:leading-8">
          Contributor and team player. Visionary, explorer, and achiever. I
          thrive on teaming up with designers and engineers to infuse software
          with beauty and clarity. My objectives revolve around refining my
          skills and delivering top-notch work to craft delightful and
          purposeful experiences to my clients.
        </p>
        <div className="flex justify-center items-center pt-5">
          <a
            className="flex gap-2"
            href="src\assets\Brendan_Teo (1).pdf"
            download="Brendan_Teo (1).pdf"
          >
            <Icon path={mdiFileAccount} size={1} />
            <h2 className="font-bold">Resume</h2>
          </a>
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center">
        <p className="text-center font-bold pt-11 pb-2 mx-5 text-xs sm:text-s md:text-xl">
          Highly proficient in Agile freelance developing using these
          technlogies
        </p>
        <div className="flex md:flex-wrap flex-row justify-center gap-x-7 p-4 mx-11 md:gap-x-32 md:gap-y-16 md:p-11 md:mx-11 text-xs sm:text-xl">
          <Card icon={mongoIcon} title="MongoDB" />
          <Card icon={expressIcon} title="ExpressJS" />
          <Card icon={reactIcon} title="React" />
          <Card icon={nodeIcon} title="NodeJS" />
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center">
        <p className="text-center font-bold mx-5 pb-2 md:pt-11 text-xs sm:text-s md:text-xl">
          Proven quality and test-driven development with these frameworks
        </p>
        <div className="flex md:flex-wrap flex-row justify-center gap-x-9 p-4 mx-11 md:gap-x-32 md:gap-y-16 md:p-11 md:mx-11 text-xs sm:text-xl">
          <Card icon={jestIcon} title="Jest" />
          <Card icon={cypressIcon} title="Cypress" />
          <Card icon={seleniumIcon} title="Selenium" />
        </div>
      </div>
    </section>
  );
}
