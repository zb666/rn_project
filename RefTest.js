import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class RefTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 30,
            age: 10
        }
    }

    getSize() {
        return this.state.size
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome} onPress={() => {
                    this.setState({size: this.state.size + 10})
                }}>增加</Text>
                <Text style={styles.welcome} onPress={() => {
                    this.setState({size: this.state.size - 10})
                }}>减小</Text>
            </View>
        )
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