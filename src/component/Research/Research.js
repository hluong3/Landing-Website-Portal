import React, { useState, useEffect } from 'react';
import './Research.scss';

function Research() {
    return (
        <div className="container">
            <div className="research">
                <div className="row heading p-md-0">
                    <div className="col-sm-12 col-md-6">
                        <div className="split-container p-md-0">
                            <div className="heading-line"><hr/></div>
                            <div className="heading-text">Research</div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6"></div>
                </div>

                <div className="row content p-md-0">
                    <div className="col-sm-12 ">
                        <div className="split-container p-md-0">
                            <div className="content-space d-none d-sm-block"></div>
                            <div className="content-text p-md-0">
                                <p>Launching soon. Stay tuned !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Research;