import React from 'react';
import {
  View, BackHandler,
  Text,  ScrollView, Linking, Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class HealthEsophagus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
      healeso: [],
    };
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backpress);
    this.healthesophagus();

  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backpress);
  }
  //backpress
  backpress = () => {
    this.props.navigation.goBack();
    return true;
  }

  // women education
  healthesophagus = () => {
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers:
        {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }
    postData(healthesophagus, { name: 'HealthEsophagus' })
      .then(async (data) => {
        this.setState({ healeso: data });
      })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{
          height: heightsize * 9 / 100, backgroundColor: buttonbackground, width:
            widthsize, justifyContent: 'center', alignItems: 'center'
        }}>
          <Text style={{ color: textcolor, fontSize: widthsize * 8 / 100, fontWeight: 'bold' }}>
          Esophagus
            </Text>
        </View>
        <ScrollView>
          <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', margin: 25, }}>
            {
              this.state.healeso.map((item, key) => (
                <View key={key}>
                  <LinearGradient colors={['#bdc3c7', '#eaeaea', '#bde8f2']} style={{
                    width: widthsize * 85 / 100,
                    padding: widthsize * 3 / 100,
                    borderRadius: 15,
                    margin: widthsize * 3 / 100
                  }} >
                      <View
                        style={{
                          flex: 1,
                        }} >

                        <View style={{ padding: 10, alignItems: 'center', justifyContent: "center" }}>
                          <Text style={{
                            color: "black",
                            fontSize: widthsize * 5 / 100,
                            fontWeight: 'bold',
                          }} >
                            {item.name}
                          </Text>
                        </View>

                        <View style={{  padding: 10 }}>
                          <Text style={{
                            color: "black",
                            textAlign:'justify',                            
                            fontSize: widthsize * 3 / 100,
                          }} >
                            {item.description}
                          </Text>
                        </View>

                        <View style={{ margin: 20 }}>
                          <Button title='Click Here To Open Website URL' onPress={() => Linking.openURL(item.link)} />
                        </View>



                      </View>
                  </LinearGradient>

                </View>

              ))
            }

          </View>
        </ScrollView>
      </View >

    );
  }
}

