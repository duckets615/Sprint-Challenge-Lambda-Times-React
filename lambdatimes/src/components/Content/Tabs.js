import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => <tAB />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
