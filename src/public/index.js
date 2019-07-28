import React from 'react'
import { render } from 'react-dom'
import App from '../components/app'

const appRoot = document.getElementById('app')
render(<App />, appRoot)

//To ease development.
//For more info: https://webpack.js.org/concepts/hot-module-replacement/
if (module.hot) {
    module.hot.accept()
}