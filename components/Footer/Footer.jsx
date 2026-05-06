import Icon from "@mdi/react";
import { mdiArrowUpCircleOutline } from "@mdi/js";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <>
      <div className="relative">
        <button
          className="absolute bottom-0 right-0 w-16 animate-fadeIn"
          onClick={scrollToTop}
          href=""
        >
          <Icon path={mdiArrowUpCircleOutline} size={2} />
        </button>
      </div>
      <footer>
        <div className="w-full mx-auto flex justify-center bg-gray-200">
          <p className="text-[10px] sm:text-xs">
            Crafted by Brendan Teo 2024 © || Powered by ReactJS, TailwindCSS,
            Vercel
          </p>
        </div>
      </footer>
    </>
  );
}
