import React, { useEffect, useState } from 'react';
import LabeledCard from 'components/cards/labeled-card/LabeledCard';
import LeftLabeledInput from 'components/inputs/left-labeled-input/LeftLabeledInput';
import Button from 'components/buttons/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Form from 'components/forms/Form';
import ClientPath from 'paths/client_paths';
import ErrorMessage from 'components/errors-message/ErrorMessage';
import useFormValidation from 'hooks/useFormValidation';
import ProductAPI from 'services/product_service';
import { getResult } from 'utils/fetch';

export default function UpdateProductPage() {
    const [setValidation, getError, isError] = useFormValidation()
    let data = {}
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState({
        itemNumber:'',
        productName : '',
        materialVendorCode : '',
        uom : '',
        status : ''
    })

    useEffect(() => {
        const fetchProductsDetail = async () => {
            const [data, response] = await ProductAPI.GetDetailProduct(id)
            if (!response.ok && response.mustRedirect) {
                return navigate(response.redirectTo)
            }

            setProduct(getResult(data))
        }

        fetchProductsDetail()
    })
    
    const handleChange = e => {
        e.preventDefault()

        const input = e.target
        //set New Value
        setProduct({...product, [input.name]: input.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        const input = e.target

        const doSetErrors = setValidation(appendError => productValidations(appendError, input))

        if (doSetErrors()) return

        data = {
            itemNumber : input.itemNumber.value,
            productName : input.productName.value,
            materialVendorCode : input.materialVendorCode.value,
            uom : input.uom.value,
            status : input.status.value
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        const fetchUpdateProduct = async () => {
            const [, response] = await ProductAPI.UpdateProduct(data, headers)
            if (response.ok) {
                return navigate(ClientPath.ListProduct)
            }
        }
        fetchUpdateProduct()
    }

    return (
        <div className='w-full'>
            <LabeledCard className='max-width-content' label='Update Product' style={{ width: '100%' }}>
                <Form onSubmit={handleSubmit}>
                <LeftLabeledInput name={'itemNumber'} label='Item Number' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} readOnly value={product.id} onChange={handleChange} />
                    <ErrorMessage message={getError('itemNumber')} isError={isError('itemNumber')} />
                    <LeftLabeledInput name={'productName'} label='Product Name' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}  value={product.productName} onChange={handleChange} />
                    <ErrorMessage message={getError('productName')} isError={isError('productName')}/>
                    <LeftLabeledInput name={'materialVendorCode'} label='Material Vendor Code' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} value={product.materialVendorCode} onChange={handleChange} />
                    <ErrorMessage message={getError('materialVendorCode')} isError={isError('materialVendorCode')}/>
                    <LeftLabeledInput name={'uom'} label='UOM' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} value={product.uom} onChange={handleChange} />
                    <LeftLabeledInput name={'status'} label='Status' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} value={product.status} onChange={handleChange} />
                    <div className='mt-6'>
                        <Button label='Update' className='mr-1' padding='.8rem 1.5rem' type='submit'/>
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
    if (input.productName.value === '') {
        appendError('productName', 'product name cannot be empty')
    } else if (input.productName.value.length > 150) {
        appendError('productName', 'product name cannot exceed 150 characters in length')
    }

    if (input.materialVendorCode.value === '') {
        appendError('materialVendorCode', 'material vendor code cannot be empty')
    } else if (input.materialVendorCode.value.length > 50) {
        appendError('materialVendorCode', 'material vendor code cannot exceed 50 characters in length')
    }
}
