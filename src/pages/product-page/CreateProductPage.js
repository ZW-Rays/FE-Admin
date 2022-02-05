import React, { useState } from 'react';
import LabeledCard from 'components/cards/labeled-card/LabeledCard';
import LeftLabeledInput from 'components/inputs/left-labeled-input/LeftLabeledInput';
import Button from 'components/buttons/Button';
import { Link } from 'react-router-dom';
import Form from 'components/forms/Form';
import useFormValidation from 'hooks/useFormValidation';
import LeftLabeledSelect from 'components/selects/left-labeled-select/LeftLabeledSelect';

export default function CreateProductPage() {
    const [setValidation, getError] = useFormValidation()

    /*
        State untuk menampung data dari Select
    */
    const [status, setStatus] = useState('')

    /* 
        Data ini biasanya di dapat di API
    */
    const data = [
        {
            label: 'Active',
            value: 'A'
        },
        {
            label: 'In Active',
            value: 'I'
        },
        {
            label: 'Discontinue',
            value: 'D'
        }
    ] 

    /*
        Print hasil
    */
    console.log(status)

    const handleSubmit = e => {
        e.preventDefault()

        const input = e.target
        const doSetErrors = setValidation(appendError => productValidations(appendError, input))

        if (doSetErrors()) return

        console.log('FETCHING API')
    }


    return (
        <div className='w-full'>
            <LabeledCard className='max-width-content' label='Create Product' style={{ width: '100%' }}>
                <Form onSubmit={handleSubmit}>
                    <LeftLabeledInput name={'itemNumber'} label='Item Number' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <span>{getError('itemNumber')}</span>
                    <LeftLabeledInput name={'productName'} label='Product Name' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <span>{getError('productName')}</span>
                    <LeftLabeledInput label='Matrial Vendor Code' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledInput label='UOM' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledSelect 
                        label='Status' 
                        labelWidth='20rem' 
                        data={data}
                        defaultValue='D'
                        className='mb-1' 
                        style={{maxWidth:'550px'}} 
                        onChange={(value) => setStatus(value.value)} 
                    />
                    <div className='mt-6'>
                        <Button label='Save' className='mr-1' padding='.8rem 1.5rem' type='submit' />
                        <Link to={'/product'}>
                            <Button label='Cancel' padding='.8rem 1.5rem'/>
                        </Link>
                    </div>
                </Form>
            </LabeledCard>
        </div>
    );
}

function productValidations(appendError, input) {
    if (input.itemNumber.value === '') {
        appendError('itemNumber', 'item number cannot be empty')
    }

    if (input.productName.value === '') {
        appendError('productName', 'product name cannot be empty')
    }
}
