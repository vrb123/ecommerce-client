import {
    ADMIN_ADD_SPECIFICATION,
    ADMIN_DELETE_SPECIFICATION,
    ADMIN_EDIT_SPECIFICATION,
    ADMIN_GET_ALL_SPECIFICATIONS,
    ADMIN_GET_SPECIFICATION_BY_ID,
    ALERT_FAILURE,
    ALERT_SUCCESS,
    JWT_TOKEN_WRONG,
    REQUEST_SEND
} from './types';
import config from '../config';
import assertResponseOK from './assertResponseOk';
import assertNotForbidden from './assertNotForbidden';
import authHeader from '../helpers/auth_header';


export const getSpecifications = () => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/specifications`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
        });

        assertNotForbidden(response);
        assertResponseOK(response);

        const specifications = await response.json();

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully got specifications'
            });

            dispatch({
                type: ADMIN_GET_ALL_SPECIFICATIONS,
                payload: specifications
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
            payload: 'Failed to fetch specifications'
        })
    }
};

export const getSpecificationById = id => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/specifications/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
        });

        assertNotForbidden(response);
        assertResponseOK(response);

        const specification = await response.json();

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully got specification'
            });

            dispatch({
                type: ADMIN_GET_SPECIFICATION_BY_ID,
                payload: specification
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
            payload: 'Failed to fetch specification'
        })
    }
};

export const addSpecification = data => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/specifications/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
            body: JSON.stringify(data)
        });

        assertNotForbidden(response);
        assertResponseOK(response);

        const specification = await response.json();

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully added specification'
            });

            dispatch({
                type: ADMIN_ADD_SPECIFICATION,
                payload: specification
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
            payload: 'Failed to add specification'
        })
    }
};

export const editSpecification = (id, data) => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/specifications/edit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            },
            body: JSON.stringify(data)
        });

        assertNotForbidden(response);
        assertResponseOK(response);

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully edited specification'
            });

            dispatch({
                type: ADMIN_EDIT_SPECIFICATION,
                payload: {
                    id, data
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
            payload: 'Failed to edit specification'
        })
    }
};


export const deleteSpecification = id => async dispatch => {

    dispatch({
        type: REQUEST_SEND
    });

    try {
        const response = await fetch(`${config.API_URL}/admin/specifications/delete/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...authHeader()
            }
        });

        assertNotForbidden(response);
        assertResponseOK(response);

        setTimeout(() => {

            dispatch({
                type: ALERT_SUCCESS,
                payload: 'Successfully deleted specification'
            });

            dispatch({
                type: ADMIN_DELETE_SPECIFICATION,
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
            payload: 'Failed to delete specification'
        })
    }
};