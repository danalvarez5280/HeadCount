import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataCards extends Component {
//  constructor() {
//   super()
//     this.state = {
//       style: 'hide-year-stats',
//     }
//   this.hideYearStats = this.hideYearStats.bind(this)
// }

// hideYearStats(e) {
//   this.state.style ? this.state.style = 'year-stats' : this.state.style = 'hideYearStats';
// }


  render() {
  const {location, yearData, compareDistricts} = this.props
  let schoolYear= Object.keys(yearData)
  let highScores = {
    color: 'aquamarine'
  }
  let lowScores = {
    color: 'red'
  }
  let percentages = schoolYear.map( (val, i) => {
      if (yearData[val] >= 0.5) {
        return <p style={ highScores } key={ i } > { val }: { yearData[val] } </p>
      } else {
        return <p style={ lowScores } key={ i } > { val }: { yearData[val] } </p>
      }
  })

  return(
      <div className='data-card' onClick={ () => compareDistricts(location) } >
        <div className='district-name' onClick={this.hideYearStats}>
          <h2>{ location }</h2>
        </div>
        <div ref={ (element => this.div = element) } className='year-stats' >
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
