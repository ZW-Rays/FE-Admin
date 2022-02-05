import React, { useState } from 'react';
import LabeledCard from 'components/cards/labeled-card/LabeledCard';
import LeftLabeledInput from 'components/inputs/left-labeled-input/LeftLabeledInput';
import Button from 'components/buttons/Button';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'components/forms/Form';
import useFormValidation from 'hooks/useFormValidation';
import LeftLabeledSelect from 'components/selects/left-labeled-select/LeftLabeledSelect';
import ErrorsMessage from 'components/errors-message/ErrorMessage';
import ProductAPI from 'services/product_service';
import ClientPath from 'paths/client_paths';

export default function CreateProductPage() {
    const [setValidation, getError, isError] = useFormValidation()
    let data = {}
    const navigate = useNavigate()

    /*
        State untuk menampung data dari Select
    */
    const [status, setStatus] = useState('')

    /* 
        Data ini biasanya di dapat di API
    */
    const dataSelect = [
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

        data = {
            itemNumber : input.itemNumber.value,
            productName : input.productName.value,
            materialVendorCode : input.matrialVendorCode.value,
            uom : input.uom.value,
            status : input.status.value
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        const fetchCreateProduct = async () => {
            const [, response] = await ProductAPI.CreateProduct(data, headers)
            if (response.ok) {
                return navigate(ClientPath.ListProduct)
            }
        }
        fetchCreateProduct()
    }


    return (
        <div className='w-full'>
            <LabeledCard className='max-width-content' label='Create Product' style={{ width: '100%' }}>
                <Form onSubmit={handleSubmit}>
                    <LeftLabeledInput name={'itemNumber'} label='Item Number' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <ErrorsMessage message={getError('itemNumber')} isError={isError('itemNumber')} />
                    <LeftLabeledInput name={'productName'} label='Product Name' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <span>{getError('productName')}</span>
                    <LeftLabeledInput label='Matrial Vendor Code' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledInput label='UOM' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledSelect 
                        label='Status' 
                        labelWidth='20rem' 
                        data={dataSelect}
                        defaultValue='D'
                        className='mb-1' 
                        style={{maxWidth:'550px'}} 
                        onChange={(value) => setStatus(value.value)} 
                    />
                    <ErrorsMessage message={getError('productName')} isError={isError('productName')}/>
                    <LeftLabeledInput name={'matrialVendorCode'} label='Matrial Vendor Code' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <ErrorsMessage message={getError('matrialVendorCode')} isError={isError('matrialVendorCode')}/>
                    <LeftLabeledInput name={'uom'} label='UOM' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
                    <LeftLabeledInput name={'status'} label='Status' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} />
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
    } else if (input.itemNumber.value.length > 20) {
        appendError('itemNumber', 'item number cannot exceed 20 characters in length')
    }

    if (input.productName.value === '') {
        appendError('productName', 'product name cannot be empty')
    } else if (input.productName.value.length > 150) {
        appendError('productName', 'product name cannot exceed 150 characters in length')
    }

    if (input.matrialVendorCode.value === '') {
        appendError('matrialVendorCode', 'matrial vendor code cannot be empty')
    } else if (input.matrialVendorCode.value.length > 50) {
        appendError('matrialVendorCode', 'matrial vendor code cannot exceed 50 characters in length')
    }

}
