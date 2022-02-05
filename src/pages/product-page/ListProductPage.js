import Button from 'components/buttons/Button';
import SearchInput from 'components/search-inputs/SearchInput';
import Table from 'components/tables/Table';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductAPI from 'services/product_service';
import { getResult } from 'utils/fetch';

export default function ListProductPage() {
    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const [data, response] = await ProductAPI.GetListProduct()
            if (!response.ok && response.mustRedirect) {
                return navigate(response.redirectTo)
            }

            setProducts(getResult(data).result)
        }

        fetchProducts()
    }, [navigate])

  return (
    <div className='max-width-content'>
        <h1 className='mb-6'>List Product</h1>
        <div className='mb-3 d-flex content-between items-center'>
            <LinkActions />
            <SearchInput style={{ maxWidth: '300px'}} />
        </div>
        <Table className='f-1 mb-5 max-width-content' full>
            <Table.THead>
                <Table.TRow>
                    <Table.TH>Item Number</Table.TH>
                    <Table.TH>Product Name</Table.TH>
                    <Table.TH>UOM</Table.TH>
                    <Table.TH>Code Matrial Vendor</Table.TH>
                    <Table.TH>Status</Table.TH>
                </Table.TRow>
            </Table.THead>
            <Table.TBody>
                {products.map((product, i) => (
                    <Table.TRow key={i}>
                        <Table.TD>{product.id}</Table.TD>
                        <Table.TD>{product.productName}</Table.TD>
                        <Table.TD>{product.uom}</Table.TD>
                        <Table.TD>{product.materialVendorCode}</Table.TD>
                        <Table.TD>{product.status}</Table.TD>
                    </Table.TRow>
                ))}
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