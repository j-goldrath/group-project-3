import { useState } from 'react';
import Auth from '../../utils/auth';
import { Form, Button } from 'react-materialize';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';

const SignupForm = () => {
    const [userFormData, setUserFormData] = useState({ firstname: '', lastname: '', email: '', password: '' });
    const [validated] = useState(false);
    
    const [createUser] = useMutation(CREATE_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await createUser({
                variables: { ...userFormData }
            });

            Auth.login(data.createUser.token)
        } catch (error) {
            console.error(error);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit} class="register-form">
            <Form.Group>
                    <Form.Label htmlFor="firstname">First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        onChange={handleInputChange}
                        value={userFormData.firstname}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="lastname">Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        onChange={handleInputChange}
                        value={userFormData.lastname}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                    />
                <Form.Control.Feedback type="invalid">
                    Email is required!
                </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Password"
                        name="password"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                <Form.Control.Feedback type="invalid">
                    Password is require!
                </Form.Control.Feedback>
                </Form.Group>
                
                <Button
                    disabled={!(userFormData.firstname && userFormData.lastname && userFormData.email && userFormData.password)}
                    type="submit"
                >
                    Sign Up
                </Button>
            </Form>
        </>
    );
};

export default SignupForm;