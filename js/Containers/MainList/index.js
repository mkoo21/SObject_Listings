import { connect } from 'react-redux';
import MainList from '../../Presentationals/MainList';
import {view_records} from './actions';


const mapStateToProps = (state) => {
    return {
        listItems: state.MainList.listItems,
        windowWidth: state.Root.windowWidth
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        viewRecords: (APIName) => {
            dispatch(view_records(APIName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainList);