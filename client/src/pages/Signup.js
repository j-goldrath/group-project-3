import { Button, Card, Row, TextInput } from 'react-materialize'
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
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
        <Card>
            <Row>
                <TextInput
                    id="TextInput-44"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                />
            </Row>
            <Row>
                <TextInput
                    id="TextInput-44"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                />
            </Row>
            <Row>
                <TextInput
                    email
                    id="TextInput-47"
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
                    Register
                </Button>
            </Row>                                 
        </Card>
    )
}


export default Signup;