import Button from 'components/buttons/Button';
import Card from 'components/cards/Card';
import Form from 'components/forms/Form';
import Input from 'components/inputs/regular-input/Input';
import ClientPath from 'paths/client_paths';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate()

    return (
        <div className='full-screen d-flex items-center flex-column bg-grey-color1'>
            <h1 className='regular mt-8'>Masuk ke App</h1>
            <Card className='mt-3' style={{ paddingTop: '2rem', paddingBottom: '2rem' }} >
                <Form onSubmit={() => navigate(ClientPath.Home)}>
                    <Input className={'mb-3'} label={'Username'} />
                    <Input className={'mb-4'} type={'password'} label={'Password'} />
                    <Button label='Masuk' type='submit' full />
                </Form>
            </Card>
        </div>
    )
}
