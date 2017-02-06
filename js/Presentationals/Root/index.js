'use strict';

import React from 'react';
import {
    Text,
    View,
    ListView,
    NavigatorIOS,
    StyleSheet,
    PixelRatio
} from 'react-native';
import { Provider } from 'react-redux';
import MainList from '../../Containers/MainList';
import DetailsPage from '../../Containers/DetailsPage';
import { oauth } from 'react-native-force';

//Root component 
var App = React.createClass({
    setDimensions(event){
        this.props.setDimensions(event.nativeEvent.layout.height, event.nativeEvent.layout.width);
    },
    render() {
        return (
            <View style={styles.page} onLayout={ (event) => this.setDimensions(event) }>
                <NavigatorIOS
                    ref='nav'
                    style={styles.page}
                    initialRoute={{
                        title: '',
                        component: MainList,
                        leftButtonTitle:'Menu',
                        onLeftButtonPress: () => this.props.openSideMenu(),
                        rightButtonTitle:'Logout',
                        onRightButtonPress: () => oauth.logout()
                    }}
                />
                
            </View>
        ); 
    }
});

module.exports = App;

var styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor:'white'
    }
});