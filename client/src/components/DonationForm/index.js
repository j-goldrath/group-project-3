import { Button, Row, Col, Card, TextInput, Divider } from 'react-materialize';
import './index.css';
// import { useEffect } from 'react';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';

// const stripePromise

const DonationForm = () => {
    // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT)

    // useEffect(() => {
    //     if (data) {
    //         stripePromise.then((res) => {
    //             res.redirectToCheckout({ sessionId: data.checkout.session });
    //         });
    //     }
    // }, [data]);

    // function submitCheckout() {
        
    // }

    return (
        <Row>
            <Col
                s={8}
            >
                <Card
                    title="Make a Donation"
                >
                    <Divider />
                    <Row className="row create-fundraiser-button-row center-align">
                        {/* Fundraiser title section */}
                        <h4>Clean Up The Park</h4>
                        {/*this is the fundraiser location section*/}
                        <h5>Chicago, IL</h5>
                        <h6>How much would you like to donate?</h6>
                        <Row>
                        <TextInput
                            id="TextInput-48 donation-amount"
                            label="$ Amount"
                        />
                        </Row>
                        {/* Buttons on form */}
                        <Row>
                            <Col
                                m={6}
                                s={1}
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
                                s={1}
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
                    </Row>
                </Card>
            </Col>
        </Row>
    );
};

export default DonationForm;
