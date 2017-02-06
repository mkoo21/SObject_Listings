import {actionTypes as MainListActions} from '../MainList/actions';

const initialState = {
    currentObject: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case MainListActions.VIEW_RECORDS:
            return {
                ...state,
                currentObject: action.APIName
            }
        default:
            return state;
    }
}