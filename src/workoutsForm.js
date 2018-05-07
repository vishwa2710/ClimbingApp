import { Form, Text, RadioGroup, Radio, NestedField } from 'react-form';
import React, { Component } from 'react';
import logo from './logo.svg';
import RoutesForm from './routesForm';

class WorkoutsForm extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // event.preventDefault()
    console.log(this.state);
  }

  handleChange(event) {
    this.setState(event.values);
  }

  render() {
    const FormContent = props => {
      return (
        <div>
          <form onSubmit={props.formApi.submitForm} id="dynamic=form">
            <label htmlFor="dynamic-first">Workout Type</label>
            <RadioGroup field="type">
              <label htmlFor="radio-input-bouldering" className="radio">Bouldering</label>
              <Radio value="bouldering" id="radio-input-bouldering" />
              <label htmlFor="radio-input-toproping" className="radio">Top-roping</label>
              <Radio value="top-roping" id="radio-input-toproping" />
            </RadioGroup>
            <button
              onClick={() => props.formApi.addValue('routes', '')}
              type="button"
              className="mb-4 mr-4 btn-success">Add route</button>
            { props.formApi.values.routes && props.formApi.values.routes.map( (route, i) => (
              <div key={`route${i}`}>
                <NestedField field={['routes', i]} component={RoutesForm} type={this.state.type}/>
                <button
                  onClick={() => props.formApi.removeValue('routes', i)}
                  type="button"
                  className="button is-primary">Remove</button>
              </div>
            ))}
            <button type="submit" className="button is-primary">Submit</button>
          </form>
        </div>
      )
    }

    return (
      <div className="workoutsForm">
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <Form component={FormContent} className="form" onSubmit={this.handleSubmit}
              onChange={this.handleChange}/>
            </div>
            <div className="column is-3">
              <pre>
                <code>
                  <p>type: {this.state.type}</p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutsForm;