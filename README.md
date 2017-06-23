# HeadCount 2.0

  HeadCount 2.0 is designed to practice breaking out logic and creating small reusable React Components. The project starts by bringing in a data set of school participation stats by year per district. The goal is to create a React application that can display this data in a meaningful way. In the spirit of TDD we have created some unit tests for you to start off with. These tests will help you break out logic to a helper DistrictRepository Class. After you finish `iteration 1` you'll move on to testing and creating a react application. This application used `create-react-app`.

  Project Goals:
    * Learning to separate logic, which organizes and improves testing.
    * Breaking out into small modular components and passing props.
    * Learning to use PropTypes.
    * Unit and Integration testing for each component.

## Data Access Layer

 The project is broken out into iterations starting with `iteration 0`! That being said you may change tests to fit your needs. The tests given are only a suggested way of building this project out. If you decide to change the design of these tests just know that we expect those changes to be tested fully. This includes any helper functions you create. Good luck!  

#### Iteration 0 - Initial data
  Create an constructor/class that takes in data to store and format. Tests have been written to help guide you in this process. You should pass each iteration's relative tests before moving forward. For iteration 0, you will pass all tests in the `iteration-0.test.js`
  Things to keep in mind / consider:
  * The data coming in has capitalized methods, ex: Location. As a co-developer I have made a decision that all methods will be using camelCase. So the tests I have written for you will reflect that.
  * Whats the easiest way to format this data? What decisions will you make that will affect you later on. The tests written ask for an object to be returned. Keep in mind that an array is just an object. SO you have the choice on how to format it. What will be easier to manage?

The `DistrictRepository` is responsible for holding our district data. It offers the following methods:

* `data` which is created during the initial creation of the DistrictRepository.

```javascript
  const district = new DistrictRepository(data);
  district.data #=> // an object/array depending on how you want to sort your data.
```
#### Iteration 1 - Finding Data
Here we will solve the problem of finding a single or multiple data points.
You will be working on passing the tests for `iteration-1-part 1 & 2`.

The `DistrictRepository` is responsible for finding our data and returning it. It offers the following methods:

* `findByName(string)` - returns either `undefined` or an `Object` having done a *case insensitive* search

* `findAllMatching(string)` - returns an empty array `[]`, or an array of objects `[Object, Object]`. *case insensitive*.

```javascript
import kindergartnerData from '../../data/kindergartners_in_full_day_program.js';

const district = new DistrictRepository(kindergartnerData);

district.findByName('ACADEMY 20').data;
# => { "2004": 0.302, "2005": 0.267, "2006": 0.354, "2007": 0.392, "2008": 0.385, "2009":  0.39, "2010": 0.436, "2011": 0.489, "2012": 0.479, "2013": 0.488, "2014": 0.49 };
```

## Visual layer

The visual layer will be a single page application using React. Each component should be thoroughly tested and props should have validation `PropTypes`.

#### Iteration 2 - Displaying Data

  In this iteration you will be bringing in data and creating components to display it. Each component should be thoroughly tested before moving on. This will be a lot easier to do if you break out into small modular components.

  Each districts data point:
   * should be rounded to the nearest hundredth
   * should have a *visual indication* if the data is below & above `.5`

  It should end up looking similar to this:
  ![](http://i.imgur.com/GzhO2EO.png)
  That being said feel free to get creative!

### Iteration 3 - Search

  In this iteration you'll create a search functionality.
  It should be *case insensitive* and should update on key press event.
  *hint* Use your helper class!

### Iteration 4 - Back to Data Layer Average
  So now we should be able to display and search for districts! We also want the ability to compare two district averages. For iteration 4, you will create a new method on DistrictRepository called `compareDistricts`. This will take in two arguments an answer rounded to the nearest hundredth.

```javascript
  district.compareDistrictAverages('ACADEMY 20', 'Colorado');
  #=> { "ACADEMY 20": 0.407, "COLORADO": 0.53, "compared": 0.768};

```

### Iteration 5 - Visually Comparing Districts

  Back to react! So now that we can compare two districts together lets go ahead and visually display that. Heres what needs to happen in this iteration:

  1. Each district needs to be clickable.
  2. Once clicked there needs to be a visual indication that the district has been clicked.
  3. If clicked again the district should revert back to its previous state.
  4. If the district is clicked a clone of it must be made and displayed at the top of the page. ex:
    ![](http://i.imgur.com/pqP1E3N.png)
  5. Once two districts have been clicked it should look something like, ex:
    ![](http://i.imgur.com/KpSdTaW.png)
    *hint* There should only ever be a maximum of two districts selected.

### Extension - More Data!
  * Make a header with buttons of all the different files you could load. Each button should replace the current displayed `DistrictRepository`.
  * When a district is selected it should also take the average of participation throughout all of it's years and display it.

## Specification Adherence

- 4 - The application completes all 5 iterations above and implements one or more of the extensions.
- 3 - The application completes 5 iterations.
- 2 - The application is in a usable state, but is missing 1 of the features outlined in the specification above.
- 1 - The application is missing multiple features essential to having a complete application.

## Code Quality

- 4 - Developer demonstrates complete understanding of React with appropriately separated components and exceptionally well refactored code.
- 3 - Developer appears comfortable in React demonstrated gaps in knowledge of how the tools should be used and/or the app contains unrefactored code.
- 2 - Developer selected appropriate libraries and frameworks to build the app but did not use them as intended. Significant refactoring necessary.
- 1 - Developer did not make any effort to use React effectively or refactor code.

## CSS/Design

- 4 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has minimal recommendations for design changes.
- 3 - Developer has made a targeted effort to make the app appealing and user friendly. Evaluator has multiple recommendations for design changes.
- 2 - Developer has made intentional design decisions to create a user friendly application but Louisa would be mad.
- 1 - Developer did minimal to no CSS for this project besides what was indicated in the comp.

## Testing

- 4 - Every component is tested from both a unit and acceptance standpoint, all crucial functionality is tested
- 3 - Almost all components are tested to a level that indicates developer has an understanding of testing
- 2 - A valid attempt was made to test functionality with obvious gaps where functionality is not tested
- 1 - There was little to no attempt to test this application.
