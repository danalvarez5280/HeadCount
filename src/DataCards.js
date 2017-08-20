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
    const {location, yearData, compareDistricts, display} = this.props
    let schoolYear= Object.keys(yearData)
    let highScores = {
      color: 'aquamarine'
    }
    let lowScores = {
      color: 'red'
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
  compareDistricts: PropTypes.func
}
