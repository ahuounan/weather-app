# Art Gallery webapp
A template media display app, fetching paintings and metadata from an API and displaying. Written with functional/hooks paradigm. Uses an http service that wraps the native fetch api. A rewrite of my first portfolio project https://github.com/ahuounan/jenny-dong-client

## Stack
- React
- React-Router
- Redux
- Redux-Sagas

## Features
- Http service that accepts request and response middlewares, based on fetch api
- ProgressiveImage component that accepts an array of src strings and gradually fetches higher quality images
- Standard normalized redux store extended with hooks that provide quick access to memoized selectors
- Typescript/React/Emotion toolchain

## To Run
- `git clone` the project
- run `npm i`
- run `npm run start:dev`
- Open in localhost:8080
