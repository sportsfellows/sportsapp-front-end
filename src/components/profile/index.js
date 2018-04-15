import React from 'react';
import * as util from './../../lib/util.js';

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = props.userProfile ? {...props.userprofile} :{
      state: '',
      country: '',
      image: '',
      birthdate: '',
    };
  }
  componentWillReceiveProps(props) {
    if (props.userProfile) {
      this.setState(props.userProfile);
    }
  }

  componentWillMount() {
    util.loggedInUserCheck(this.props);
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
      <section>
        <form onSubmit={this.handleSubmit}>
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
            name="birthdate"
            onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>  
      </section>
    );
  }    
}  

export default Profile;