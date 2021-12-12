import { Button, Card, Row, TextInput } from 'react-materialize';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password},
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <>
            <Card>
                <Row>
                    <TextInput
                        email
                        id="TextInput-35"
                        label="Email"
                        name="email"
                        onChange={handleChange}
                        validate
                    />
                </Row>
                <Row>
                    <TextInput
                        id="TextInput-40"
                        label="Password"
                        name="password"
                        onChange={handleChange}
                        password
                    />
                </Row>
                <Row>
                    <Button
                    node="button"
                    type="submit"
                    waves="light"
                    onClick={handleFormSubmit}
                    >
                        Login
                    </Button>
                </Row>
            </Card>
        </>
    )
};

export default Login;