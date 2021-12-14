import React from 'react';

import './FundraiserCard.css';
import charity from './charity-cleanup.jpg';
import teamSeas from './TEAMSEAS.png';
import teamTrees from './teamtrees.jpg';
import { CardTitle, Card, Row, Col } from 'react-materialize';

function FundraiserCard(props) {
    return (
        <>
        <div className="fundraiser-card">
            {/* <!-- charity/cause dashboard card component --> */}
            <Row>
                <Col offset="m3" s={12} m={6}>
                    <Card header={<CardTitle image={charity}></CardTitle>}>
                        <a href="/fundraiserInfoCard" className="card-link">
                            <span id="fundraiser-card-tile" className="card-title fundraiser-card-title">Clean Up The
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
                            {/* <!-- this is the fundraiser goal section --> */}
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
                        <a id="card-make-donation-button" href="/donate">
                                <div className="card-donate-button-wrapper green white-text">
                                    <h5 className="center-align">MAKE A DONATION</h5>
                                </div>
                        </a>

                    </Card>
                </Col>
            </Row>
        </div>

        <div className="fundraiser-card">
        {/* <!-- charity/cause dashboard card component --> */}
        <Row>
            <Col offset="m3" s={12} m={6}>
                <Card header={<CardTitle image={teamSeas}></CardTitle>}>
                    <a href="https://teamseas.org/" className="card-link">
                        <span id="fundraiser-card-tile" className="card-title fundraiser-card-title">
                            #TeamSeas
                        </span>
                        <span className="card-title fundraiser-card-subtitle">Dominican Republic</span>
                        {/* <!-- this is the fundraiser description section --> */}
                        <p className="fundraiser-card-description" id="fundraiser-card-description">
                            Every $1 is one less pound of trash in the ocean. YouTubers MrBeast and Mark Robert start Team Seas campaign that seeks to eliminate 30 million pounds of garbage from the world's waters.
                        </p>

                        {/* <!-- this is the fundraiser progress bar section --> */}
                        <div className="card-progress-bar">
                            <div id="modded">
                                <div className="progress blue lighten-4 tooltipped" data-position="top"
                                    data-tooltip="Progress was at 50% when tested">
                                    <span></span>
                                    <div id="fundraiser-card-progress" className="determinate blue"
                                        style={{ width: "61%", animation: "grow 2s" }}>61%</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- this is the fundraiser goal section --> */}
                        <div className="card-content fundraiser-card-stats-wrapper">
                            <Col className="center-align" s={6}>
                                <p id="fundraiser-card-amount-raised"><span className="fundraiser-card-stats">Raised:
                                </span>$18,177,838</p>
                            </Col>
                            <Col className="center-align" s={6}>
                                <p id="fundraiser-card-amount-goal"><span className="fundraiser-card-stats">Goal:
                                </span>$30,000,000</p>
                            </Col>
                        </div>
                    </a>

                    {/* <!-- this is the card donate button section --> */}
                    <a id="card-make-donation-button" href="https://teamseas.org/">
                            <div className="card-donate-button-wrapper green white-text">
                                <h5 className="center-align">MAKE A DONATION</h5>
                            </div>
                    </a>

                </Card>
            </Col>
        </Row>
        </div>

        <div className="fundraiser-card">
        {/* <!-- charity/cause dashboard card component --> */}
        <Row>
            <Col offset="m3" s={12} m={6}>
                <Card header={<CardTitle image={teamTrees}></CardTitle>}>
                    <a href="https://teamtrees.org/#planting-locations" className="card-link">
                        <span id="fundraiser-card-tile" className="card-title fundraiser-card-title">
                            #TeamTrees
                        </span>
                        <span className="card-title fundraiser-card-subtitle">Globally</span>
                        {/* <!-- this is the fundraiser description section --> */}
                        <p className="fundraiser-card-description" id="fundraiser-card-description">
                            $1 plants a tree. YouTubers MrBeast and Mark Robert millions state #TeamTrees to planet trees all over the world. Click the card to get the latest info on #TeamTrees latest projects.
                        </p>

                        {/* <!-- this is the fundraiser progress bar section --> */}
                        <div className="card-progress-bar">
                            <div id="modded">
                                <div className="progress blue lighten-4 tooltipped" data-position="top"
                                    data-tooltip="Progress was at 50% when tested">
                                    <span></span>
                                    <div id="fundraiser-card-progress" className="determinate blue"
                                        style={{ width: "100%", animation: "grow 2s" }}>118%</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- this is the fundraiser goal section --> */}
                        <div className="card-content fundraiser-card-stats-wrapper">
                            <Col className="center-align" s={6}>
                                <p id="fundraiser-card-amount-raised"><span className="fundraiser-card-stats">Raised:
                                </span>$23,513,423</p>
                            </Col>
                            <Col className="center-align" s={6}>
                                <p id="fundraiser-card-amount-goal"><span className="fundraiser-card-stats">Goal:
                                </span>$20,000,000</p>
                            </Col>
                        </div>
                    </a>

                    {/* <!-- this is the card donate button section --> */}
                    <a id="card-make-donation-button" href="https://teamtrees.org/">
                            <div className="card-donate-button-wrapper green white-text">
                                <h5 className="center-align">MAKE A DONATION</h5>
                            </div>
                    </a>

                </Card>
            </Col>
        </Row>
        </div>
        </>
    )
}

export default FundraiserCard;