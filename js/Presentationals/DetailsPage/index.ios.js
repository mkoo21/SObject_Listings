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
    getInitialState(){
        return{
            dataSource: null
        }
    },
    handlePress(){
        this.props.closeDetailsPage()
    },
    componentDidMount(){
        //more efficient way?
        var converted = [];
        for(var i in this.props.recordInfo){
            converted.push({[i]: this.props.recordInfo[i]});
        }
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({dataSource: ds.cloneWithRows(converted)});
    },
    renderRow(rowData){
        return (
            <ListRow rowData={rowData} />
        )
    },
    render() {
        if(!this.state.dataSource) return null
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
                        <ListView 
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow}
                            enableEmptySections={true}
                            automaticallyAdjustContentInsets={false}
                            />
                    </ScrollView>
                </View>
            </View>
        );
    }
});

module.exports = DetailsPage;

var ListRow = React.createClass({
    render(){
        if(typeof this.props.rowData[Object.keys(this.props.rowData)[0]] != "object"){
            //Normal row
            return(
                <View style={styles.listRow} >
                    <Text style={styles.keyText}> {Object.keys(this.props.rowData)[0]} </Text>
                    <Text style={styles.valueText}> {this.props.rowData[Object.keys(this.props.rowData)[0]]}</Text>
                </View>
            )
        }
        else{
            //Simplification
            var data = this.props.rowData;
            var key = Object.keys(this.props.rowData)[0];
            delete data[key]['attributes'];
            var value = data[key][Object.keys(data[key])[0]];
            return (
                <View style={styles.listRow}>
                    <Text style={styles.keyText}> {key} </Text>
                    <Text style={styles.valueText}> {value} </Text>
                </View>
            )
        }
    }
});

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
        borderRadius:50,
        padding:20
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
        height:90,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:75
    },
    titleText:{
        fontSize:40,
        marginLeft:30
    },
    listRow: {
        height:60,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:50,
        paddingTop:10,
        marginBottom:30
    },
    keyText:{
        color:'gray',
        fontSize:25,
        marginBottom:10
    },
    valueText:{
        color:'black',
        fontSize:22
    }
});