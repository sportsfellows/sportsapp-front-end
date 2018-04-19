import React from 'react';

import Tooltip from '../helpers/tooltip';
import * as util from '../../lib/util';

class GroupAllPrivateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { groupName: '', password: '',   groupNameError: null, passwordError: null, error: null, focused: null, submitted: false, };
  }

  componentWillUnmount() {
    this.setState({ groupName: '', password: '' });
  }

  validateInput = e => {
    let { name, value } = e.target;

    let errors = {
      passwordError: this.state.passwordError,
      groupNameError: this.state.groupNameError,
    };

    let setError = (name, error) => errors[`${name}Error`] = error;
    let deleteError = name => errors[`${name}Error`] = null;

    if(name === 'groupName') {
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
      ...errors, error: !!(errors.groupNameError || errors.passwordError),
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
      groupNameError: state.groupNameError || state.groupName ? null : 'required',
      passwordError: state.passwordError || state.password ? null : 'required',
    }))
  };

  render(){
    let { focused, submitted, groupName, passwordError, groupNameError } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={util.classToggler({
        'group-all-private-form': true,
        'error': this.state.error && this.state.submitted,
      })}>
        <h2>join a private group.</h2>
        <input
          className={util.classToggler({error: groupNameError })}
          type='text'
          name='groupName'
          placeholder='group name'
          value={this.state.groupName}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <Tooltip message={groupNameError} show={focused === 'groupName' || submitted}/>

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

        <button className='button' type='submit'> Join Group </button>
      </form>
    );
  }
}

export default GroupAllPrivateForm;