import React, { Component } from 'react';
import { View, Text, Animated, Image, StyleSheet, StatusBar } from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logofade: new Animated.Value(0),
            textfade: new Animated.Value(0),
            zoomvalue: new Animated.Value(1),
        };
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.state.logofade, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(this.state.textfade, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start(() =>
            Animated.parallel([
                Animated.timing(this.state.textfade, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(this.state.zoomvalue, {
                    toValue: 8,
                    duration: 1200,
                    useNativeDriver: true
                }),
                Animated.timing(this.state.logofade, {
                    toValue: 0,
                    duration: 1200,
                    useNativeDriver: true
                }),
            ]).start(() => setTimeout(() => {
                this.props.navigation.navigate('Bottomtab');
            }, 100)));
    }

    render() {
        const zoom = this.state.zoomvalue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar hidden={true} />
                <Animated.View style={{ opacity: this.state.logofade, transform: [{ scale: zoom }] }}>
                    <Image
                        style={styles.image}
                        source={require("./assets/d.png")}


                    />
                </Animated.View>
                <Animated.View style={{ marginTop: heightsize * 3 / 100, opacity: this.state.textfade }}>
                    <Text allowFontScaling={false} style={{
                        color: logohighlightcolor, fontSize: widthsize * 15 / 100, fontWeight: 'bold', textShadowColor: '#2a98f2',
                        textShadowOffset: { width: 1, height: 4 },
                        textShadowRadius: 5
                    }}>
                        Disha Helps
                    </Text>
                </Animated.View>
                <Animated.View style={{ marginTop: heightsize * 3 / 100, opacity: this.state.textfade }}>
                    <Text allowFontScaling={false} style={{
                        color: logohighlightcolor, fontSize: widthsize * 4 / 100, fontWeight: 'bold', textShadowColor: '#2a98f2',
                        textShadowOffset: { width: 1, height: 4 },
                        textShadowRadius: 5
                    }}>
                        Sapnoo Ki Uddhaan
                    </Text>
                </Animated.View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    image: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        padding: 15,
    },
})