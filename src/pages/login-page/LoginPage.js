import Button from 'components/buttons/Button';
import Card from 'components/cards/Card';
import Form from 'components/forms/Form';
import Input from 'components/inputs/regular-input/Input';
import React from 'react';

export default function LoginPage() {
    return (
        <div className='full-screen d-flex items-center flex-column bg-grey-color1'>
            <h1 className='regular mt-8'>Masuk ke App</h1>
            <Card className='mt-3' style={{ paddingTop: '2rem', paddingBottom: '2rem' }} >
                <Form>
                    <Input className={'mb-3'} label={'Username'} />
                    <Input className={'mb-4'} type={'password'} label={'Password'} />
                    <Button label='Masuk' full />
                </Form>
            </Card>
        </div>
    )
}
