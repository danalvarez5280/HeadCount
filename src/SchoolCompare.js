import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import DataCards from './DataCards';

const district = new DistrictRepository(kinderData)

export default class SchoolCompare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      compare: this.props.comparison
    }

    this.showComparisonData = this.showComparisonData.bind(this);
  }

  showComparisonData() {
     const compareResult = district.compareDistrictAverages((this.props.comparison[0]).location, (this.props.comparison[1]).location)
     this.setState({
       compare: {...this.state.compare, compareResult}
     })
  }

  render() {
    // console.log("new", this.state.compare);
  const compKeys = Object.keys(this.state.compare)
  // console.log(compKeys);
  const compKeyValues = compKeys.map((value) => this.state.compare[value])
  // console.log(compKeyValues);

  const newData = Object.keys(compKeyValues)
  const compResult = newData.map(value => compKeyValues[value]);
  let newThing = compResult
  let breakdown = Object.keys(newThing[2])
  console.log(breakdown);


  const comparisonResults = this.props.comparison.map((district, i) => <DataCards key={i} location={district.location} yearData={district.data}/>)

  const districtChoice1 = this.state.compare[0]
  const districtChoice2 = this.state.compare[1]

  // const yearKeys1 = Object.keys(districtChoice1.data)
  // const stats1 = yearKeys1.map((year, i) => <p key={i}>{year}: {districtChoice1.data[year]}</p>)
  // const yearKeys2 = Object.keys(districtChoice2.data)
  // const stats2 = yearKeys2.map((year, i) => <p key={i}>{year}: {districtChoice2.data[year]}</p>)

    return(
      <div>
        <container className='comparison-container'>
            {comparisonResults}
        </container>
        <div className='compare-results'>
          <h3>{districtChoice1.location}</h3>
          <div>{}</div>
        </div>
        <button onClick={this.showComparisonData}>Compare</button>
        <div className='compare-results'>
          <h3>{districtChoice2.location}</h3>
          <div>{}</div>
        </div>
      </div>
    )
  }
}
