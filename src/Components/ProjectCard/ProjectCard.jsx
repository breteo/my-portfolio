export default function ProjectCard({ info, handleInfo, title }) {
  return (
    <div className="max-w-xs w-full p-4  rounded-lg flex flex-row flex-wrap">
      <button className="flex flex-col justify-center items-center gap-11 px-11 h-96 overflow-auto">
        <img
          src="src\assets\ProjectImages\PayPerRead.png"
          alt=""
          className="hover:animate-pulse"
          onMouseOver={() => {
            handleInfo(info);
          }}
        />
        <h2>Pay Per Read</h2>
      </button>
    </div>
  );
}
