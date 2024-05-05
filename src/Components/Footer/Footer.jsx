import "./Footer.css";

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
        <a className="absolute bottom-0 right-0 w-11 animate-fadeIn" onClick={scrollToTop} href="">
          Top
        </a>
      </div>
      <footer>
        <div className="container mx-auto flex justify-center">
          <p className="text-xs">
            Crafted by Brendan Teo 2024 © || Powered by ReactJS, TailwindCSS,
            Vercel
          </p>
        </div>
      </footer>
    </>
  );
}
