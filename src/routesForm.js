import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  FormControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const finishOptions = [
  {label: "Onsight", value: "Onsight"},
  {label: "Flash", value: "Flash"},
  {label: "Send", value: "Send"},
  {label: "Project", value: "Project"}
]

const boulderingOptions = [
  {label: "v0", value: "v0"},
  {label: "v1", value: "v1"},
  {label: "v2", value: "v2"},
  {label: "v3", value: "v3"},
  {label: "v4", value: "v4"},
  {label: "v5", value: "v5"},
  {label: "v6", value: "v6"},
  {label: "v7", value: "v7"},
  {label: "v8", value: "v8"},
  {label: "v9", value: "v9"},
  {label: "v10", value: "v10"},
  {label: "v11", value: "v11"},
  {label: "v12", value: "v12"},
  {label: "v13", value: "v13"},
  {label: "v14", value: "v14"},
  {label: "v15", value: "v15"},
  {label: "v16", value: "v16"}
]

const topropingOptions = [
  {label: "5.10a", value: "5.10a"},
  {label: "5.10b", value: "5.10b"},
  {label: "5.10c", value: "5.10c"},
  {label: "5.10d", value: "5.10d"},
  {label: "5.11a", value: "5.11a"},
  {label: "5.11b", value: "5.11b"},
  {label: "5.11c", value: "5.11c"},
  {label: "5.11d", value: "5.11d"},
  {label: "5.12a", value: "5.12a"},
  {label: "5.12b", value: "5.12b"},
  {label: "5.12c", value: "5.12c"},
  {label: "5.12d", value: "5.12d"},
  {label: "5.13a", value: "5.13a"},
  {label: "5.13b", value: "5.13b"},
  {label: "5.13c", value: "5.13c"},
  {label: "5.13d", value: "5.13d"},
  {label: "5.14a", value: "5.14a"},
  {label: "5.14b", value: "5.14b"},
  {label: "5.14c", value: "5.14c"},
  {label: "5.14d", value: "5.14d"},
  {label: "5.15a", value: "5.15a"},
  {label: "5.15b", value: "5.15b"},
  {label: "5.15c", value: "5.15c"},
  {label: "5.15d", value: "5.15d"}
]

class RoutesForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      difficulty: "",
      finish: "",
      tags: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    // event.preventDefault()
    console.log(this.state);
  }

  difficultyField(){
    return (
      <FormControl component="fieldset">
      <FormLabel component="legend">Difficulty</FormLabel>
        <Select
          value={this.state.difficulty}
          onChange={this.handleChange}
          inputProps={{
            name: "difficulty",
            id: "difficulty"
          }}
        >
          {this.difficulties.map((difficulty, idx) => (
            <MenuItem key={`${idx}`} value={difficulty["value"]}>{difficulty["label"]}</MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }

  render() {
    this.difficulties = this.props.type === "bouldering" ? boulderingOptions : topropingOptions
    var renderDifficulty = (<div> <h5> Please select type </h5> </div>) 
    if ((this.props.type === "bouldering") || (this.props.type === "top-roping")) {
      renderDifficulty = this.difficultyField()
    }

    return (
      <span>
        {renderDifficulty}
        <FormControl component="fieldset">
          <FormLabel component="legend">Finish</FormLabel>
          <Select
            value={this.state.finish}
            onChange={this.handleChange}
            inputProps={{
              name: "finish",
              id: "difficulty"
            }}
          >
            {finishOptions.map((finish, idx) => (
              <MenuItem key={`${idx}`} value={finish["value"]}>{finish["label"]}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </span>
    );
  }
}

export default withStyles(styles) (RoutesForm);