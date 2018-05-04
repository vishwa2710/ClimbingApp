import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class routesForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fullname: "",
      type: "",
      difficulty: "",
      finish: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  setDifficulty(type) {
    if (type === "bouldering") {
      this.difficulties = 
      [
      <option value="v0">v0</option>,
      <option value="v1">v1</option>,
      <option value="v2">v2</option>,
      <option value="v3">v3</option>,
      <option value="v4">v4</option>,
      <option value="v5">v5</option>,
      <option value="v6">v6</option>,
      <option value="v7">v7</option>,
      <option value="v8">v8</option>,
      <option value="v9">v9</option>,
      <option value="v10">v10</option>,
      <option value="v11">v11</option>,
      <option value="v12">v12</option>,
      <option value="v13">v13</option>,
      <option value="v14">v14</option>,
      <option value="v15">v15</option>,
      <option value="v16">v16</option>
      ]

    } else {
      this.difficulties =
      [
      <option value="5.10a">5.10a</option>,
      <option value="5.10b">5.10b</option>,
      <option value="5.10c">5.10c</option>,
      <option value="5.10d">5.10d</option>,
      <option value="5.11a">5.11a</option>,
      <option value="5.11b">5.11b</option>,
      <option value="5.11c">5.11c</option>,
      <option value="5.11d">5.11d</option>,
      <option value="5.12a">5.12a</option>,
      <option value="5.12b">5.12b</option>,
      <option value="5.12c">5.12c</option>,
      <option value="5.12d">5.12d</option>,
      <option value="5.13a">5.13a</option>,
      <option value="5.13b">5.13b</option>,
      <option value="5.13c">5.13c</option>,
      <option value="5.13d">5.13d</option>,
      <option value="5.14a">5.14a</option>,
      <option value="5.14b">5.14b</option>,
      <option value="5.14c">5.14c</option>,
      <option value="5.14d">5.14d</option>,
      <option value="5.15a">5.15a</option>,
      <option value="5.15b">5.15b</option>,
      <option value="5.15c">5.15c</option>,
      <option value="5.15d">5.15d</option>
      ]
    }
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name

    this.setState({
      [name]: value
    })

    if (name === "type") {
      this.setDifficulty(value);
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state);
  }

  difficultyField(){
    return (
      <div className="field">
        <label className="label">Difficulty</label>
        <div className="control">
          <div className="select">
            <select
              value={this.state.difficulty}
              name="difficulty"
              onChange={this.handleChange}
            >
            {this.difficulties}
            </select>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const type = this.state.type;
    const renderDifficulty = type === "" ? (<div> <h5> Please select type </h5> </div>) : this.difficultyField()

    return (
      <div className="routesForm">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Climbing App</h1>
        </header>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={this.handleSubmit}>

                {/* replace with user info*/}
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="label">Type: </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="type"
                        onChange={this.handleChange}
                        value="bouldering"
                        checked={this.state.type === "bouldering"}
                      />
                      Bouldering
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="type"
                        onChange={this.handleChange}
                        value="top-roping"
                        checked={this.state.type === "top-roping"}
                      />
                      Top-roping
                    </label>
                  </div>
                </div>

                {renderDifficulty}

                <div className="field">
                  <label className="label">Finish</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.finish}
                        name="finish"
                        onChange={this.handleChange}
                      >
                      <option value="onsight">Onsight</option>,
                      <option value="flash">Flash</option>,
                      <option value="send">Send</option>,
                      <option value="project">Project</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-3">
              <pre>
                <code>
                  <p>Full Name: {this.state.fullname}</p>
                  <p>type: {this.state.type}</p>
                  <p>difficulties: {this.state.difficulty}</p>
                  <p>finish: {this.state.finish}</p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default routesForm;