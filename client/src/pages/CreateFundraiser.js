// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import FundraiserForm from '../components/FundraiserForm';
// import CREATE or ADD _FUNDRAISER from utils

const CreateFundraiser = () => {

    return (
        <div className="row">
            <div className="col s12">
            <div className="card">
                <div className="card-content">
                <div id="create-post-header">
                    <span className="card-title">Create New Fundraising Campaign</span>
                </div>
                <div id="p-divider" className="divider" />
                <div className="row create-fundraiser-button-row">
                    {/* these are the text input fields */}
                    <div className="input-field col s12 m6">
                    <input id="fundraiser-title" type="text" className="validate" />
                    <label htmlFor="fundraiser-title">Title</label>
                    </div>
                    <div className="input-field col s12 m6">
                    <input id="fundraiser-location" type="text" className="validate" />
                    <label htmlFor="fundraiser-location">Location</label>
                    </div>
                    <div className="input-field col s12 m6">
                    <input id="fundraiser-goal" type="text" className="validate" />
                    <label htmlFor="fundraiser-goal">$ Amount</label>
                    </div>
                    <div className="input-field col s12">
                    <textarea id="fundraiser-description" className="materialize-textarea" defaultValue={""} />
                    <label htmlFor="fundraiser-description">Description</label>
                    </div>
                    {/* these are the buttons */}
                    <div className="input-field col s6">
                    <button id="canel-create-fundraiser-button" className="btn waves-effect waves-light fwb red" type="button" name="action">Cancel</button>
                    </div>
                    <div className="input-field col s6">
                    <button id="create-fundraiser-button" className="btn waves-effect waves-light fwb green" type="submit" name="action">Create</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CreateFundraiser;