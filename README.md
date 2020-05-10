# Example Weather App, React/Redux/Saga Architecture
An example Weather App based on a React/Redux/Saga architecture. The intention of this app is to showcase an implementation of an app based on **React/Redux architecture**. The App is split into two main sections: View and Store.

## View
The View uses a classic Pages/Container/Component split:
- Pages are top-level routes (Search, Weather, Settings)
- Containers are smart components connected to the Store
- Components are purely presentational, and split into basic primitives, layout primitives, and composed patterns

## Store
The Store is split into Models (core data) and View (visual state of the views):
- Models
  * Geocode (OpenCage data that maps a keyword search to a location expressed as lat:lng, ie London --> 51.51:-0.13)
    * Normalized list of search results, keyed by query string
    * Dictionary of Geocode data, keyed by location (lat:lng)
  * Weather (OpenWeather actual weather data based on location), keyed by location (lat:lng)
    * Current weather data
    * Hourly forecast weather data
    * Daily forecast weather data
  * BackgroundPhotos (Unsplash photos based on a keyword search)
- View
  * Query: current keyword search query
  * Location: current location of the app expressd as lat:lng
  * Settings:
    * Temperature unit
    * Data Series to show (hourly or daily)
    * Statistics to show (ie wind speed, sunrise time, etc)
    
The Container components only dispatch View actions. View actions are then handled by View sagas, which trigger Model actions as needed. I intend to reimplement the View section of the store with the Context Api, keeping only Models in the Redux store.
    
## Selectors
Selectors are placed in both the View and the Store.

The **selectors placed in the Store** are either simple selectors that provide access to a store property, or a curried selector-maker function that returns a dictionary entry based on a key (ie, weather data by location).

The **selectors placed in the View** are co-located with the Container they serve. These selectors are **composed**, combining data from two different parts of the Store to create a coherent piece of data for the Container to render. An example is selecting **weather data** for the **current location**, filtered by the **selected stats**.
    
See diagram below for details

![Diagram](https://github.com/ahuounan/weather-app/blob/master/diagram.png)

## Stack
- React
- React-Router
- Redux
- Redux-Sagas

## To Run
- `git clone` the project
- run `npm i`
- fill in API keys in .env file
- run `npm run start`
- open in localhost:8080

The app is hosted at
http://weather-app.s3-website.eu-west-2.amazonaws.com/
