import { useState } from "react";
import "./Home.scss";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    setMessage("Processing the request...");
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post("http://127.0.0.1:5000/predict", formData)
      .then((response) => {
        setMessage(response.data["prediction"]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="home">
      <div className="content">
        <h1>Welcome!</h1>
        <p>Please select an image:</p>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label htmlFor="image">Upload Image</label>
        <button onClick={handleSubmit}>Submit</button>
        {file && <img src={URL.createObjectURL(file)} />}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Home;
