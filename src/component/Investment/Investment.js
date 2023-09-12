import React, { useState, useEffect } from 'react';
import './Investment.scss';

function Investment() {
    return (
        <div className="container-fluid">
            <div className="investment">
                <div className="row heading p-md-0">
                    <div className="col-md-1"></div>
                    <div className="col-sm-12 col-md-10">
                        <div className="split-container p-md-0">
                            <div className="heading-line"><hr/></div>
                            <div className="heading-text d-none d-md-block">Investment Thesis and Strategy</div>
                            <div className="heading-text d-md-none d-sm-block">Investment Thesis</div>
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
                                <p>Our investment focus encapsulates a range of sectors within the web3 space, from Decentralized Finance (DeFi) and Non-Fungible Tokens (NFTs) to Blockchain Infrastructure. We look for projects that show evidence of genuine utility for the ecosystem and its users. By strategically steering these companies and providing connections for better synergies, we aim to jointly develop the web3 space for the future. Our portfolio reﬂects this commitment, featuring a selection of early-stage companies and digital assets that align with our investment objectives.</p>
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
                                <div className="col-sm-12 col-md-3">
                                    <p className="sub-heading">Early-Stage Equity Investment:</p>
                                    <p>Acquiring equity stakes in promising startups during their seed or Series A rounds.</p>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <p className="sub-heading">Token and Digital Assets Investments:</p>
                                    <p>Utilizing AI models to invest in native tokens and digital assets that show long-term utility and growth potential.</p>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <p className="sub-heading">Strategic Partnerships:</p>
                                    <p>Forming alliances with established web3 and web2 companies for co-investment or co-development projects.</p>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <p className="sub-heading">Governance Participation:</p>
                                    <p>Actively engaging in the governance of decentralized protocols to steer their development and value accrual.</p>
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

export default Investment;