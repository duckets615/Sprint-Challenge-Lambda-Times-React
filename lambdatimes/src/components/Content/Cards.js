import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card key={card.headline} card={card} />)}
    </div>
  )
}
// structure for how each card is to be rendered;
Cards.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({ //obj takes a specific shape
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
  })).isRequired
}
// Make sure you include prop types for all of your incoming props

export default Cards;
