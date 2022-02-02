import LabeledCard from 'components/cards/labeled-card/LabeledCard';
import Container from 'components/containers/Container';
import React from 'react';
import LeftLabeledInput from 'components/inputs/left-labeled-input/LeftLabeledInput';

export default function PurchaseOrderPage() {
  return (
    <div className='w-full p-3'>
        <LabeledCard label='Create Purchase Order' style={{ width: '100%' }}>
            <LeftLabeledInput label='Purchase Order Number' style={{maxWidth : '500px'}}></LeftLabeledInput>
            <LeftLabeledInput label='Purchase Order Date' type='date'></LeftLabeledInput>
            <LeftLabeledInput label='Customer Name'></LeftLabeledInput>
        </LabeledCard>
    </div>
  );
}
