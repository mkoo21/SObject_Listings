import { combineReducers } from 'redux';
import MainList from './Containers/MainList/reducer';
import Root from './Containers/Root/reducer';
import RecordsList from './Containers/RecordsList/reducer';
import DetailsPage from './Containers/DetailsPage/reducer';

export default combineReducers({
    MainList,
    Root,
    RecordsList,
    DetailsPage
});

