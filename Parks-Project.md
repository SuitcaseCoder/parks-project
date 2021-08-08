#Parks Project

A mini project to practice DOM manipulation and making API Calls

## Getting Started

 - Get API key from [National Park Service Developer Resources](https://www.nps.gov/subjects/developer/get-started.htm)
 - Create a `.gitignore` file
 - add `apikey.js` into your `gitignore`
 - create a `apikey.js` file. This is where you will save your api key 
   then export it to be used in other files
    -  ``` 
       const PARKS_API_KEY = "PASTE YOUR API KEY HERE";
       export default PARKS_API_KEY; 
        ```
 - In your `main.js` file, `import` your `PARKS_API_KEY`
   - ```javascript
     import PARKS_API_KEY from "./apikey.js";
      ```