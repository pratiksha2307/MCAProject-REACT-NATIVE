import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Update from './Update';

export default class Mainupdatepagestack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName='Update' headerMode='none'>
                <Stack.Screen name='Update' component={Update} />
            </Stack.Navigator>
        );
    }
}