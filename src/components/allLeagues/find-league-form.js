'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

const API_URL='';

class FindLeagueForm extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = {
      leagueName: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLeagueNameChange = this.handleLeagueNameChange.bind(this);
  }

  handleLeagueNameChange(e) {
    this.setState({ leagueName: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.leagueSelect(this.state.leagueName)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='leagueName'
          placeholder='search for a league'
          value={this.state.leagueName}
          onChange={this.handleLeagueNameChange}/>
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueLookup: {},
      leagueSelected: null,
      leagueNameError: null,
    }

    this.leagueSelect = this.leagueSelect.bind(this);
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  componentDidMount() {
    if (localStorage.leagueLookup) {
      try {
        let leagueLookup = JSON.parse(localStorage.leagueLookup);
        this.setState({leagueLookup})
      } catch (err) {
        console.error(err);
      }
    } else {
      superagent.get(`${API_URL}/league/`)
      .then( res => {
        let leagueLookup = res.body.results.reduce((lookup, n) => {
          lookup[n.name] = n.url;
          return lookup;
        }, {});

        try {
          localStorage.leagueLookup = JSON.stringify(leagueLookup);
          this.setState({ leagueLookup });
        } catch (err) {
          console.error(err);
        }
      })
      .catch(console.err)
    }
  }

  leagueSelect(name) {
    if (!this.state.leagueLookup[name]) {
      this.setState({
        leagueSelected: null,
        leagueNameError: name,
      });
    } else {
      superagent.get(this.state.leagueLookup[name])
      .then( res => {
        this.setState({
          leagueSelected: res.body,
          leagueNameError: null,
        })
      })
      .catch(console.error);
    }
  }

  render() {
    return (
      <section>
        <h1>Find League Form</h1>
        <LeagueForm leagueSelect={this.leagueSelect} />

        { this.state.leagueNameError ?
          <div>
            <h2>Selected: {this.state.leagueNameError} does not exist.</h2>
            <h3>Please make another selection</h3>
          </div> :
          <div>
            <h2>Selected: {this.state.leagueSelected.name}</h2>
            <h3></h3>
          </div>
        }
      </section>
    )
  }
}

const container = document.createElement('main');
document.body.appendChild(container);
ReactDom.render(<App />, container);