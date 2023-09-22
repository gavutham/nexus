import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
function Register() {
  // State to store user input
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  // State to store error messages
  const [errors, setErrors] = useState({
    password: "",
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the password error when the user starts typing
    if (name === "password") {
      setErrors({
        ...errors,
        password: "",
      });
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform password validation
    if (formData.password.length < 8) {
      setErrors({
        password: "Password must be at least 8 characters long",
      });
      return; // Don't proceed with the submission
    }

    // Perform signup logic here (e.g., send data to a server)
    navigate("/");
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="username">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="username">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="username">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <p className="error-message">{errors.password}</p>{" "}
            {/* Display the password error */}
          </div>
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
