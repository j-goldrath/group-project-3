import React, { useState } from 'react';
import { Form, Button } from 'react-materialize';
import { useMutation } from '@apollo/client';
import { UPDATE_FUNDRAISER } from '../utils/mutations';

const DonationForm = () => {
    const [donationFormData, setDonationFormData] = useState({ value: ''});

    const submit = useMutation(UPDATE_FUNDRAISER);

    const handleInputChange = (event) => {
        const { input, value } = event.target;
        setDonationFormData({ ...donationFormData, [input]: value })
    };

    const handlfeFormSubmit = async (event) => {
        event.preventDefault();


    }
}

return (
    <>
    <Button onSubmit={handleFormSubmit} type='submit' variant='success' size='lg'>
              Donate
            </Button>
            )