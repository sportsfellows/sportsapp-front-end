import React from 'react';
import * as util from './../../lib/util.js';

class ProfileForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.userProfile ? {...props.userProfile} :{
      state: '',
      country: '',
      image: '',
      birthdate: '',
    };
  }
  componentWillReceiveProps(props) {
    if (props.userProfile) this.setState(props.userProfile);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    return this.props.onComplete(this.state);
  } 

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <section className='profile-form'>
        <form className='form' onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="State" 
            value={this.state.state || ''}
            name="state"
            onChange={this.handleChange}/>
          <input 
            type="text" 
            placeholder="Country"
            value={this.state.country || ''}
            name="country"
            onChange={this.handleChange}/>
          <input 
            type="text" 
            placeholder="img url"
            value={this.state.image || ''}
            name="image"
            onChange={this.handleChange}/>
          <input 
            type="date"
            value={this.state.birthdate}
            name="birthdate"
            onChange={this.handleChange}/>
          <button className='button form-button' type="submit">Submit</button>
        </form>  
      </section>
    );
  }    
}  

export default ProfileForm;