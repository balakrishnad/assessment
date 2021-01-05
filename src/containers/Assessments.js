import React, { Fragment } from 'react';

import Form from './Form';
import { INGREDIENTS, PACKAGING, FINISHED_PRODUCT } from '../utils/formioUtils';

export default () => {
    return (<Fragment>
        <h3>Ingredients Assessment</h3>
        <Form formName={INGREDIENTS} />
        <br />
        <h3>Packaging Materials Assessment</h3>
        <Form formName={PACKAGING} />
        <br />
        <h3>Finished Product Assessment</h3>
        <Form formName={FINISHED_PRODUCT} />
    </Fragment>);
};