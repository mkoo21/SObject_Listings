import { connect } from 'react-redux';
import DetailsPage from './DetailsData';
import {close_details_page} from './actions';

const mapStateToProps = (state) => {
    return {
        listItems: state.MainList.listItems,
        showDetailsPage: state.DetailsPage.showDetailsPage,
        objectConfig: state.DetailsPage.objectConfig
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        closeDetailsPage: () => {
            dispatch(close_details_page())
        }
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(DetailsPage);