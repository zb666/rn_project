import {StackNavigator} from 'react-navigation'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  PropsTest from './PropsTest'
import  RefTest from './RefTest'
import  Student from './Student'

const instructions = Platform.select()
{
    ios:'press cmd+R'
}