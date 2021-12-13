import { Button, Row, Col, Card, TextInput, Divider } from 'react-materialize';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import FundraiserForm from '../components/FundraiserForm';
// import CREATE or ADD _FUNDRAISER from utils

const CreateFundraiser = () => {

    return (
        <Row>
            <Col
                s={8}
            >
                <Card
                    title="Create a Fundraiser"
                >
                <Divider />
                <Row>
                {/* Text input fields */}
                    <Row>
                    <TextInput
                        id="TextInput-48"
                        label="Title"
                    />
                    </Row>
                    <Row>
                    <TextInput
                        id="TextInput-48"
                        label="Location"
                    />
                    </Row>
                    <Row>
                    <TextInput
                        id="TextInput-48"
                        label="Goal"
                    />
                    </Row>
                    <Row>
                    <h6>Description</h6>
                    <input type="text" className="browser-default" />
                    </Row>
                    <Row>
                        <p>upload image</p>
                        <TextInput
                            id="TextInput-26"
                            label="File"
                            type="file"
                        />
                    </Row>
                </Row>
                {/* Button field */}
                <Row>
                    <Col
                        m={6}
                    >
                        <Button
                            id="cancel-make-donation-button"
                            className="btn waves-effect waves-light fwb red" 
                            type="button"
                            name="action">
                            Cancel
                        </Button>
                    </Col>
                    <Col
                        m={6}
                    >
                        <Button
                            id="make-donation-button"
                            className="btn waves-effect waves-light fwb green" 
                            type="button"
                            name="action">
                            Submit
                        </Button>
                    </Col>
                </Row>
                </Card>
            </Col>
        </Row>
    );
};

export default CreateFundraiser;