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
        return {
            recordId : null,
            queryFields: {}
        }
    },
    componentWillReceiveProps(nextProps){
        if(nextProps.recordId && nextProps.recordId !== this.state.recordId){
            this.setState({
                recordId : nextProps.recordId
            });
            //easy fields (query for display value)
            var soql = "SELECT " + nextProps.objectConfig.details.join(", ") + " FROM " + nextProps.objectConfig.APIName + " WHERE Id = '" + nextProps.recordId + "'";
            forceClient.query(soql, (res) => {
                if(res.records) {
                    this.setState({
                        queryFields : res.records[0] 
                    });
                }
            }, (err) => {
                console.log("Record details query failed with error: \n" + err);
            });
        }
    },
    render() {
        if(!this.props.showDetailsPage) return null
        return(
            <DetailsPage />
        );
    }
});