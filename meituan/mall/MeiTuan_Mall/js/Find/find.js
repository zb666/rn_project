import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Find extends Component<Props> {
    render() {
        return (
            <View>
                <Text>Find 界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        marginBottom: 5,
    }

});