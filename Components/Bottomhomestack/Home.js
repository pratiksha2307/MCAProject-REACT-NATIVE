import React from 'react';
import {
  StyleSheet,
  View,
  Text, TouchableOpacity, ScrollView, BackHandler, Image
} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
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

    return (
      <View style={{ flex: 1, backgroundColor: backgroundcolor }}>

        <View style={{
          height: heightsize * 9 / 100, backgroundColor: buttonbackground, width:
            widthsize, justifyContent: 'center', alignItems: 'center'
        }}>
          <Text style={{ color: textcolor, fontSize: widthsize * 8 / 100, fontWeight: 'bold' }}>
            Home
                </Text>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: backgroundcolor }}>


          <View style={styles.gridContainer} >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Business')}
            >

              <View style={[{
                width: widthsize * 90 / 100, height: heightsize * 40 / 100, borderRadius: 15,
                borderWidth: 2, alignItems: 'center',
                justifyContent: 'center', backgroundColor: homeboxbackground, margin: heightsize * 3 / 100,
              }, styles.rowContainer]}>
                <Image style={[{
                  width: widthsize * 75 / 100, height: heightsize * 30 / 100, borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center'
                }, styles.image]} source={require("../assets/Home/Business.png")} />
                <Text style={styles.itemText}>Business</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Agriculture')}
            >

              <View style={[{
                width: widthsize * 90 / 100, height: heightsize * 40 / 100, borderRadius: 15,
                borderWidth: 2, alignItems: 'center',
                justifyContent: 'center', backgroundColor: homeboxbackground, margin: heightsize * 3 / 100,
              }, styles.rowContainer]}>
                <Image style={[{
                  width: widthsize * 75 / 100, height: heightsize * 30 / 100, borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center'
                }, styles.image]} source={require("../assets/Home/Agriculture.png")} />
                <Text style={styles.itemText}>Agriculture</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Education')}
            >

              <View style={[{
                width: widthsize * 90 / 100, height: heightsize * 40 / 100, borderRadius: 15,
                borderWidth: 2, alignItems: 'center',
                justifyContent: 'center', backgroundColor: homeboxbackground, margin: heightsize * 3 / 100,
              }, styles.rowContainer]}>
                <Image style={[{
                  width: widthsize * 75 / 100, height: heightsize * 30 / 100, borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center'
                }, styles.image]} source={require("../assets/Home/Education.png")} />
                <Text style={styles.itemText}>Education</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Women')}
            >

              <View style={[{
                width: widthsize * 90 / 100, height: heightsize * 40 / 100, borderRadius: 15,
                borderWidth: 2, alignItems: 'center',
                justifyContent: 'center', backgroundColor: homeboxbackground, margin: heightsize * 3 / 100,
              }, styles.rowContainer]}>
                <Image style={[{
                  width: widthsize * 75 / 100, height: heightsize * 30 / 100, borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center'
                }, styles.image]} source={require("../assets/Home/Women.png")} />
                <Text style={styles.itemText}>Women</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Sports')}
            >

              <View style={[{
                width: widthsize * 90 / 100, height: heightsize * 40 / 100, borderRadius: 15,
                borderWidth: 2, alignItems: 'center',
                justifyContent: 'center', backgroundColor: homeboxbackground, margin: heightsize * 3 / 100,
              }, styles.rowContainer]}>
                <Image style={[{
                  width: widthsize * 75 / 100, height: heightsize * 30 / 100, borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center'
                }, styles.image]} source={require("../assets/Home/Sport.png")} />
                <Text style={styles.itemText}>Sports</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Health')}
            >

              <View style={[{
                width: widthsize * 90 / 100, height: heightsize * 40 / 100, borderRadius: 15,
                borderWidth: 2, alignItems: 'center',
                justifyContent: 'center', backgroundColor: homeboxbackground, margin: heightsize * 3 / 100,
              }, styles.rowContainer]}>
                <Image style={[{
                  width: widthsize * 75 / 100, height: heightsize * 30 / 100, borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center'
                }, styles.image]} source={require("../assets/Home/Health.png")} />
                <Text style={styles.itemText}>Health</Text>
              </View>
            </TouchableOpacity>


          </View>

        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  gridContainer: {
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 24,
  },
  itemText: {
    color: "#355c7d",
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'right'
  },
})

