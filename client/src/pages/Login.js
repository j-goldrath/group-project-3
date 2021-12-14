// import { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

const Login = (props) => {
    // const [formState, setFormState] = useState({ email: '', password: '' });
    // const [login, { error }] = useMutation(LOGIN_USER);

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //     const mutationResponse = await login( {variables: {
    //         variables: { email: formState.email, password: formState.password },
    //     }});
    //     const token = mutationResponse.data.login.token;
    //     Auth.login(token);
    //     } catch (e) {
    //     console.log(e);
    //     }
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //     ...formState,
    //     [name]: value,
    //     });
    // };
    
    return (
        <>
            <div className="card-content grey lighten-4">
                <div className="card">
                    <form className="login-form">
                    <div id="sign-in" className="card-content">
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="email-login" type="email" className="validate" name="email" />
                            <label htmlFor="email-login">Email</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="password-login" type="password" className="validate" name="password" />
                            <label htmlFor="password-login">Password</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col s10 offset-s1">
                            <button style={{width: '100%'}} className="btn btn-large waves-effect waves-light" type="submit" name="action" >LOGIN</button>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;