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
            queryFields: null
        }
    },
    componentWillReceiveProps(nextProps){
        if(nextProps.recordId && nextProps.recordId !== this.state.recordId){
            this.setState({
                recordId : nextProps.recordId
            });
            var fieldList = nextProps.objectConfig.details.join(", "); //easy lookup fields

            //lookup fields
            for(var i in nextProps.objectConfig.lookupFields){
                fieldList += ", " + nextProps.objectConfig.lookupFields[i].referenceName + "." + nextProps.objectConfig.lookupFields[i].nameField;
            }

            //easy fields (query for display value)
            var soql = "SELECT " + fieldList + " FROM " + nextProps.objectConfig.APIName + " WHERE Id = '" + nextProps.recordId + "'";
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
        if(!this.props.showDetailsPage || !this.state.queryFields) return null
        return(
            <DetailsPage 
                pageWidth={this.props.Dimensions.width} 
                pageHeight={this.props.Dimensions.height}
                recordInfo={this.state.queryFields}
                iconInfo={this.props.objectConfig.icon}
                closeDetailsPage={this.props.closeDetailsPage}
            />
        );
    }
});