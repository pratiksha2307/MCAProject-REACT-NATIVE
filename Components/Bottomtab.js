import React, { Component } from 'react';
import { Text, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Visit from 'react-native-vector-icons/MaterialIcons';
import About from 'react-native-vector-icons/MaterialIcons';
import Mainhomepagestack from './Bottomhomestack/Mainhomepagestack';
import Mainupdatepagestack from './Bottomupdatestack/Mainupdatepagestack';
import Mainvisitpagestack from './Bottomvisitstack/Mainvisitpagestack';
import Mainaboutpagestack from './Bottomaboutstack/Mainaboutpagestack';



export default class Bottomtab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backpress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backpress);
    }
    backpress = () => {
        BackHandler.exitApp();
        return true;
    }

    render() {
        const Tab = createBottomTabNavigator();

        return (
            <Tab.Navigator
                initialRouteName="Mainhomepagestack"
                tabBarOptions={{
                    activeTintColor: textcolor,
                    inactiveTintColor: highlightcolor,
                    activeBackgroundColor: highlightcolor,
                    inactiveBackgroundColor: buttonbackground,
                    style: { height: heightsize * 9 / 100, borderTopWidth: 0 },
                }}>

                <Tab.Screen
                    name="Mainhomepagestack"
                    component={Mainhomepagestack}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: textcolor, bottom: heightsize * 1 / 100, fontSize: widthsize * 2.5 / 100 }}>{focused == true ? 'Home' : null}</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => (
                            <MaterialCommunityIcons name="home" color={textcolor} size={focused == true ? widthsize * 10 / 100 : widthsize * 8/ 100} />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Mainupdatepagestack"
                    component={Mainupdatepagestack}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: textcolor, bottom: heightsize * 1 / 100, fontSize: widthsize * 2.5 / 100 }}>{focused == true ? 'Update' : null}</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => (
                            <MaterialCommunityIcons name="update" color={textcolor} size={focused == true ? widthsize * 10 / 100 : widthsize * 8 / 100} />
                        ),
                    }}
                />
                  <Tab.Screen
                    name="Mainvisitpagestack"
                    component={Mainvisitpagestack}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: textcolor, bottom: heightsize * 1 / 100, fontSize: widthsize * 2.5 / 100 }}>{focused == true ? 'Visit' : null}</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => (
                            <Visit name="connect-without-contact" color={textcolor} size={focused == true ? widthsize * 10 / 100 : widthsize * 8 / 100} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Mainaboutpagestack"
                    component={Mainaboutpagestack}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: textcolor, bottom: heightsize * 1 / 100, fontSize: widthsize * 2.5 / 100 }}>{focused == true ? 'About' : null}</Text>
                        ),
                        tabBarIcon: ({ color, focused }) => (
                            <About name="info" color={textcolor} size={focused == true ? widthsize * 10 / 100 : widthsize * 8 / 100} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}