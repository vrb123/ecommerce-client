import React, {useEffect, useState} from "react";

import {editProfile, getProfileInfo} from '../../../actions/profile';
import {connect} from 'react-redux';


import {Col, Result, Row} from 'antd';

import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';

const Profile = ({getProfileInfo, editProfile, profile, isLoading}) => {

    const [showEdit, toggleShowEdit] = useState(false);

    useEffect(() => {
        if (!profile || Object.keys(profile).length === 0) getProfileInfo()
    }, [getProfileInfo, profile]);


    if (profile && Object.keys(profile).length !== 0) {
        return (
            <Row type="flex" justify="center" align="middle" style={{paddingTop: '1em'}}>
                <Col xs={22}>
                    {
                        !showEdit ? <ViewProfile
                                {...profile}
                                onToggle={() => toggleShowEdit(true)}
                            />
                            :
                            <EditProfile
                                {...profile}
                                onSubmit={data => editProfile(data)}
                                onToggle={() => toggleShowEdit(false)}
                            />
                    }
                </Col>
            </Row>
        );
    }

    if (!profile && !isLoading)
        return <Result title="Error"/>;

    return null;
};

const mapStateToProps = state => ({
    profile: state.profileReducer,
    isLoading: state.loadingReducer.isLoading
});

export default connect(mapStateToProps, {getProfileInfo, editProfile})(Profile);