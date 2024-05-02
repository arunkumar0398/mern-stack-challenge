import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export default function UserItem(props) {
  const { user } = props;
  const [review, setReview] = useState('');

  const addEmployeeFeedback = (id) => {
    const reviewObj = {
      reviews: review
    }

    axios.put(`${BACKEND_URL}/users/update/${id}`, reviewObj);
  }

  return (
    <form className="form-inline" key={user.username}>
      <div className="form-group mb-2">
        <input
          type="text"
          readOnly
          className="form-control-plaintext"
          value={user.username} />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <input
          type="textarea"
          className="form-control"
          name={`review-${user._id}`}
          onChange={e => setReview(e.target.value)}
          value={review}/>
      </div>
      <button
        type="submit"
        onClick={() => addEmployeeFeedback(user._id)}
        className="btn btn-primary mb-2">
        Send
        </button>
    </form>
  )
}