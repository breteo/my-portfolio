import projectData from "./project_details.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import Slideshow from "../Slideshow/Slideshow";
import robotPic from "../../assets/ProjectImages/robot.jpg";
import pprPic from "../../assets/ProjectImages/ppr.png";
import slugPic from "../../assets/ProjectImages/slugstore.jpg";
import dashboardPic from "../../assets/ProjectImages/dashboard.png";

export default function Projects() {
  const ProjectCardOne = () => (
    <div>
      <ProjectCard
        title={projectData.detailOne.title}
        info={projectData.detailOne.info}
        link={projectData.detailOne.link}
        pic={robotPic}
      />
    </div>
  );
  const ProjectCardTwo = () => (
    <div>
      <ProjectCard
        title={projectData.detailTwo.title}
        info={projectData.detailTwo.info}
        link={projectData.detailTwo.link}
        pic={pprPic}
      />
    </div>
  );
  const ProjectCardThree = () => (
    <div>
      <ProjectCard
        title={projectData.detailThree.title}
        info={projectData.detailThree.info}
        link={projectData.detailThree.link}
        pic={slugPic}
      />
    </div>
  );
  const ProjectCardFour = () => (
    <div>
      <ProjectCard
        title={projectData.detailFour.title}
        info={projectData.detailFour.info}
        link={projectData.detailFour.link}
        pic={dashboardPic}
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
