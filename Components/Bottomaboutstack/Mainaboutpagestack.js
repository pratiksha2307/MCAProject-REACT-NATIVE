import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from './About';
import Login from '../Bottomloginstack/Login';


export default class Mainaboutpagestack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName='About' headerMode='none'>
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='Login' component={Login} />

            </Stack.Navigator>
        );
    }
}