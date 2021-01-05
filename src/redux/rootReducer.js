import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth, form, forms, submission, submissions } from 'react-formio';

import * as reducers from './reducers';

export default (history) => combineReducers({
    router: connectRouter(history),
    auth: auth(),
    form: form({ name: 'form' }),
    forms: forms({ name: 'forms', query: { type: 'form' } }),
    submission: submission({ name: 'submission' }),
    submissions: submissions({ name: 'submissions' }),
    
    // Reducer for Create FSHA.
    createfsha: combineReducers({
        form: form({ name: 'createfsha' }),
        submission: submission({ name: 'createfsha' }),
        submissions: submissions({ name: 'createfsha' }),
    }),
    // Reducer for Ingredients Assessments.
    ingredientsassessments: combineReducers({
        form: form({ name: 'ingredientsassessments' }),
        submission: submission({ name: 'ingredientsassessments' }),
        submissions: submissions({ name: 'ingredientsassessments' }),
    }),
    // Reducer for Packaging Assessments.
    packagingassessments: combineReducers({
        form: form({ name: 'packagingassessments' }),
        submission: submission({ name: 'packagingassessments' }),
        submissions: submissions({ name: 'packagingassessments' }),
    }),
    // Reducer for Finished Product Assessments.
    finishedproductassessments: combineReducers({
        form: form({ name: 'finishedproductassessments' }),
        submission: submission({ name: 'finishedproductassessments' }),
        submissions: submissions({ name: 'finishedproductassessments' }),
    }),

    ...reducers,
})
