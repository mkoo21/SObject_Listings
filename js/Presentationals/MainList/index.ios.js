'use-strict';

import React from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity,
    StyleSheet,
    PixelRatio
} from 'react-native';
import ListRow from './ListRow';
import RecordsList from '../../Containers/RecordsList';

var MainList = React.createClass({
    getInitialState() {
        return {
            isFetching: true,
            dataSource: null
        }
    },
    componentWillReceiveProps(nextProps){
        if(nextProps.listItems !== this.state.dataSource){
            var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2} )
            this.setState({
                isFetching: false,
                dataSource: ds.cloneWithRows(Object.keys(nextProps.listItems))
            })
        }
    },
    viewRecords(APIName){
        this.props.navigator.push({
            title:"",
            component: RecordsList,
            APIName,
            //Buttons go here
        })
    },
    renderRow(rowData){
        return <ListRow rowData={this.props.listItems[rowData]} onPress={this.viewRecords} />;
    },
    render() {
        if(this.state.isFetching) return null
        return(
            <View style={styles.page}> 
                <View style={styles.navbarPadding} />
                <View style={styles.row}>
                    <Text style={styles.headerText}> Standard Objects </Text>
                </View>
                <View style={styles.listContainer} >
                    <ListView 
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        enableEmptySections={true}
                        automaticallyAdjustContentInsets={false}
                    />
                </View>
            </View>
        );
    }
});

module.exports = MainList;

var styles = StyleSheet.create({
    page: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#e6e6e6'
        
    },  
    navbarPadding: {
        height:80
    },
    row: {
        flexDirection:'row',
        height:60,
        alignItems:'center'
    },
    rowApart: {
        flexDirection:'row',
        height:60,
        justifyContent:'space-between'
    },
    headerText: {
        color:'gray',
        fontSize:30,
        paddingLeft:30
    },
    listContainer: {
        flex:1,
        marginLeft:25,
        marginRight:25,
        marginBottom:25,
        borderRadius:25,
        backgroundColor:'white'
    },
    topBorder: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: 3 / PixelRatio.get()
    },
});