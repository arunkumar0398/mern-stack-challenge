import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import CreateUser from '../components/CreateUser';
import UserList from '../components/UserList';

export default class AdminView extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar />
        <br />
        <div className='row'>
          <div className='col'>
            <CreateUser />
          </div>
          <div className='col'>
            <h3>Employees</h3>
            <UserList admin />
          </div>
        </div>
      </div>
    )
  }
}
