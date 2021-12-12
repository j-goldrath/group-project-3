import React from 'react';

import './FundraiserInfoCard.css';
import charity from './charity-cleanup.jpg';
import { CardTitle, Button, Card, Row, Col } from 'react-materialize';

function FundraiserInfoCard(props) {
    return (
        <div className="fundraiser-info-card">
            {/* <!-- charity/cause info card component --> */}
            <div className="row">

                <div className="col s12">
                    <div className="card">
                        <div className="row">
                            {/* <!-- left half of card --> */}
                            <div className="col s12 m6">
                                <div className="card-image">
                                    <img src={charity} />
                                </div>

                                <div className="card-content white black-text">
                                    {/* <!-- this is the fundraiser title section --> */}
                                    <span id="fundraiser-card-tile" className="card-title fundraiser-card-title">Clean Up
                                        The Park</span>
                                    {/* <!-- this is the fundraiser location section --> */}
                                    <span className="card-title fundraiser-card-subtitle">Chicago, IL</span>
                                    {/* <!-- this is the fundraiser description section --> */}
                                    <p id="fundraiser-card-description">We are raising funds to help cleanup and
                                        revitalize
                                        the neighborhood park. If we all chip in a little bit we can make this
                                        neighborhood
                                        a better place to live.</p>
                                </div>
                            </div>

                            {/* <!-- right half of card --> */}
                            <div className="col s12 m6 blue-col">

                                <div className="col s12 blue lighten-2 center-align white-text blue-col">
                                    <div className="col s6 center-align fundraiser-info-stats">
                                        <span className="fundraiser-card-stats">Raised:</span>
                                        <h5 className="dollars-bold">$10,000</h5>
                                    </div>
                                    <div className="col s6 center-align fundraiser-info-stats">
                                        <span className="fundraiser-card-stats">Goal:</span>
                                        <h5 className="dollars-bold">$50,000</h5>
                                    </div>

                                    <div className="card-progress-bar campaign-info-progress-bar-wrapper">
                                        <div id="modded">
                                            <div className="progress blue lighten-4 tooltipped border border-white"
                                                data-position="top"
                                                data-tooltip="20% of the target funds have been raised">
                                                <span></span>
                                                <div id="fundraiser-info-progress" className="determinate blue"
                                                    style={{ width: "20%", animation: "grow 2s" }}>20%</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="donors-list-wrapper">
                                        <h5 className="center-align">Recent Donations</h5>
                                        <div className="card">
                                            <ul className="collection with-header black-text left-align">
                                                <li className="collection-item">Sal<div
                                                    className=" secondary-content right-align">$100.00</div>
                                                </li>
                                                <li className="collection-item">Matthew<div
                                                    className=" secondary-content right-align">$100.00</div>
                                                </li>
                                                <li className="collection-item">Cam<div
                                                    className=" secondary-content right-align">$100.00</div>
                                                </li>
                                                <li className="collection-item">Jon<div
                                                    className=" secondary-content right-align">$100.00</div>
                                                </li>
                                                <li className="collection-item">Paul<div
                                                    className=" secondary-content right-align">$100.00</div>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FundraiserInfoCard;