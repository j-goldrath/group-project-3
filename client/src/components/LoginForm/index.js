import React from 'react'
// import { useState } from 'react';
// import Auth from '../../utils/auth';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutations';

import { Button, Card, Row, TextInput, Icon } from 'react-materialize'

function LoginForm(props) {
    return (
        <>
            <Card>
                <Row>
                    <TextInput
                        email
                        id="TextInput-35"
                        label="Email"
                        validate
                    />
                </Row>
                <Row>
                    <TextInput
                    id="TextInput-40"
                    label="Password"
                    password
                    />
                </Row>
                <Row>
                    <Button
                    node="button"
                    type="submit"
                    waves="light"
                    >
                        Submit
                    <Icon right>
                        send
                    </Icon>
                    </Button>
                </Row>
            </Card>
        </>
    )
};

export default LoginForm;