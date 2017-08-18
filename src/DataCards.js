import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataCards extends Component {
    constructor(props) {
      super(props)

    this.state = {
      yearData: this.props.displayData,
      locale: this.props.location
    }
  this.hideYearStats = this.hideYearStats.bind(this)
};

hideYearStats() {
  this.state.yearData ? this.state.yearData = false : this.state.yearData = true;
  this.setState({
    yearData: this.state.yearData
  })
  // this.props.compare(this.state.locale)
}


  render() {
  const {location, yearData, compare} = this.props
  let schoolYear= Object.keys(yearData)
  let highScores = {
    color: 'aquamarine'
  }
  let lowScores = {
    color: 'red'
  }

  let percentages = schoolYear.map( (val, i) => {
    if(!this.state.yearData) {
      if (yearData[val] >= 0.5) {
        return <p style={highScores} key={ i } > { val }: { yearData[val] } </p>
      } else {
        return <p style={lowScores} key={ i } > { val }: { yearData[val] } </p>
      }
    }
  })

  return(
      <div className='data-card' onClick={ () => compare(location)}>
        <div className='district-name' onClick={ this.hideYearStats }>
          <h2>{ location }</h2>
        </div>
        <div ref={(element => this.div = element)} className='year-stats' >
          { percentages }
        </div>
      </div>
    )
  }
}

DataCards.propTypes = {
  location: PropTypes.string.isRequired,
  yearData: PropTypes.object.isRequired,
}
