import Button from 'components/buttons/Button';
import SearchInput from 'components/search-inputs/SearchInput';
import Table from 'components/tables/Table';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ListProductPage() {
  return (
    <div className='max-widht-content'>
        <h1 className='mb-6'>List Product</h1>
        <div className='mb-3 d-flex content-between items-center'>
            <LinkActions />
            <SearchInput style={{ maxWidth: '300px'}} />
        </div>
        <Table className='f-1 mb-5 max-widht-content' full>
            <Table.THead>
                <Table.TRow>
                    <Table.TH>Item Number</Table.TH>
                    <Table.TH>Product Name</Table.TH>
                    <Table.TH>UO</Table.TH>
                    <Table.TH>Code Matrial vendo</Table.TH>
                    <Table.TH>Status</Table.TH>
                </Table.TRow>
            </Table.THead>
            <Table.TBody>
                <Table.TRow>
                    <Table.TD>4100321</Table.TD>
                    <Table.TD>Magnetic</Table.TD>
                    <Table.TD>EA</Table.TD>
                    <Table.TD>28771234</Table.TD>
                    <Table.TD>Discontinue</Table.TD>
                </Table.TRow>
                <Table.TRow>
                    <Table.TD>4100321</Table.TD>
                    <Table.TD>Magnetic</Table.TD>
                    <Table.TD>EA</Table.TD>
                    <Table.TD>28771234</Table.TD>
                    <Table.TD>Discontinue</Table.TD>
                </Table.TRow>
            </Table.TBody>
        </Table>
    </div>
  );
}

function LinkActions() {
    return (
        <div>
            <Link className='mr-1' to='/product/create'>
                <Button padding='.8rem 2rem' label='Create'/>
            </Link>
            <Link to='/product/update'>
                <Button padding='.8rem 2rem' label='Update'/>
            </Link>
        </div>
    )
}