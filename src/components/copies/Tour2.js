import { useState } from "react";
import "./Tour.scss";

const Tour = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  const { img, id, city, name, info } = props.tour;

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="cities" />
        <span
          className="close-btn"
          onClick={() => {
            props.removeTour(id);
          }}
        >
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={toggleInfo}>
            <i className="fas fa-caret-square-down" />
          </span>
          {showInfo && <p>{info}</p>}
        </h5>
      </div>
    </article>
  );
};

export default Tour;
