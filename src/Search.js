import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();


  }

  render() {
    return(
      <div>
        <input placeholder='Search'/>
        <button type='Submit'> Submit </button>
      </div>
    )
  }
}
