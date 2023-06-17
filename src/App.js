import "./App.css";

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !name || !password || !confirmPassword) {
      setErrorMessage("Error : All the fields are mandatory");
    } else if (password !== confirmPassword) {
      setErrorMessage("Error: Passwords do not match");
    } else {
      setErrorMessage("");
      setSuccessMessage("Successful Signup! ");
      // Perform additional form submission logic
    }
  };

  return (
    <div className="container mt-5">
      <h1>Signup Form</h1>

      <form className="signupForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            placeholder="Full Name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Confirm Password"
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default App;
