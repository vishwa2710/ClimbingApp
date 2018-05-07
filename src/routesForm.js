import React, { Component } from 'react';
import { Form, Select,  } from 'react-form';
import logo from './logo.svg';
import './App.css';

const finishOptions = [
  {
    label: "Onsight",
    value: "Onsight"
  },
  {
    label: "Flash",
    value: "Flash"
  },
  {
    label: "Send",
    value: "Send"
  },
  {
    label: "Project",
    value: "Project"
  }
]

const boulderingOptions = [
  {
    label: "v0",
    value: "v0"
  },
  {
    label: "v1",
    value: "v1"
  },
  {
    label: "v2",
    value: "v2"
  },
  {
    label: "v3",
    value: "v3"
  },
  {
    label: "v4",
    value: "v4"
  },
  {
    label: "v5",
    value: "v5"
  },
  {
    label: "v6",
    value: "v6"
  },
  {
    label: "v7",
    value: "v7"
  },
  {
    label: "v8",
    value: "v8"
  },
  {
    label: "v9",
    value: "v9"
  },
  {
    label: "v10",
    value: "v10"
  },
  {
    label: "v11",
    value: "v11"
  },
  {
    label: "v12",
    value: "v12"
  },
  {
    label: "v13",
    value: "v13"
  },
  {
    label: "v14",
    value: "v14"
  },
  {
    label: "v15",
    value: "v15"
  },
  {
    label: "v16",
    value: "v16"
  },
]

const topropingOptions = [
  {
    label: "5.10a",
    value: "5.10a"
  },
]

class RoutesForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      difficulty: "",
      finish: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.difficulties = props.type === "bouldering" ? boulderingOptions : topropingOptions
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    // event.preventDefault()
    console.log(this.state);
  }

  difficultyField(){
    return (
      <div className="field">
        <label className="label">Difficulty</label>
        <div className="control">
          <div className="select">
            <Select field="difficulty" options={this.difficulties}/>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const renderDifficulty = this.props.type === "" ? (<div> <h5> Please select type </h5> </div>) : this.difficultyField()

    return (
      <div className="routesForm">
        <div className="columns">
          <div className="column is-9">
            {renderDifficulty}
            <div className="field">
              <label className="label">Finish</label>
              <div className="control">
                <div className="select">
                  <Select field="finish" options={finishOptions}/>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-3">
            <pre>
              <code>
                <p>type: {this.props.type}</p>
                <p>difficulties: {this.state.difficulty}</p>
                <p>finish: {this.state.finish}</p>
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default RoutesForm;