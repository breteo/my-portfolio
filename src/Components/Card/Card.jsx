import "./Card.css";
import PropTypes from "prop-types";

function Card({ icon, title }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center animate-pulse">
        <img src={icon} alt="title" className="object-fill"/>
        <p>{title}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
