export default function ProjectCard({ info, title, link, pic }: { info: string, title: string, link: string, pic: string }) {
  return (
    <div className="max-w-xs w-full  rounded-[8px] flex flex-row flex-wrap">
      <div className="flex flex-col justify-center items-center text-center gap-[44px] overflow-auto">
        <img
          src={pic}
          alt={title}
          className="hover:animate-pulse"
        />
        <h2 className="md:text-[30px]/[36px]">{title}</h2>
        <p className="text-[12px]/[16px] sm:text-s md:text-[20px]/[28px]">{info}</p>
        <a href={link} target="_blank" className="rounded-[6px] p-[8px] bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 text-[14px]/[20px]  md:text-[16px]/[24px]"> Check out the Project 💻 </a>
      </div>
    </div>
  );
}