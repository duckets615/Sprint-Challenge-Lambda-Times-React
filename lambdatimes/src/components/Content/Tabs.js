import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => <Tab tab={tab} key={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />)}
         {/* tab created for each tab in array */}
        {/* // key = tab == tab will be data changing in  DOM */}
        {/* //tab={tab} refer to proptype {tab} = l10s25 */}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Tabs;
