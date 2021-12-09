// import Auth from '../../utils/auth';
// import { useMutation, useQuery } from '@apollo/client';
// import { GET_FUNDRAISER } from '../../utils/queries';

<div class="row">
    <div class="col s12 m6 offset-m3">
        <div class="card">
            <a href="#" class="card-link">
                <div class="card-image">
                    <img src="../assets/images/charity-cleanup.jpg" />
                </div>

                <div class="card-content">
                    <span id="fundraiser-card-tile" class="card-title fundraiser-card-title">
                        Clean Up The Park
                    </span>
                    <span class="card-title fundraiser-card-subtitle">Chicago, IL</span>                               
                    <p id="fundraiser-card-description">
                        We are raising funds to help cleanup and revitalize the neighborhood park. If we all chip in a little bit we can make this neighborhood a better place to live.
                    </p>
                </div>
                <div class="card-progress-bar">
                    <div id="modded">
                        <div class="progress blue lighten-4 tooltipped" data-position="top"
                            data-tooltip="Progress was at 50% when tested">
                            <span></span>
                            <div id="fundraiser-card-progress" class="determinate blue"
                                style="width: 20%; animation: grow 2s;">20%</div>
                        </div>
                    </div>
                </div>
                <div class="card-content fundraiser-card-stats-wrapper">
                    <div class="col s6 center-align">
                        <p id="fundraiser-card-amount-raised"><span class="fundraiser-card-stats">Raised:
                            </span>$10,000</p>
                    </div>
                    <div class="col s6 center-align">
                        <p id="fundraiser-card-amount-goal"><span class="fundraiser-card-stats">Goal:
                            </span>$50,000</p>
                    </div>
                </div>
            </a>
            <a id="card-make-donation-button" href="#">
                <div class="green white-text">
                    <div class="card-donate-button-wrapper">
                        <h5 class="center-align">MAKE A DONATION</h5>
                    </div>
                </div>
            </a>

        </div>
    </div>
</div>