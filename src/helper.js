class DistrictRepository {
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
      return matches.filter(locationName => locationName.location.includes(districtName.toUpperCase())) //startsWith()
    }
    return matches;
  }

  findAverage(districtName) {
    const info = this.findByName(districtName).data
    const keys = Object.keys(info)
    const newData = keys.reduce((acc, elem) => {

    return  acc += info[elem] / keys.length

    }, 0)

    return Math.round(1000 * newData) / 1000
  }

  compareDistrictAverages(districtOne, districtTwo) {
    const avgOne = this.findAverage(districtOne)
    const avgTwo = this.findAverage(districtTwo)
    const compare = avgOne / avgTwo
    const result = {}
    result[districtOne.toUpperCase()] = avgOne
    result[districtTwo.toUpperCase()] = avgTwo
    result['compared'] = Math.round(1000 * compare) / 1000
    return result
  }

}

export default DistrictRepository;
