const Login = (props) => {
    
    return (
        <>
            <div className="card-content grey lighten-4">
                <div className="card">
                    <form className="login-form">
                    <div id="sign-in" className="card-content">
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="email-login" type="email" className="validate" />
                            <label htmlFor="email-login">Email</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="password-login" type="password" className="validate" />
                            <label htmlFor="password-login">Password</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col s10 offset-s1">
                            <button style={{width: '100%'}} className="btn btn-large waves-effect waves-light" type="submit" name="action">LOGIN</button>
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