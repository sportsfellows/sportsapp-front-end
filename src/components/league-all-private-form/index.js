import React from 'react';

import Tooltip from '../helpers/tooltip';
import * as util from '../../lib/util';

class LeagueAllPrivateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { leagueName: '', password: '',   leagueNameError: null, passwordError: null, error: null, focused: null, submitted: false, };
  }

  componentWillUnmount() {
    this.setState({ leagueName: '', password: '' });
  }

  validateInput = e => {
    let { name, value } = e.target;

    let errors = {
      passwordError: this.state.passwordError,
      leagueNameError: this.state.leagueNameError,
    };

    let setError = (name, error) => errors[`${name}Error`] = error;
    let deleteError = name => errors[`${name}Error`] = null;

    if(name === 'leagueName') {
      if(!value)
        setError(name, `${name} can not be empty`)
      else 
        deleteError(name)
    }

    if(name === 'password') {
      if(!value)
        setError(name, `${name} can not be empty`)
      else 
        deleteError(name)
    }

    this.setState({
      ...errors, error: !!(errors.leagueNameError || errors.passwordError),
    })
  };

  handleFocus = e => this.setState({ focused: e.target.name});

  handleBlur = e => {
    let { name } = e.target;
    this.setState(state => ({
      focused: state.focused == name ? null : state.focused,
    }))
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.validateInput({...e});

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(!this.state.error) {
      this.props.onComplete(this.state)
        .catch(err => {
          console.log('hi');
          console.error(err);
          this.setState({ 
            error,
            submitted: true,
        });
      });
    }
    this.setState(state => ({
      submitted: true,
      leagueNameError: state.leagueNameError || state.leagueName ? null : 'required',
      passwordError: state.passwordError || state.password ? null : 'required',
    }))
  };

  render(){
    let { focused, submitted, leagueName, passwordError, leagueNameError } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={util.classToggler({
        'league-all-private-form': true,
        'error': this.state.error && this.state.submitted,
      })}>

        <h2>join a private league.</h2>
        <input
          className={util.classToggler({error: leagueNameError })}
          type='text'
          name='leagueName'
          placeholder='league name'
          value={this.state.leagueName}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <Tooltip message={leagueNameError} show={focused === 'leagueName' || submitted}/>

        <input
          className={util.classToggler({passwordError})}
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />

        <button type='submit'> Join League </button>
      </form>
    );
  }
}

export default LeagueAllPrivateForm;

