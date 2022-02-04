import LabeledCard from 'components/cards/labeled-card/LabeledCard';
import React from 'react';
import LeftLabeledInput from 'components/inputs/left-labeled-input/LeftLabeledInput';
import Table from 'components/tables/Table';
import Button from 'components/buttons/Button';
import { Link } from 'react-router-dom';

export default function PurchaseOrderPage() {
  return (
    <div className='w-full p-3'>
        <LabeledCard label='Create Purchase Order' style={{ width: '100%' }}>
            <LeftLabeledInput label='Purchase Order Number' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}></LeftLabeledInput>
            <LeftLabeledInput label='Purchase Order Date' type='date' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}></LeftLabeledInput>
            <LeftLabeledInput label='Customer Name' labelWidth='20rem' className='mb-1' style={{maxWidth:'550px'}}></LeftLabeledInput>
            <div>
            <Table className='f-1 mb-5 mt-5' style={{ maxWidth: '1500px' }} full>
              <Table.THead>
                <Table.TRow>
                  <Table.TH>PO Number</Table.TH>
                  <Table.TH>Customer Name</Table.TH>
                  <Table.TH>Status</Table.TH>
                  <Table.TH>Last Updated Date</Table.TH>
                  <Table.TH>Description</Table.TH>
                </Table.TRow>
              </Table.THead>
              <Table.TBody>
                <Table.TRow>
                  <Table.TD>4100321</Table.TD>
                  <Table.TD>PT Jaya Abadi</Table.TD>
                  <Table.TD>Closed</Table.TD>
                  <Table.TD>12-12-22</Table.TD>
                  <Table.TD>Description</Table.TD>
                </Table.TRow>
              </Table.TBody>
            </Table>
            </div>
            <div>
              <Button label='Save' className='mr-1' padding='.8rem 1.5rem' />
              <Link to={'/purchase-order'}>
                <Button label='Cancel' padding='.8rem 1.5rem'/>
              </Link>
            </div>
        </LabeledCard>
    </div>
  );
}
