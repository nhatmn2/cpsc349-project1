import './stylesheet/app.scss'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarker } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </header>

      <h1>Contact Us</h1>
      <p className="sub-title">lorem ipsum</p>

      <div id="contact-container">
        <div className="contact-info">
          <h4>
            Contact Information
          </h4>
          <p>Fill up the form and then click send</p>
          <div className="icon-text">
            <i><FaPhoneAlt className="fa"></FaPhoneAlt></i>
            <span>123-456-7890</span>
          </div>
          <div className="icon-text">
            <i><FaEnvelope className="fa"></FaEnvelope></i>
            <span>email@email.com</span>
          </div>
          <div className="icon-text">
          <i><FaMapMarker className="fa"></FaMapMarker></i>
            <span>123 Street Ave</span>
          </div>
          <div className="social-media">
            <a href="#" className="icon-circle">
              <i><FaFacebookF className="fa"></FaFacebookF></i>
            </a>
            <a href="#" className="icon-circle">
              <i><FaTwitter className="fa"></FaTwitter></i>
            </a>
            <a href="#" className="icon-circle">
              <i><FaInstagram className="fa"></FaInstagram></i>
            </a>
            <a href="#" className="icon-circle">
              <i><FaYoutube className="fa"></FaYoutube></i>
            </a>  
            </div>
        </div>
        <form>
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input type="text"></input>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text"></input>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input type="email"></input>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel"></input>
            </div>
          </div>
          
          <div className="col">
            <div className="form-group solo">
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>
          {/* <FileUploadComponent /> */}
          <div className="col">
            <div className="form-group solo right">
              <button className="primary">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
