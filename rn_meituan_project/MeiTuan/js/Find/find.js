/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


//父组件
export default class Find extends Component<Props> {
    render() {
        return (
            <View>
                <Text>Find页面</Text>
                <FatherComponent name="哈哈，这是父控件传递的属性，子控件可以通过this.props.xxx 进行获取"/>
            </View>
        );
    }
}

class SonComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.name}的孩子组件</Text>
            </View>
        );
    };
}

class FatherComponent extends Component {
    render() {
        //父组件委托给主组件 渲染带有子组件的ui布局代码
        return (<View style={{flex: 1, alignItems: 'center'}}>
                <SonComponent name={this.props.name}/>
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
