import { connect } from 'react-redux';
import RecordsList from './container';
import {open_details_page} from './actions';

const mapStateToProps = (state) => {
    return {
        listItems: state.MainList.listItems,
        currentObject: state.RecordsList.currentObject
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        openDetailsPage: (objectDetails, recordId) => {
            dispatch(open_details_page(objectDetails, recordId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsList);