import {ALERT_FAILURE, ALERT_SUCCESS, EDIT_OWN_PROFILE, GET_OWN_PROFILE, JWT_TOKEN_WRONG, REQUEST_SEND} from './types';

import assertResponseOk from './assertResponseOk'
import authHeader from '../helpers/auth_header';
import config from '../config';
import assertNotForbidden from "./assertNotForbidden";

export const getProfileInfo = () => {
    return async dispatch => {

        dispatch({
            type: REQUEST_SEND
        });

        try {
            const response = await fetch(`${config.API_URL}/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...authHeader()
                }
            });

            assertNotForbidden(response);
            assertResponseOk(response);

            const profileInfo = await response.json();

            setTimeout(() => {

                dispatch({
                    type: ALERT_SUCCESS,
                    payload: 'Successfully got profile information'
                });

                dispatch({
                    type: GET_OWN_PROFILE,
                    payload: profileInfo
                });

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
                payload: 'Failed to fetch profile information'
            })
        }
    };
};

export const editProfile = data => {
    return async dispatch => {

        dispatch({
            type: REQUEST_SEND
        });

        try {
            const response = await fetch(`${config.API_URL}/profile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...authHeader()
                },
                body: JSON.stringify(data)
            });

            assertNotForbidden(response);
            assertResponseOk(response);

            setTimeout(() => {

                dispatch({
                    type: ALERT_SUCCESS,
                    payload: 'Successfully edited profile'
                });

                dispatch({
                    type: EDIT_OWN_PROFILE,
                    payload: data
                });

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
                payload: 'Failed to edit profile'
            })
        }
    };
};
