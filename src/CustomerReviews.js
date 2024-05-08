// CustomerReviews.js
import React, { useState } from 'react';
import './CustomerReviews.css'; // Import your CSS file for styling

function CustomerReviews() {
  const [reviews, setReviews] = useState([
    {
      name: "Rahul Sharma",
      rating: "4",
      comment: "Excellent service! The signature verification system is very accurate and reliable."
    },
    {
      name: "Priya Patel",
      rating: "5",
      comment: "Amazing product! It helped me detect forged signatures with ease. Highly recommend!"
    }
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const rating = event.target.rating.value;
    const comment = event.target.comment.value;

    // Add the new review to the existing list of reviews
    setReviews([...reviews, { name, rating, comment }]);
    
    // Reset the form fields
    event.target.reset();
  };

  return (
    <div className="customer-reviews">
      <h3>Customer Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="rating">
            {[...Array(parseInt(review.rating))].map((_, index) => (
              <span key={index} className="star">&#9733;</span>
            ))}
            {[...Array(5 - parseInt(review.rating))].map((_, index) => (
              <span key={index} className="star">&#9734;</span>
            ))}
          </div>
          <p className="comment">"{review.comment}"</p>
          <p className="author">- {review.name}</p>
        </div>
      ))}
      <div className="add-review">
        <h3>Add Your Review</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <select name="rating" required>
            <option value="">Select Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
          <textarea name="comment" placeholder="Your Review" required></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default CustomerReviews;
