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
- `common-ui` : It is actually NOT a React component but rather a UI global constants file containing constants, interfaces, enumerations and a few helper functions
- `menu-steps`
- `display-graph`
- `choose-date-time-range`
- `choose-weather-parameters`
- `choose-graph-plot-type`
- `choose-location`
- `parameters-wind-speed`
- `parameters-relative-humidity`
- `parameters-temperature`
- `value-parameter-unit-speed`
- `value-parameter-level-meters`
- `value-parameter-unit-temperature`
- `value-parameter-measure-mmm`
- `display-graph-type-chart-js`
- `display-graph-type-heatmap`

### Meteomatics API Library

## Folder structure
## Where the source code to the underlying application resides
## What each function does