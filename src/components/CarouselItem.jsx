// import Libraries
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite } from "../actions";

// import Styles and Images
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";

// import Components

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleSetFavorite}
          />
        </div>
        <p className="carousel-item__details--title"> {title} </p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} `}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
};

CarouselItem.PropTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
