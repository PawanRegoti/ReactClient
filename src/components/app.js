import React, { Component } from 'react'
import { Provider } from 'react-redux';

import store from '../store/example-store.js';
import ExampleComponent from './example-component.js'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<h1><u>React Client</u></h1>
					<br/><br/>
					<ExampleComponent />
				</div>
			</Provider>
		)
	}
}

export default App