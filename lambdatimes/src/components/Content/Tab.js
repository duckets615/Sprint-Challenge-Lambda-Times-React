import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
      const match = props.tab === props.selectedTab;
  return (
    <div
      className={`tab ${match} && 'active-Tab'}`}
      onClick={() => props.selectTabHandler(props.tab)}      
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
}// Make sure you include PropTypes on your props.

export default Tab;
