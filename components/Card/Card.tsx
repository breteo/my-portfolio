export default function Card({ icon, title }: { icon: string, title: string }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center animate-pulse duration-75">
        <img src={icon} alt="title" className="object-fill"/>
        <p>{title}</p>
      </div>
    </>
  );
}
