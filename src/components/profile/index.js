import React from 'react';
import { connect } from 'react-redux';


class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      state: '',
      country: '',
      imgURL: '',
      date: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

  } 

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log('fux yeah');
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="State" 
            value={this.state.state}
            name="state"
            onChange={this.handleChange}/>
          <input 
            type="text" 
            placeholder="Country"
            value={this.state.country}
            name="country"
            onChange={this.handleChange}/>
          <input 
            type="text" 
            placeholder="img url"
            value={this.state.imgURL}
            name="imgURL"
            onChange={this.handleChange}/>
          <input 
            type="date"
            name="date"
            onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>  
      </section>
    );
  }    
}  

export default Profile;