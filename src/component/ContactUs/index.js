import React from "react";
import "./ContactUs.scss";

const URL =
  "https://script.google.com/macros/s/AKfycby3ENNZysKvx6TtNvln8mFHtgApchox7-aLhYo3Qw_rpmnv2H2HNXN-TVNPjHsnJTax/exec";

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
    <div className="container">
      <div className="contact-us">
        <div className="row heading padding-0 ">
          <div className="col-sm-12 col-md-6">
            <div className="split-container padding-0">
              <div className="heading-line">
                <hr />
              </div>
              <div className="heading-text">Contact Us</div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6"></div>
        </div>

        <div className="row content padding-0">
          <div className="col-sm-12 col-md-7">
            <div className="split-container padding-0">
              <div className="content-space"></div>
              <div className="padding-0">
                <p className="col-md-10">
                  Thank you for considering Laniakea as your investment and
                  strategic partner. We look forward to journeying through the
                  limitless opportunities in the digital asset and web3 realms
                  with you.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-5">
            <form onSubmit={submit}>
              <p>For inquiries and partnerships, feel free to reach out:</p>
              <div className="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="[Your Name]"
                />
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="[Your Email]"
                />
              </div>
              <div className="form-group">
                <label for="phone">Phone:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="[Your Phone Number]"
                />
              </div>
              <div className="form-group">
                <label for="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="[Your Message]"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
