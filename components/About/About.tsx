import Card from "@/components/Card/Card";
import Icon from "@mdi/react";
import { mdiFileAccount } from "@mdi/js";

const mongoIcon = "/AboutIcons/mongodb.svg";
const expressIcon = "/AboutIcons/expressjs.svg";
const reactIcon = "/AboutIcons/react.svg";
const nodeIcon = "/AboutIcons/nodejs.svg";
const jestIcon = "/AboutIcons/jest.svg";
const cypressIcon = "/AboutIcons/cypress.svg";
const seleniumIcon = "/AboutIcons/selenium.svg";

export default function About() {
  return (
    <section className="mx-auto h-screen max-h-screen flex flex-col justify-center items-center gap-[20px] bg-gray-200 scroll-m-[28px]">
      <h1 className="font-bold text-[30px]/[36px] py-[12px] md:py-[36px]">About</h1>
      <div
        id="description"
        className="container flex flex-col text-center gap-[20px] mx-[64px] md:mx-[128px] text-[12px]/[16px] sm:text-s md:text-[20px]/[28px]"
      >
        <p>{"Good afternoon! ☕ It's nice to meet you."}</p>
        <p className="md:mx-[288px] md:leading-8">
          Contributor and team player. Visionary, explorer, and achiever. I
          thrive on teaming up with designers and engineers to infuse software
          with beauty and clarity. My objectives revolve around refining my
          skills and delivering top-notch work to craft delightful and
          purposeful experiences to my clients.
        </p>
        <div className="flex justify-center items-center pt-[20px]">
          <a
            className="flex gap-[8px]"
            href="/Brendan_Teo.pdf"
            download="Brendan_Teo.pdf"
          >
            <Icon path={mdiFileAccount} size={1} />
            <h2 className="font-bold">Resume</h2>
          </a>
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center">
        <p className="text-center font-bold pt-[44px] pb-[8px] mx-[20px] text-[12px]/[16px] sm:text-s md:text-[20px]/[28px]">
          Highly proficient in Agile freelance developing using these
          technlogies
        </p>
        <div className="flex md:flex-wrap flex-row justify-center gap-x-[28px] p-[16px] mx-[44px] md:gap-x-[128px] md:gap-y-[64px] md:p-[44px] md:mx-[44px] text-[12px]/[16px] sm:text-[20px]/[28px]">
          <Card icon={mongoIcon} title="MongoDB" />
          <Card icon={expressIcon} title="ExpressJS" />
          <Card icon={reactIcon} title="React" />
          <Card icon={nodeIcon} title="NodeJS" />
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center">
        <p className="text-center font-bold mx-[20px] pb-[8px] md:pt-[44px] text-[12px]/[16px] sm:text-s md:text-[20px]/[28px]">
          Proven quality and test-driven development with these frameworks
        </p>
        <div className="flex md:flex-wrap flex-row justify-center gap-x-[36px] p-[16px] mx-[44px] md:gap-x-[128px] md:gap-y-[64px] md:p-[44px] md:mx-[44px] text-[12px]/[16px] sm:text-[20px]/[28px]">
          <Card icon={jestIcon} title="Jest" />
          <Card icon={cypressIcon} title="Cypress" />
          <Card icon={seleniumIcon} title="Selenium" />
        </div>
      </div>
    </section>
  );
}
