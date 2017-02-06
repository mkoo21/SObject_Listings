import {actionTypes} from './actions';
import {actionTypes as RecordsListActions} from '../RecordsList/actions';

const initialState = {
    showDetailsPage: false,
    objectConfig: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case RecordsListActions.OPEN_DETAILS_PAGE:
            return {
                ...state,
                objectConfig: action.objectDetails
            }
        case actionTypes.CLOSE_DETAILS_PAGE:
            return {
                ...state,
                showDetailsPage: false
            }
        default:
            return state;
    }
}