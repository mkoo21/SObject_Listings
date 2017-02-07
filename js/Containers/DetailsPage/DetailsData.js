import React from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity,
    StyleSheet,
    PixelRatio
} from 'react-native';
import {forceClient} from 'react-native-force';
import DetailsPage from '../../Presentationals/DetailsPage';

module.exports = React.createClass({
    getInitialState(){
        recordId : null
    },
    componentWillReceiveProps(nextProps){
        if(nextProps.recordId && nextProps.recordId !== this.state.recordId){
            this.setState({
                recordId : nextProps.recordId
            });
            //easy fields (query for display value)
            var soql = "SELECT " + this.props.objectConfig.details.join(", ") + " FROM " + this.props.objectConfig.APIName;
            forceClient.query(soql, (res) => {
                if(res.records) return
            }, (err) => {
                console.log("Record details query failed with error: \n" + err)
            });
        }
    },
    render() {
        
    }
});