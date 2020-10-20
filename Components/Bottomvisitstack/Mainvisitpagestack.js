import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Visit from './Visit';

export default class Mainvisitpagestack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator initialRouteName='Visit' headerMode='none'>
                <Stack.Screen name='Visit Us' component={Visit} />
            </Stack.Navigator>
        );
    }
}