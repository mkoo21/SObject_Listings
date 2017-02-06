'use-strict';

import React from 'react';
import {
    View,
    Text,
    ListView,
    ScrollView,
    TouchableOpacity,
    PixelRatio,
    StyleSheet
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

var RecordsList = React.createClass({
    //TODO: Searchbar
    renderRow(rowData){
        return(
            <ListRow rowData={rowData} />
        );
    },
    render(){
        if(this.props.objectDetails.icon.iconSet == 'FA'){
            var icon = ( <FAIcon name={this.props.objectDetails.icon.name} size={30} color="white" /> )
        }
        if(this.props.objectDetails.icon.iconSet == 'MC'){
            var icon = ( <MCIcon name={this.props.objectDetails.icon.name} size={30} color="white" /> )
        }
        return (
            <View style={styles.page}>
                <View style={styles.navbarPadding} />
                <View style={styles.headerRow} >
                    <View style={[styles.iconContainer, {backgroundColor: this.props.objectDetails.icon.color}]} >
                        {icon}
                    </View>
                    <Text style={styles.headerText}> {this.props.objectDetails.pluralName} </Text>
                </View>
                <ScrollView style={styles.listContainer}>
                    <ListView 
                        dataSource={ this.props.dataSource }
                        renderRow={ this.renderRow }
                        enableEmptySections={true}
                        automaticallyAdjustContentInsets={false}
                    />
                </ScrollView>
            </View>
        );
    }
});

module.exports = RecordsList;

var ListRow = React.createClass({
    render() {
        //TODO: Open detail pages
       return(
            <View>
                <TouchableOpacity style={styles.listRow} >
                    <Text style={styles.listText}>{this.props.rowData.Name}</Text>
                </TouchableOpacity>
            <View style={styles.rowDivider} />
            </View>
       ) 
    }
}); 
var styles = StyleSheet.create({
    page: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#e6e6e6'
        
    },  
    navbarPadding: {
        height:100
    },
    headerRow:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:40,
        height:50,
        paddingBottom:40
    },
    headerText: {
        color:'gray',
        fontSize:30,
        paddingLeft:10
    },
    iconContainer:{
        height:40,
        width:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    listContainer: {
        flex:1,
        marginLeft:50,
        marginRight:50,
        marginBottom:25,
        borderRadius:25,
        padding:30,
        paddingTop:-15,
        backgroundColor:'white'
    },
    listRow:{
        height:70,
        flex:1,
        justifyContent:'center'
    },
    listText:{
        fontSize:20,
        color:'darkblue',
        fontFamily:'Arial'
    },
    rowDivider:{
        height: 3 / PixelRatio.get(),
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
});