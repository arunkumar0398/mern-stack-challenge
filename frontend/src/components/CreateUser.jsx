import React, { Component } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    axios.post(`${BACKEND_URL}/users/add`, user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
          </div>
          <div className='form-group'>
            <input type='submit' value='Create User' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}