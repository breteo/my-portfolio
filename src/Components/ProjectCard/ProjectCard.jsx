import PropTypes from "prop-types";

export default function ProjectCard({ info, title, link, pic }) {
  return (
    <div className="max-w-xs w-full  rounded-lg flex flex-row flex-wrap">
      <div className="flex flex-col justify-center items-center text-center gap-11 overflow-auto">
        <img
          src={pic}
          alt={title}
          className="hover:animate-pulse"
        />
        <h2 className="md:text-3xl">{title}</h2>
        <p className="text-xs sm:text-s md:text-xl">{info}</p>
        <a href={link} target="_blank" className="rounded-md p-2 bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 text-sm  md:text-base"> Check out the Project 💻 </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  info: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  pic: PropTypes.string,
};
