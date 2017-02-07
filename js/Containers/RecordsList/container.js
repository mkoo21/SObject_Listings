'use-strict';

import React from 'react';
import {
    ListView
} from 'react-native';
import RecordsList from '../../Presentationals/RecordsList';
import {forceClient} from 'react-native-force';

module.exports = React.createClass({
    getInitialState() {
        return{
            isFetching:true,
            dataSource: null
        }
    },
    componentDidMount() {
        if(this.props.route.APIName){
            var objectDetails = this.props.listItems[this.props.route.APIName];
            //Get 'easy' queryable fields
            var soql = "SELECT " + objectDetails.nameField + ", Id FROM " + objectDetails.APIName;
            forceClient.query(soql, (res) => {
                if(res.records.length){
                    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                    this.setState({
                        isFetching:false,
                        dataSource: ds.cloneWithRows(res.records)
                    });
                }
            }, (err) => {
                console.log("Object query failed with error: " + err);
            });
        }
    },
    render() {
        if(this.state.isFetching) return null;
        return(
            <RecordsList dataSource={this.state.dataSource} objectDetails={this.props.listItems[this.props.route.APIName]} openDetailsPage={this.props.openDetailsPage} />
        );
    }
});