import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = (props) => {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [createUser] = useMutation(CREATE_USER);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await createUser({
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            password: formState.email
        });
        const token = mutationResponse.data.createUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <form className="register-form">
            <div id="register" className="card-content">
            <div className="row">
                <div className="input-field col s12">
                <input id="firstname-register" type="text" className="validate" name="firstName" onChange={handleChange} />
                <label htmlFor="firstname-register">First Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="lastname-register" type="text" className="validate" name="lastName" onChange={handleChange} />
                <label htmlFor="lastname-register">Last Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="email-register" type="email" className="validate" name="email" onChange={handleChange} />
                <label htmlFor="email-register">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="password-register" type="password" className="validate" name="password" onChange={handleChange} />
                <label htmlFor="password-register">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <input id="confirm-password-register" type="password" className="validate" />
                <label htmlFor="confirm-password-register">Confirm Password</label>
                </div>
            </div>
            <div className="row">
                <div className="col s10 offset-s1">
                <button style={{width: '100%'}} className="btn btn-large waves-effect waves-light" type="submit" name="action" onClick={handleFormSubmit}>REGISTER</button>
                </div>
            </div>
            </div>
        </form>
    )
}


export default Signup;