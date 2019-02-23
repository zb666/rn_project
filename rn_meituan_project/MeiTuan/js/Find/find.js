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
            <FatherComponent/>
        );
    }
}

class SonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            money: 0
        }
    }

    //子控件接受变量 可变state
    reveiveMoney(money) {
        this.setState({
            money: money
        })
    }

    makeMoney(money) {
        this.props.reveiveMoney(money)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.props.name}的孩子组件</Text>
                <Text>总共收到了来自于父亲的 {this.state.money} 生活费</Text>
                <Text onPress={() => this.makeMoney.bind(this, 100)}>点击挣100块钱</Text>
            </View>
        );
    };
}

class FatherComponent extends Component {

    constructor(props) {
        super(props);
        {
            this.state = {
                money: 0
            }
        }
    }

    render() {
        //父组件委托给主组件 渲染带有子组件的ui布局代码
        return (
            <View style={{flex: 1, alignItems: 'center'}}>

                <SonComponent name={this.props.name}/>

                <SonComponent ref="son"/>

                <Text style={{marginTop: 100}} onPress={() => {
                    this.refs.son.reveiveMoney(1000)
                }}>发生活费了
                </Text>

                {/*<SonComponent reveiveMoney={this.reveiveMoney.bind(this)}/>*/}

                <Text style={{marginBottom: 50}}>爸爸收到了通过绑定的子控件的bind方法而收到的100块钱{this.state.money}</Text>

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
