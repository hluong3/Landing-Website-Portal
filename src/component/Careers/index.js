import React from "react";
import "./Careers.scss";
function Careers() {
  return (
    <div className="careers">
      <div className="row heading padding-0 ">
        <div className="col-sm-12 col-md-6">
          <div className="split-container padding-0">
            <div className="heading-line">
              <hr />
            </div>
            <div className="heading-text">Careers</div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6"></div>
      </div>

      <div className="row content padding-0">
        <div className="col-12">
          <div className="split-container padding-0">
            <div className="content-space d-none d-sm-block"></div>
            <div className="content-text padding-0">
              <ul className="careers-list">
                <li className="careers-item">
                  <p className="underline">Junior Investment</p>
                  <ul className="careers-item-description">
                    <li>
                      Responsibilities: Conduct industry research, ﬁnancial
                      modeling, and due diligence.
                    </li>
                    <li>Qualiﬁcations: Master’s degree in Finance.</li>
                  </ul>
                </li>
                <li className="careers-item">
                  <p className="underline">Community Manager</p>
                  <ul className="careers-item-description">
                    <li>
                      Responsibilities: Manage social media platforms and engage
                      with our community.
                    </li>
                    <li>
                      Qualiﬁcations: Bachelor’s degree in Communications,
                      Marketing, and prior experience managing web3 communities.
                    </li>
                  </ul>
                </li>
                <li className="careers-item">
                  <p className="underline">Finance and Operational Analyst</p>
                  <ul className="careers-item-description">
                    <li>
                      Responsibilities: Oversee ﬁnancial planning and
                      operational eﬃciency.
                    </li>
                    <li>
                      Qualiﬁcations: Bachelor’s degree in Finance or Accounting.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
