import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-formio';

import { getFormByName } from '../redux/actions/formioActions';
import { fetchState } from '../utils/formioUtils';


export default ({ formName }) => {
    const dispatch = useDispatch();
    const { form } = useSelector(state => fetchState(state, formName));

    useEffect(() => {
        // if (Object.keys(form).length === 0) {
        dispatch(getFormByName(formName));
        // }
    }, [formName]);

    return (<Form form={form} />);
};