import Button from 'components/buttons/Button';
import LabeledCard from 'components/cards/labeled-card/LabeledCard';
import ErrorMessage from 'components/errors-message/ErrorMessage';
import Form from 'components/forms/Form';
import LeftLabeledInput from 'components/inputs/left-labeled-input/LeftLabeledInput';
import Table from 'components/tables/Table';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreateTravelDocumentPage() {
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setErrors({})

        const errors = {}
        const input = e.target 

        if (input.id.value === '') {
            errors.id = 'id cannot be empty'
        }

        if (input.customerName.value === '') {
            errors.customerName = 'customerName cannot be empty'
        }


        if (Object.keys(errors).length > 0) {
            setErrors(prev => ({ ...prev, ...errors }))
            return
        }

        console.log('HITTING API')

        // hit api insert ...
    }

  return (
    <div className='w-full p-3'>
        <LabeledCard label='Travel Document'>
            <Form onSubmit={handleSubmit}>
                <LeftLabeledInput name={'id'} label='ID' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}} isValidation></LeftLabeledInput>
                <ErrorMessage message={errors.id}/>
                <LeftLabeledInput name={'customerName'} label='Customer Name' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}></LeftLabeledInput>
                <ErrorMessage message={errors.customerName}/>
                <LeftLabeledInput name={'deliveryDate'} label='Delivery Date' type='date' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}></LeftLabeledInput>
                <LeftLabeledInput name={'poNumber'} label='PO Number' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}></LeftLabeledInput>
                <LeftLabeledInput name={'description'} label='Description' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}></LeftLabeledInput>
                <LeftLabeledInput name={'driver'} label='Driver' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}></LeftLabeledInput>
                <div>
                    <Table className='f-1 mb-5 mt-5 max-width-content'>
                        <Table.THead>
                            <Table.TRow>
                                <Table.TH>Item Number</Table.TH>
                                <Table.TH>Item Name</Table.TH>
                                <Table.TH>Quantity</Table.TH>
                                <Table.TH>UOM</Table.TH>
                            </Table.TRow>
                        </Table.THead>
                        <Table.TBody>
                            <Table.TRow>
                                <Table.TD>100023</Table.TD>
                                <Table.TD>Magnetic Gasket 1</Table.TD>
                                <Table.TD>40</Table.TD>
                                <Table.TD>EA</Table.TD>
                            </Table.TRow>
                            <Table.TRow>
                                <Table.TD>778123</Table.TD>
                                <Table.TD>Magnetic Gasket 2</Table.TD>
                                <Table.TD>100</Table.TD>
                                <Table.TD>EA</Table.TD>
                            </Table.TRow>
                            <Table.TRow>
                                <Table.TD>776614</Table.TD>
                                <Table.TD>Magnetic Gasket 4</Table.TD>
                                <Table.TD>150</Table.TD>
                                <Table.TD>EA</Table.TD>
                            </Table.TRow>
                        </Table.TBody>
                    </Table>
                </div>
                <div className='mt-6'>
                    <Button label='Update' className='mr-1' padding='.8rem 1.5rem' type='submit' />
                    <Link to={'/travel-document'}>
                        <Button label='Cancel' padding='.8rem 1.5rem'/>
                    </Link>
                </div>
            </Form>
        </LabeledCard>
    </div>
  );
}
