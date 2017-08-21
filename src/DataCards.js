import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataCards extends Component {
 constructor(props) {
  super(props)

  this.state = {
    display: this.props.display,
  }
}

  render() {
    const {location, yearData, compareDistricts} = this.props
    let schoolYear= Object.keys(yearData)
    let highScores = {
      fontWeight: 'bold',
      color: '#00A896'
    }
    let lowScores = {
      color: '#8D3B72'
    }
    let percentages = schoolYear.map( (val, i) => {
      if(this.state.display) {
        if (yearData[val] >= 0.5) {
          return <p style={ highScores } key={ i } > { val }: { yearData[val] } </p>
        } else {
          return <p style={ lowScores } key={ i } > { val }: { yearData[val] } </p>
        }
      }
    })

  return(
      <div className='data-card' onClick={ () => compareDistricts(location) } >
        <div className='district-name'>
          <h2>{ location }</h2>
        </div>
        <div className='year-stats' >
          { percentages }
        </div>
      </div>
    )
  }
}

DataCards.propTypes = {
  location: PropTypes.string,
  yearData: PropTypes.object.isRequired,
  compareDistricts: PropTypes.func
}
