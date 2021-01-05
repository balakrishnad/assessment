// Utility functions and constants for formio implementation...
import { selectRoot } from 'react-formio';

export const FORM = 'form';
export const CREATE_FSHA = 'createfsha';
export const INGREDIENTS = 'ingredientsassessments';
export const PACKAGING = 'packagingassessments';
export const FINISHED_PRODUCT = 'finishedproductassessments';

export const fetchState = (state, formName) => {
    return selectRoot(FORM, selectRoot(formName, state));
}
