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
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

module.exports = React.createClass({
    handlePress(){
        this.props.onPress(this.props.rowData.APIName);
    },
    render() {
        //Build icon
        if(this.props.rowData.icon.iconSet == "FA") {
            var icon = ( <FAIcon name={this.props.rowData.icon.name} size={50} color="white" /> )
        }
        if(this.props.rowData.icon.iconSet == "MC") {
            var icon = ( <MCIcon name={this.props.rowData.icon.name} size={50} color="white" /> );
        }
        return (
            <TouchableOpacity style={styles.container} onPress={this.handlePress}>
                <View style={[styles.iconContainer, {backgroundColor: this.props.rowData.icon.color}]}>{icon}</View>
                <View style={styles.details} >
                    <Text style={styles.displayNameText}> {this.props.rowData.displayName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex:1,
        height:75,
        flexDirection:'row',
        marginLeft:20,
        marginTop:20
    },
    details: {
        flexDirection: 'column',
        height:75,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
    },
    iconContainer: {
        width:75,
        height:75,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    displayNameText:{
        fontSize:30,
        color:'gray',
        paddingLeft:10
    }

});
// icon: ( <View style={[styles.iconContainer, styles.accountIcon]}> <FAIcon name="table" size={30} color="white" />  </View> )