import {
    ADMIN_ADD_PRODUCT,
    ADMIN_DELETE_PRODUCT,
    ADMIN_EDIT_PRODUCT,
    ADMIN_GET_ALL_PRODUCTS,
    ADMIN_GET_PRODUCT_BY_ID,
    ALERT_FAILURE,
    ALERT_SUCCESS,
    JWT_TOKEN_WRONG,
    REQUEST_SEND
} from './types';

import assertResponseOk from './assertResponseOk'
import assertNotForbidden from './assertNotForbidden'
import authHeader from '../helpers/auth_header';

import config from '../config';

export const getAllProducts = () => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            }
        });

        assertNotForbidden(response);
        assertResponseOk(response);

        const products = await response.json();

        console.log(products);

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully got products'
            });

            dispatch({
                type: ADMIN_GET_ALL_PRODUCTS,
                payload: products
            })

        }, 1000);

    } catch (err) {
        if (err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            });
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Failed to fetch products'
        })
    }

};


export const getProductById = id => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            }
        });

        assertNotForbidden(response);
        assertResponseOk(response);

        const product = await response.json();

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully got product'
            });

            dispatch({
                type: ADMIN_GET_PRODUCT_BY_ID,
                payload: product
            })

        }, 1000);

    } catch (err) {
        if (err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            });
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Failed to fetch product'
        })
    }

};


export const addProduct = data => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/products/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
            body: JSON.stringify(data)
        });

        assertNotForbidden(response);
        assertResponseOk(response);

        const product = await response.json();

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully added product'
            });

            dispatch({
                type: ADMIN_ADD_PRODUCT,
                payload: product
            })

        }, 1000);

    } catch (err) {
        if (err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            });
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Failed to add product'
        })
    }

};


export const editProduct = (id, data) => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/products/edit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
            body: JSON.stringify(data)
        });

        console.log(response);

        assertNotForbidden(response);
        assertResponseOk(response);

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully edited product'
            });

            dispatch({
                type: ADMIN_EDIT_PRODUCT,
                payload: {
                    id,
                    data
                }
            })

        }, 1000);

    } catch (err) {
        if (err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            });
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Failed to edit product'
        })
    }

};


export const deleteProduct = id => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/products/delete/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            }
        });

        assertNotForbidden(response);
        assertResponseOk(response);

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully deleted product'
            });

            dispatch({
                type: ADMIN_DELETE_PRODUCT,
                payload: id
            })

        }, 1000);

    } catch (err) {
        if (err.name === 'ForbiddenError') {
            dispatch({
                type: JWT_TOKEN_WRONG
            });
            return;
        }

        dispatch({
            type: ALERT_FAILURE,
            payload: 'Failed to delete product'
        })
    }

};