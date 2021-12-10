import React, { useState } from 'react';
import { Form, Button } from 'react-materialize';
import { useMutation } from '@apollo/client';
import { UPDATE_FUNDRAISER } from '../utils/mutations';

const DonationForm = () => {
    const [donationFormData, setDonationFormData] = useState({ value: '' });

    const submit = useMutation(UPDATE_FUNDRAISER);

    const handleInputChange = (event) => {
        const { input, value } = event.target;
        setDonationFormData({ ...donationFormData, [input]: value })
    };

    const handlfeFormSubmit = async (event) => {
        event.preventDefault();


    }
}

return (
    <>
        <div class="row">
            <div class="col s12">
                <div class="card">
                    <div class="card-content">
                        <div id="create-post-header">
                            <span class="card-title">Make A Donation</span>
                        </div>
                        <div id="p-divider" class="divider"></div>
                        <div class="row create-fundraiser-button-row center-align">
                            <div class="card-content">
                                <span id="fundraiser-card-tile" class="card-title fundraiser-card-title">Clean Up
                                    The
                                    Park</span>
                                <span class="card-title fundraiser-card-subtitle">Chicago, IL</span>

                            </div>

                            <div class="col s12 center-align">
                                <p>How much would you like to donate?</p>
                            </div>
                            <div class="input-field col s8 m6 offset-s2 offset-m3">
                                <input id="donation-amount" type="text" class="validate">
                                    <label for="donation-amount">$ Amount</label>
                            </div>

                            <div class="input-field col s6">
                                <button id="canel-make-donation-button"
                                    class="btn waves-effect waves-light fwb red" type="button"
                                    name="action">Cancel</button>
                            </div>

                            <div class="input-field col s6">
                                <button class="btn waves-effect waves-light fwb green" type='submit' onSubmit={handleFormSubmit} name="action" id="make-donation-button">
                                    Donate</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    </main >
)