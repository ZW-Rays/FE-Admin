import React from 'react';
import LabeledCard from 'components/cards/labeled-card/LabeledCard';
import LeftLabeledInput from 'components/inputs/left-labeled-input/LeftLabeledInput';
import Button from 'components/buttons/Button';
import { Link } from 'react-router-dom';
import Form from 'components/forms/Form';

export default function CreateProductPage() {
    return (
        <div className='w-full'>
            <LabeledCard className='max-width-content' label='Create Product' style={{ width: '100%' }}>
                <Form>
                    <LeftLabeledInput label='Item Number' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledInput label='Product Name' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledInput label='Matrial Vendor Code' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledInput label='UOM' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledInput label='Status' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <div className='mt-6'>
                        <Button label='Save' className='mr-1' padding='.8rem 1.5rem' />
                        <Link to={'/product'}>
                            <Button label='Cancel' padding='.8rem 1.5rem'/>
                        </Link>
                    </div>
                </Form>
            </LabeledCard>
        </div>
    );
}
