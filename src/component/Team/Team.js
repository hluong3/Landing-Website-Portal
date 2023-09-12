import React, { useState, useEffect } from "react";
import "./Team.scss";

function Team() {
  return (
    <div className="container-fluid">
      <div className="team">
        {/* <div className="row image p-md-0">
                    <div className="col-sm-12 p-md-0">
                        <img
                            src="/images/Team_BG.png"
                            alt="Team"
                        />
                    </div>
                </div> */}

        <div className="row heading p-md-0">
          <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-10">
            <div className="split-container p-md-0">
              <div className="heading-line">
                <hr />
              </div>
              <div className="heading-text">Team</div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row content p-md-0">
          <div className="col-md-1"></div>
          <div className="col-sm-12 col-md-10">
            <div className="split-container p-md-0">
              <div className="content-text p-md-0">
                <p>
                  Our team comes from diverse backgrounds including Investment
                  Banking, Private Equity, and Venture Capital. We excel in
                  various facets of investment, from traditional arenas to the
                  dynamic landscapes of blockchain and crypto.
                </p>

                <p>
                  We actively forge partnerships with industry leaders to unlock
                  new opportunities and add value to our portfolio companies.
                  Collaboration is the cornerstone of success in this fast-paced
                  industry, and we are committed to building enduring
                  relationships across the ecosystem.
                </p>

                <p>
                  Our team is well-connected within the blockchain and crypto
                  communities, giving us unique insights into emerging trends
                  and technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
