import React, { Component } from 'react';
import axios from 'axios';
import UserItem from './UserItem';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      review: '',
      users: []
    }
  }

  getUsers = () => {
    axios.get(`${BACKEND_URL}/users`)
      .then(res => res.data.filter(user => user.role !== 'admin'))
      .then(users => {
        if(users.length > 0) {
          this.setState({
            users: [...users]
          })
        }
      })
  }

  componentDidMount = () => {
    this.getUsers();
  }

  componentDidUpdate = () => {
    this.getUsers();
  }

  addEmployeeFeedback = (id) => {
    const reviewObj = {
      reviews: this.state.review
    }

    axios.put(`${BACKEND_URL}/users/update/${id}`, reviewObj);
  }

  deleteUser = (id) => {
    axios.delete(`${BACKEND_URL}/users/${id}`);
  }

  renderAdminList = () => {
    return this.state.users.map(user => {
      return (
        <li className='list-group-item' key={user.username}>
          {user.username}
          <button
            type='button'
            onClick={() => this.deleteUser(user._id)}
            className='btn btn-danger float-right'>
            Del
            </button>
        </li>
      )
    })
  }

  renderUserList = () => {
    return this.state.users.map(user => {
      return (
        <UserItem user={user} key={user.username} />
      )
    })
  }

  renderList = () => {
    if (this.props.admin) {
      return this.renderAdminList();
    }
    return this.renderUserList();
  }

  render () {
    return (
      <div>
        <ul className='list-group'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}