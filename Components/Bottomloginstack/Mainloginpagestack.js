import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

export default class Mainloginpagestack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName='Login' headerMode='none'>
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>
        );
    }
}