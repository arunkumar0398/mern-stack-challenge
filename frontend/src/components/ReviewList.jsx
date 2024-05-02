import React, { Component } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default class ReviewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
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

  componentDidUpdate = () => {
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

  renderReviewsList = (user) => {
    if (user.reviews.length > 0) {
      return (
        user.reviews.map((review, i) => {
          return(
            <blockquote className="blockquote mb-0" key={user.username + i}>
              <p>{review}</p>
              <footer className="blockquote-footer"><cite title="Source Title">Anonymous comment</cite></footer>
              <br />
            </blockquote>
          )
        })
      )
    } else {
      return "There is no reviews here"
    }
  }

  renderUserList = () => {
    return this.state.users.map(user => {

      return (
        <div key={user.username}>
          <div className="card">
            <div className="card-header">
              {user.username}
            </div>
            <div className="card-body">
              {this.renderReviewsList(user)}
            </div>
          </div>
          <br/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderUserList()}
      </div>
    )
  }
}
