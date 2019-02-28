import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data'; // brackets for name exports;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { // state setup
      selected: 'all',
      tabs: [],
      cards: []
    };
  }
// Once component mounts, take data from cards and set the state with componentDidMount

  componentDidMount() {  //setting var names to match state properties lets us use CONSCISE PROPERTIES
    const tabs = tabData;
    const cards = cardData;

    this.setState({
      tabs, // conscise properties eliminates need for tabs: tabs, code looks cleaner
      cards,
    })
    // Once the component has mounted, get the data and reflect that data on the state.
  }

  changeSelected = tab => {
    this.setState({selected: tab})
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted

      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows:
        - if the selected tab is 'all' it should return all
          of the items from cardData.
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    if(this.state.selected === 'all') return this.state.cards;
    const cards =[...this.state.cards];
    return cards.filter(card => card.tab === this.state.selected);
  };

  render() {
    return (
      <div className="content-container">
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs selectedTab={this.state.selected} // pass select state to here;
        selectTabHandler={this.changeSelected}
        tabs={this.state.tabs} /> {/* pass tab state to here;*/}
        <Cards cards={this.filterCards()} /> {/* pass card state to here; run thru filterCards method;*/}
      </div>
    );
  }
}
