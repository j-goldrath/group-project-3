// import DonationForm from '../components/DonationForm';
function Donate(props) {

    return (
        <>
            <div className="row">
                <div className="col s12">
                <div className="card">
                    <div className="card-content">
                    <div id="create-post-header">
                        <span className="card-title">Make A Donation</span>
                    </div>
                    <div id="p-divider" className="divider" />
                    <div className="row create-fundraiser-button-row center-align">
                        {/* these are the text input fields */}
                        <div className="card-content">
                        {/* this is the fundraiser title section */}
                        <span id="fundraiser-card-tile" className="card-title fundraiser-card-title">Clean Up
                            The
                            Park</span>
                        {/* this is the fundraiser location section */}
                        <span className="card-title fundraiser-card-subtitle">Chicago, IL</span>
                        </div>
                        <div className="col s12 center-align">
                        <p>How much would you like to donate?</p>
                        </div>
                        <div className="input-field col s8 m6 offset-s2 offset-m3">
                        <input id="donation-amount" type="text" className="validate" />
                        <label htmlFor="donation-amount">$ Amount</label>
                        </div>
                        {/* these are the buttons */}
                        <div className="input-field col s6">
                        <button id="canel-make-donation-button" className="btn waves-effect waves-light fwb red" type="button" name="action">Cancel</button>
                        </div>
                        <div className="input-field col s6">
                        <button id="make-donation-button" className="btn waves-effect waves-light fwb green" type="submit" name="action">Donate</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Donate;

