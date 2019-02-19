import React,{Component} from 'react-native'
//引入控件
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar} from 'react-native';
import HomeDetail from './HomeDetail';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
export default class Home extends Component{
    _pressButton(){
        const {navigator} = this.props;
        if (navigator){
            navigator.pop()
        }
    }
    render(){
        return (
            <View style = {styles.container}>
                //es5 提供 了自动绑定的功能  但是es6 将不再给出
                <Text style={style.welcome} onPress={this._pressButton().bind(this)}>
                该界面点击进行返回
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});