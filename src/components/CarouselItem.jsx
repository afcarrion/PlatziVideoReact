/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';
import "../assets/styles/components/carouselItem.scss";
import playIcon from "../assets/images/ico-play.png";
import plusIcon from "../assets/images/ico-add.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
    </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

export default CarouselItem;
