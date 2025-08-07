import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-3 text-danger">404</h1>
      <h3 className="mb-3">Page Not Found</h3>
      <p className="mb-4">Sorry, the page you're looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-primary px-4">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
