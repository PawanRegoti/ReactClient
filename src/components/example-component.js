import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as exampleActions from '../action/example-action.js'
import {exampleApi} from '../api/example-api.js'

class ExampleComponent extends Component {

  state = {
    value: 'Dummy value 1'
  }

  render() {
    return(
      <div>
        <h2> State value: <i>{this.state.value}</i> </h2>
        <input 
          type="text" style={{fontSize: '20px'}}
          value= {this.state.value} 
          onChange={() => {this.setState({value: event.target.value})}} />
        <br/><br/><br/><br/>
        <input 
          type="button" style={{fontSize: '20px'}}
          value= 'Send to Store' 
          onClick={() => this.props.action.exampleAction(this.state.value)} />
        <h2> Redux store value: <i>{this.props.storeValue}</i> </h2>
        <br/><br/>
        <input 
          type="button" style={{fontSize: '20px'}}
          value= 'Call API' 
          onClick={exampleApi} />
        <p>Check console in browser developer tools for api response.</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  storeValue: state.storeValue
})

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ ...exampleActions }, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
