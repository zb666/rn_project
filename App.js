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
import RefTest from './RefTest'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            size: 20,
            name: '张三',
            age: 26
        }
    }

    //这个组件也会参与渲染设置组件的ref属性 这样在渲染完毕之后就可以获取到组件中的属性信息
    render() {
        return (
            <View>
                <RefTest ref="reftest"/>
                <Text style={styles.welcome} onPress={
                    () => {
                        //两种方式都能够从refs数组中获取到属性
                        var size = this.refs.reftest.getSize();
                        var fontSize = this.refs['reftest'].getSize()
                        this.setState({size: size+fontSize});
                    }
                }>size大小为{this.state.size}</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>

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
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
