import Button from 'components/buttons/Button';
import SearchInput from 'components/search-inputs/SearchInput';
import Table from 'components/tables/Table';
import React from 'react';
import { Link } from 'react-router-dom';

export default function listTravelDocumentPage() {
  return (
  <div className='max-width-content'>
      <h1 className='mb-6'>List Travel Document</h1>
      <div className='mb-3 d-flex content-between items-center'>
          <LinkActions />
          <SearchInput style={{ maxWidth: '300px'}} />
      </div>
      <Table className='f-1 mb-5 max-width-content' full>
            <Table.THead>
                <Table.TRow>
                    <Table.TH>ID</Table.TH>
                    <Table.TH>Customer Name</Table.TH>
                    <Table.TH>PO Number</Table.TH>
                    <Table.TH>Description</Table.TH>
                </Table.TRow>
            </Table.THead>
            <Table.TBody>
                <Table.TRow>
                    <Table.TD>SRJ-12345</Table.TD>
                    <Table.TD>PT Jaya Abadi</Table.TD>
                    <Table.TD>778124</Table.TD>
                    <Table.TD>Description</Table.TD>
                </Table.TRow>
                <Table.TRow>
                    <Table.TD>SRJ-12362</Table.TD>
                    <Table.TD>PT Jaya Makmur</Table.TD>
                    <Table.TD>887152</Table.TD>
                    <Table.TD>Description</Table.TD>
                </Table.TRow>
            </Table.TBody>
        </Table>
  </div>);
}

function LinkActions() {
    return (
        <div>
            <Link className='mr-1' to='/travel-document/create'>
                <Button padding='.8rem 2rem' label='New' disabled={true}/>
            </Link>
            <Link className='mr-1' to='/travel-document/detail'>
                <Button padding='.8rem 2rem' label='Detail' />
            </Link>
            <Link to='/travel-document/download'>
                <Button padding='.8rem 2rem' label='Download' disabled={true}/>
            </Link>
        </div>
    )
}
