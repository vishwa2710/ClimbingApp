import React, { Component } from 'react';
import RoutesForm from './routesForm';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: blueGrey[100],
      main: blueGrey[700],
      dark: blueGrey[900],
      contrastText: '#fff'
    },
    primary: {
      light: lightBlue[200],
      main: lightBlue[400],
      dark: lightBlue[700],
      contrastText: '#000'
    }
  }
});

class WorkoutsForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      type: '',
      routes: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleRouteChange = (idx) => (evt) => {
    const newRoutes = this.state.routes.map((route, ridx) =>
    {
      if (idx !== ridx) return route;
      return {...route, route: evt.target.value };
    });

      this.setState({ routes: newRoutes});
  }

  handleAddRoute = () => {
    this.setState({
      routes: this.state.routes.concat([{ route: {}}])
    });
  }

  handleRemoveRoute = (idx) => () => {
    this.setState({
      routes: this.state.routes.filter((s, ridx) => idx !== ridx)
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Climbing type</FormLabel>
          <RadioGroup
            aria-label="type"
            name="type"
            className={classes.group}
            value={this.state.type}
            onChange={this.handleChange}
          >
            <FormControlLabel value="bouldering" control={<Radio />} label="Bouldering" />
            <FormControlLabel value="top-roping" control={<Radio />} label="Top-roping" />
          </RadioGroup>
        </FormControl>
        <div>
          <FormLabel component="legend">Routes</FormLabel>
          <MuiThemeProvider theme={theme}>
            <Button variant="raised" color="primary" onClick={this.handleAddRoute}>Add route</Button>
          </MuiThemeProvider>
          {this.state.routes && this.state.routes.map((route, idx) => (
            <div className="route" key={`route${idx}`}>
              <RoutesForm type={this.state.type}></RoutesForm>
              <MuiThemeProvider theme={theme}>
                <Button onClick={this.handleRemoveRoute(idx)} variant="outlined" color="primary">Remove</Button>
              </MuiThemeProvider>
            </div>
          ))}
          <MuiThemeProvider theme={theme}>
            <Button variant="raised" color="secondary">Submit</Button>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

WorkoutsForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles) (WorkoutsForm);