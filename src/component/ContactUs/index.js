import React from "react";
import "./ContactUs.scss";

const URL =
  "https://script.google.com/macros/s/AKfycbwXN8MZH3ajFNXKQY8WQvSfzzG0725rA74TWZZ7QjyPHAGwLHrBxmD9XNb7if-vsoBV/exec";

function ContactUs() {
  const submit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = e.target;
    fetch(URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      }),
    })
      .then((res) => {
        console.log(res);
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("Message failed to send!");
      });
  };

  return (
    <div className="container-fluid">
      <div className="contact-us">
        <div className="row heading p-md-0 ">
          <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-10">
            <div className="split-container p-md-0">
              <div className="heading-line">
                <hr />
              </div>
              <div className="heading-text">Contact Us</div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row content p-md-0">
          <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-10">
            <div className="split-container p-md-0">
              {/* <div className="content-space"></div> */}

              <div className="content-text p-md-0">
                <p className="col-md-10">
                  Thank you for considering Laniakea as your investment and
                  strategic partner. We look forward to journeying through the
                  limitless opportunities in the digital asset and web3 realms
                  with you.
                </p>

                <p>For inquiries and partnerships, feel free to reach out:</p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row content p-md-0">
          <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-6">
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Project Name:</label>
                <input type="text" className="form-control" id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
