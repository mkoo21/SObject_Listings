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

var DetailsPage = React.createClass({
    render() {
        return (
            <View style={styles.popup} />
        );
    }
});

module.exports = DetailsPage;

var styles = StyleSheet.create({
    popup: {
        height: 500,
        width:500,
        //TODO: make dynamic
        backgroundColor:'green'
    }
});