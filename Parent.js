import React, {Component, PureComponent} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    //接口回调
    onClickSon = (msgFromSon) => {
        console.log(msgFromSon)
    }

    render() {
        return (<Son onClickSon={this.onClickSon()}/>)
    }
}

class Son extends PureComponent {
    render() {
        <TouchableOpacity onPress={() => this.props.onClickSon('i am son')}>
            <Text>divid</Text>
        </TouchableOpacity>
    }
}