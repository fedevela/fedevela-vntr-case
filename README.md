# Federico Vela submission for Case: Data Visualization App for Weather Data

## The architecture of the application
The application is built as an NX monorepo, containing three modules:
1. The single page React application, in `/src` .
2. The React components library, in `/common-ui` .
3. The API data access library, in `/api` .

### Single Page Application
The single page application is composed of a single React component in file `/src/app/app.tsx`. This file contains the entire application and most of its domain logic. It makes use of two main components from the library `MenuSteps` and `DisplayGraph` as well as calling the main API function `executeRequestMeteomaticsAPI` which invokes `axios.post` to obtain the data from the Meteomatics API.

The `MenuSteps` component contains the application's main navigation component and all of the form components whereas the `DisplayGraph` component takes care of rendering the actual visualization.

### React Components Library
This module is mainly located in `common-ui/src/lib/` and contains all of the React functional components that are used in the application, as well as a global UI module in `common-ui/src/lib/common-ui.tsx`.

#### Components
- `common-ui` - **Global UI Helper** : It is actually not a React component but rather a UI global constants file containing constants, interfaces, enumerations and a few helper functions.
- `menu-steps` - **Main Navigation** : provides with the main navigation menu to fill out the form necessary to use the application.
- `display-graph` - **Main Graph Container** : a container component that displays the configured graph.
- `choose-location` - **Navigation : First Step** : provides the user with a google maps auto complete menu where the user can choose the location to display.
- `choose-date-time-range` - **Navigation : Second Step** : provides the user with a calendar to chose a starting and ending date and time.
- `choose-weather-parameters` - **Navigation : Third Step** : provides the user with several options to choose which weather parameters to request from the API and display in the graph. The user must choose from three available weather parameters `Temperature`, `Wind Speed` and `Relative Humidity`.
- `choose-graph-plot-type` - **Navigation : Fourth Step** : provides the user with the different available chart types to later visualize the data received from the API.
- `parameters-temperature` - **Configuration of Temperature** : provides the user with the capacity to configure how temperature will be queried and displayed.
- `parameters-relative-humidity` - **Configuration of Relative Humidity** : provides the user with the capacity to configure how relative humidity will be queried and displayed. 
- `parameters-wind-speed` - **Configuration of Relative Humidity** : provides the user with the capacity to configure how wind speed will be queried and displayed. 
- `value-parameter-unit-speed` - **Global UI Component** : 
- `value-parameter-level-meters` - **Global UI Component** : 
- `value-parameter-unit-temperature` - **Global UI Component** : 
- `value-parameter-measure-mmm` - **Global UI Component** : 
- `display-graph-type-chart-js` - **Global UI Component** : 
- `display-graph-type-heatmap` - **Global UI Component** : 

### Meteomatics API Library

## Folder structure
## Where the source code to the underlying application resides
## What each function does