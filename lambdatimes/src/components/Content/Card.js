import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  // variable to cut down on typing props every 5 sec;
  const {
    headline,
    author,
    img
  } = props.card;

  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} />
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

Card.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
  })).isRequired
}

export default Card;
