import React from 'react';

import './FundraiserCard.css';
import charity from './charity-cleanup.jpg';
import { CardTitle, Card, Row, Col } from 'react-materialize';

function FundraiserCard(props) {
    return (
        <div className="fundraiser-card">
            {/* <!-- charity/cause dashboard card component --> */}
            <Row>
                <Col offset="m3" s={12} m={6}>
                    <Card header={<CardTitle image={charity}></CardTitle>}>
                        <a href="#" className="card-link">
                            <span id="fundraiser-card-tile" class="card-title fundraiser-card-title">Clean Up The
                                Park</span>
                            <span className="card-title fundraiser-card-subtitle">Chicago, IL</span>
                            {/* <!-- this is the fundraiser description section --> */}
                            <p className="fundraiser-card-description" id="fundraiser-card-description">We are raising funds to help cleanup and revitalize the neighborhood park. If we all chip in a little bit we can make this neighborhood a better place to live.</p>

                            {/* <!-- this is the fundraiser progress bar section --> */}
                            <div className="card-progress-bar">
                                <div id="modded">
                                    <div className="progress blue lighten-4 tooltipped" data-position="top"
                                        data-tooltip="Progress was at 50% when tested">
                                        <span></span>
                                        <div id="fundraiser-card-progress" className="determinate blue"
                                            style={{ width: "20%", animation: "grow 2s" }}>20%</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- this is the funsraiser goal section --> */}
                            <div className="card-content fundraiser-card-stats-wrapper">
                                <Col className="center-align" s={6}>
                                    <p id="fundraiser-card-amount-raised"><span className="fundraiser-card-stats">Raised:
                                    </span>$10,000</p>
                                </Col>
                                <Col className="center-align" s={6}>
                                    <p id="fundraiser-card-amount-goal"><span className="fundraiser-card-stats">Goal:
                                    </span>$50,000</p>
                                </Col>
                            </div>
                        </a>

                        {/* <!-- this is the card donate button section --> */}
                        <a id="card-make-donation-button" href="#">
                                <div className="card-donate-button-wrapper green white-text">
                                    <h5 className="center-align">MAKE A DONATION</h5>
                                </div>
                        </a>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default FundraiserCard;