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
import Parent from './Parent'

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
            <View style={{
                flexDirection: 'column-reverse',
                borderBottomColor: 'gray',
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5
            }}>
                <RefTest ref="reftest"/>
                <Text style={styles.welcome} onPress={
                    () => {
                        //两种方式都能够从refs数组中获取到属性
                        var size = this.refs.reftest.getSize();
                        var fontSize = this.refs['reftest'].getSize()
                        this.setState({size: size + fontSize});
                    }
                }>size大小为{this.state.size}</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text style={styles.instructions}>start run</Text>

                <View style={{
                    flexDirection: 'row-reverse',
                    backgroundColor: 'gray',
                    justifyContent: 'flex-end',
                    margin: 5,
                    borderColor: 'green'
                }}>

                    <View style={styles.container}>
                        <Text style={styles.textStyle}>第一</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.textStyle}>第二</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={styles.textStyle}>第三</Text>
                    </View>

                    <View style={{
                        flex: 3,
                        backgroundColor: "darkyan",
                        margin: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{fontSize: 16}}>flex:3</Text>
                    </View>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3d43',
        margin: 5,
        flexWrap: 'wrap',
        flex: 1
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
    textStyle: {
        width: 30,
        height: 30,
        fontSize: 10,
        justifyContent: 'center',//虽然设置了但是无效
        textAlign: 'center'
    }
});
