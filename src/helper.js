export default class DistrictRepository {
  constructor(rawData){
    this.data = this.newData(rawData)
  }

  newData(data) {
    return data.reduce((acc, elem) => {
      if(!acc[elem.Location]) {
        acc[elem.Location] = {location: elem.Location.toUpperCase(), data: {}}
      }
        acc[elem.Location].data[elem.TimeFrame] = Math.round(1000 * elem.Data) / 1000 || 0;

      return acc
    }, {})
  }

  findByName(name) {
    if (name) {
      let keys = Object.keys(this.data);
      let found = keys.find(location => location.toUpperCase() === name.toUpperCase())
      return this.data[found]
    }
  }

  findAllMatches(districtName) {
    let keys = Object.keys(this.data)
    let matches = keys.map(location => this.data[location])

    if (districtName) {
      return matches.filter(locationName => locationName.location.includes(districtName.toUpperCase()))
    }
    return matches;
  }

}
