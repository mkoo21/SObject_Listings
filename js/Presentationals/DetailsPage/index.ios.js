'use-strict';

import React from 'react';
import {
    View,
    Text,
    ListView,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    PixelRatio
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

var DetailsPage = React.createClass({
    handlePress(){
        return
    },
    render() {
        if(this.props.iconInfo.iconSet == 'FA'){
            var icon = (<FAIcon name={this.props.iconInfo.name} size={50} color="white" />)
        }
        if(this.props.iconInfo.iconSet == 'MC'){
            var icon = (<MCIcon name={this.props.iconInfo.name} size={50} color="white" />)
        }
        return (
            <View style={[styles.page, {height: this.props.pageHeight, width: this.props.pageWidth}]}>
                <TouchableOpacity style={[styles.page, {height: this.props.pageHeight, width: this.props.pageWidth}]} onPress={this.handlePress} />
                <View style={[
                    styles.popup, {
                        height: Math.min(600, this.props.pageWidth * 2 / 3),
                        width: Math.min(600, this.props.pageWidth * 2 / 3)
                    }]} >
                    <ScrollView style={{flex:1, borderRadius:50, backgroundColor:'white'}}>
                        <View style={styles.headerRow} >
                            <View style={[styles.iconContainer, {backgroundColor: this.props.iconInfo.color}]} >
                                {icon}
                            </View>
                            <Text style={styles.titleText}> {this.props.recordInfo.Name} </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
});

module.exports = DetailsPage;

var styles = StyleSheet.create({
    page:{
        position:'absolute',
        top:0,
        left:0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    popup: {
        //TODO: make dynamic
        backgroundColor:'white',
        borderRadius:50
    },
    iconContainer:{
        height:70,
        width:70,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    headerRow:{
        left:40, 
        top:40,
        flexDirection:'row',
        alignItems:'center'
    },
    titleText:{
        fontSize:40,
        marginLeft:30
    }
});