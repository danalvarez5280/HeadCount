// import kinderData from '../data/kindergartners_in_full_day_program';

// export default class DistrictRepository {
//   constructor(kinderData) {
//     this.data = kinderData.reduce((acc, elem) => {
//       if(!acc[elem.Location]) {
//         acc[elem.Location] = []
//       }
//       acc[elem.Location].push(elem)
//       
//       return acc
//     }, {})
//   }
// }

export default class DistrictRepository {
  constructor(rawData){
    this.data = this.newData(rawData)
  }
  
  newData(data) {
    return data.reduce((acc, elem) => {
      if(!acc[elem.Location]) {
        acc[elem.Location] = []
        }
      acc[elem.Location].push(elem)
          
      return acc
    }, {})
    
  }
}
