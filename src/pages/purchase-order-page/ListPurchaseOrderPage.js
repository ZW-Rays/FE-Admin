import Button from 'components/buttons/Button';
import Pagination from 'components/paginations/Pagination';
import SearchInput from 'components/search-inputs/SearchInput';
import Table from 'components/tables/Table';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ListPurchaseOrderPage() {
  return (
    <div className='max-width-content'>
      <h1 className='mb-6'>List Purchase Order</h1>
      <div className='mb-3 d-flex content-between items-center'>
        <LinkActions />
        <SearchInput style={{ maxWidth: '300px' }} />
      </div>
      <Table className='f-1 mb-5 max-width-content' full>
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
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
          <Table.TRow>
            <Table.TD>4100321</Table.TD>
            <Table.TD>PT Jaya Abadi</Table.TD>
            <Table.TD>Closed</Table.TD>
            <Table.TD>12-12-22</Table.TD>
            <Table.TD>Description</Table.TD>
          </Table.TRow>
        </Table.TBody>
      </Table>

      <Pagination 
        totalPage={20}
        currentPage={1}
        startPage={1}
        limit={10}
      />
    </div>
  );
}

function LinkActions() {
  return (
    <div>
      <Link className='mr-1' to='/purchase-order/create'>
        <Button 
          padding='.8rem 2rem'
          label='Create'/>
      </Link>
      <Link to='/update'>
        <Button
            className='mr-1' 
            padding='.8rem 2rem'
            label='Update'/>
      </Link>
      <Link to='/generate-qr'>
        <Button
            className='mr-1' 
            padding='.8rem 2rem'
            label='Generate QR'/>
      </Link>
      <Link to='/import'>
        <Button 
            padding='.8rem 2rem'
            label='Import'/>
      </Link>
    </div>
  )
}