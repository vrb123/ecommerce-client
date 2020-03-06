import React, {useEffect} from 'react';
import {Button, Divider, Table} from 'antd';

import {useRouteMatch} from 'react-router-dom';

import {connect} from 'react-redux';
import {deleteProduct, getAllProducts} from '../../../../actions/admin_products';

import trimToSize from '../../../../helpers/trim_to_size';

import statusMap from '../../../../hash_maps/status'

import AdminProductsListSpecTable from './AdminProductsListSpecTable'
import AdminProductActions from './AdminProductActions';
import AdminProductsListColumns from './AdminProductsListColumns';

const AdminProductsList = ({products, getAllProducts, deleteProduct}) => {

    const {path} = useRouteMatch();

    useEffect(() => {
        getAllProducts()
    }, [getAllProducts]);

    const columns = AdminProductsListColumns();

    const expandedRowRender = (record) => {
        if (!record.productSpecifications) return false;
        return <AdminProductsListSpecTable record={record}/>
    };

    const dataToRepresent = products => products.map(
        (product, i) => {
            const {name, status, description, cost, id, creator, productSpecifications} = product;

            return {
                name,
                description: trimToSize(description, 25),
                cost,
                status: statusMap[status],
                creator: creator.email,
                key: id + name + i,
                productSpecifications,
                actions: (
                    <AdminProductActions
                        id={id}
                        onDelete={deleteProduct}
                        editHref={`${path}/edit/${id}`}
                    />)
            }
        }
    );

    return (
        <Table
            columns={columns}
            bordered
            title={() => (
                <h1>Products List <Divider type="vertical"/> <Button icon="plus" href={path + "/add"} type="dashed"/>
                </h1>
            )}
            size="middle"
            pagination={false}
            expandedRowRender={expandedRowRender}
            tableLayout="fixed"
            dataSource={dataToRepresent(products)}
        />
    );
};

const mapStateToProps = state => ({
    products: state.adminProductsReducer.products
});

export default connect(mapStateToProps, {getAllProducts, deleteProduct})(AdminProductsList)