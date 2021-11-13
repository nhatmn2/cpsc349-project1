import "./stylesheet/app.scss";
//import firebaseDB from "./firebase";
import React, { useState } from "react";
import firebaseDB from "./firebase";
function App() {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { firstName, lastName, email, phone, message } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !message) {
      console.log("Please provide value in each input field");
    } else {
      firebaseDB.child("contacts").push(state);
      alert("file upload success");
      setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      document.getElementById("image").value = "";
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="App">
      <header>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <h1>Embarrassing Image Uploader</h1>
      <p className="sub-title">
        Send embarrassing photos to your loved one's significant other.
      </p>

      <div id="contact-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={handleInputChange}
                value={firstName}
              ></input>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={handleInputChange}
                value={lastName}
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleInputChange}
                value={email}
              ></input>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                onChange={handleInputChange}
                value={phone}
              ></input>
            </div>
          </div>

          <div className="col">
            <div className="form-group solo">
              <label>Message</label>
              <textarea
                type="text"
                className="form-control"
                name="message"
                onChange={handleInputChange}
                value={message}
              ></textarea>
            </div>
          </div>
          {/*<FileUploadComponent />*/}
          <input type="file" id="image" onChange={handleChange} />
          <div className="col">
            <div className="form-group solo right">
              <button className="primary" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
