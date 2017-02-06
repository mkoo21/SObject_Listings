import { connect } from 'react-redux';
import RecordsList from './RecordsListData';
import {open_details_page} from './actions';

const mapStateToProps = (state) => {
    return {
        listItems: state.MainList.listItems,
        currentObject: state.RecordsList.currentObject
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        openDetailsPage: (objectDetails) => {
            dispatch(open_details_page(objectDetails));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsList);