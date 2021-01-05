import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoot, Form } from 'react-formio';

import { getCreateForm } from '../redux/actions/formioActions';


export default () => {
    const dispatch = useDispatch();
    const { form } = useSelector(state => selectRoot('form', selectRoot('createfsha', state)));

    useEffect(() => {
        if (Object.keys(form).length === 0) {
            dispatch(getCreateForm());
        }
    }, []);

    return (<div>
        <div>
            <h2><b style={{ fontWeight: '600' }}>Create New FSHA</b></h2>
        </div>
        <br />
        <Form form={form} />
    </div>);
};