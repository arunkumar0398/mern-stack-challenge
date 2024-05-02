import React, { Component } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'admin',
      users: []
    }
  }

  componentDidMount = () => {
    axios.get(`${BACKEND_URL}/users`)
      .then(response => {
        if(response.data.length > 0) {
          this.setState({
            users: [...response.data]
          })
        }
      })
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.username === 'admin') {
      window.location = '/admin-view'
    } else {
      window.location = '/employee-view'
    }
  }

  render() {
    return (
      <div className='col-6 offset-3'>
        <h3 className='display-4'>Choose your user</h3>
        <p className='lead'>Pick Admin for creating and deleting users.<br/>Pick any other user to give and see feedback</p>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <select
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(user => {
                  return <option
                    data-role={user.role}
                    key={user.username}
                    value={user.username}>{user.username}
                  </option>
                })
              }
              </select>
          </div>
          <div className='form-group'>
            <input type='submit' value='Log in' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}