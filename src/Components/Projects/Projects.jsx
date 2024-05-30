import "./Projects.css";
import projectData from "./project_details.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import Slideshow from "../Slideshow/Slideshow";

export default function Projects() {
  const ProjectCardOne = () => (
    <div>
      <ProjectCard
        title={projectData.detailOne.title}
        info={projectData.detailOne.info}
        link={projectData.detailOne.link}
        pic="src\assets\ProjectImages\robot.jpg"
      />
    </div>
  );
  const ProjectCardTwo = () => (
    <div>
      <ProjectCard
        title={projectData.detailTwo.title}
        info={projectData.detailTwo.info}
        link={projectData.detailTwo.link}
        pic="src\assets\ProjectImages\PayPerRead.png"
      />
    </div>
  );
  const ProjectCardThree = () => (
    <div>
      <ProjectCard
        title={projectData.detailThree.title}
        info={projectData.detailThree.info}
        link={projectData.detailThree.link}
        pic="src\assets\ProjectImages\slugstore.jpg"
      />
    </div>
  );
  const ProjectCardFour = () => (
    <div>
      <ProjectCard
        title={projectData.detailFour.title}
        info={projectData.detailFour.info}
        link={projectData.detailFour.link}
        pic="src\assets\ProjectImages\dashboard.png"
      />
    </div>
  );

  const projectList = [
    ProjectCardOne,
    ProjectCardTwo,
    ProjectCardThree,
    ProjectCardFour,
  ];

  return (
    <section className="container mx-auto h-full">
      <h1 className="text-center font-bold text-3xl p-11"> Projects</h1>
      <Slideshow ProjectList={projectList} />
    </section>
  );
}
