import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    Platform,
    View
} from 'react-native';

import {Navigator} from "react-native-deprecated-custom-components"
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'  //默认选中主页
        }
    }

    render() {
        return (
            <View>
                <Image
                    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    }

});