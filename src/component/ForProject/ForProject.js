import React, { useState, useEffect } from 'react';
import './ForProject.scss';

function ForProject() {
    return (
        <div className="container-fluid">
            <div className="for-project">

                <div className="row heading p-md-0">
                    <div className="col-md-1"></div>
                    <div className="col-sm-12 col-md-10">
                        <div className="split-container p-md-0">
                            <div className="heading-line"><hr/></div>
                            <div className="heading-text">For Projects</div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                <div className="row content p-md-0">
                    <div className="col-md-1"></div>
                    <div className="col-sm-12 col-md-10">
                        <div className="split-container p-md-0">
                            {/* <div className="content-space d-none d-sm-block"></div> */}
                            <div className="content-text p-md-0">
                                <p>If you're an innovative project in the web3 or digital asset space, Laniakea is the strategic partner you've been looking for. Beyond providing capital, we oﬀer:</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                <div className="row content p-md-0">
                    <div className="col-md-1"></div>
                    <div className="col-sm-12 col-md-10">
                        <div className="split-container p-md-0">
                            {/* <div className="content-space d-none d-sm-block"></div> */}
                            <div className="content-text row p-md-0">
                                <div className="col-sm-12 col-md-4">
                                    <p className="sub-heading">Fundraising Strategy:</p>
                                    <p>Expert advice on navigating the complexities of raising capital.</p>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <p className="sub-heading">Strategic Partnerships:</p>
                                    <p>Introductions to other projects and founders for beneﬁcial collaborations.</p>
                                </div>

                                <div className="col-sm-12 col-md-4">
                                    <p className="sub-heading">Community Development: </p>
                                    <p>Leverage our expertise in community management to grow and engage your user base.</p>
                                </div>

                                <div className="col-sm-12">
                                    <p>We are always enthused to meet new founders and projects. Do reach out to us today and let us join you on this journey.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>

                </div>
            </div>
            
        </div>
        
    );
}

export default ForProject;