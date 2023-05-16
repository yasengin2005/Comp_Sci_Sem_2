import { useState } from "react";
import "./Tour.scss";

const Tour  = (props) => {
  const [showInfo, setShowInfo] = useState(false)

  const handleInfo = () => {
    setShowInfo(!showInfo);
  };

    const { id, img, city, name, info } = props.tour;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
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
            <span onClick={handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }


export default Tour;