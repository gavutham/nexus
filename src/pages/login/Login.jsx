import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function LoginPage() {
  // State to store user input
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // State to store error messages
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the corresponding error message when the user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username and password are correct
    if (
      formData.username === "correctUsername" &&
      formData.password === "correctPassword"
    ) {
      // Successful login
      // You can redirect the user or perform other actions here
      navigate("/");
      alert("Login successful");
    } else {
      // Incorrect username or password
      // Set error messages accordingly
      setErrors({
        username:
          formData.username !== "correctUsername" ? "Incorrect username" : "",
        password:
          formData.password !== "correctPassword" ? "Incorrect password" : "",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1> {/* Moved the heading inside the login box */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="username">
              Enter your username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <p className="error-message">{errors.username}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="username">
              {" "}
              Enter your password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <p className="error-message">{errors.password}</p>
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
