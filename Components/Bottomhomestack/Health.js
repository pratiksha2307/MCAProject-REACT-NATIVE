import React from 'react';
import {
  View, BackHandler,
  Text, TouchableOpacity, ScrollView, Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class Health extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
      subhealth: [],
    };
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backpress);
    this.checkhealthdata();

  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backpress);
  }
  //backpress
  backpress = () => {
    this.props.navigation.goBack();
    return true;
  }
  checkhealthdata = () => {
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
    postData(check, { name: 'Health' })
      .then(async (data) => {
        this.setState({ subhealth: data });
      })
  }
  check = (data) => {
    if (data == 'Cancer Disease') {
      this.props.navigation.navigate('HealthCancer');

    }
    else if (data == 'Brain Disease') {
      this.props.navigation.navigate('HealthBrain');
    }
    else if (data == 'Child Health') {
      this.props.navigation.navigate('HealthChild');
    }
    else if (data == 'Esophagus') {
      this.props.navigation.navigate('HealthEsophagus');
    }
    else if (data == 'Heart Disease') {
      this.props.navigation.navigate('HealthHeart');
    }
    else if (data == 'kidney Disease') {
      this.props.navigation.navigate('HealthKidney');
    }
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: backgroundcolor }}>

        <View style={{
          height: heightsize * 9 / 100, backgroundColor: buttonbackground, width:
            widthsize, justifyContent: 'center', alignItems: 'center'
        }}>
          <Text style={{ color: textcolor, fontSize: widthsize * 8 / 100, fontWeight: 'bold' }}>
            Health
            </Text>
        </View>
        <ScrollView>
          <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', margin: 25, }}>
            {
              this.state.subhealth.map((item, key) => (
                <TouchableOpacity
                  key={key}
                  activeOpacity={0}
                  delayPressIn={0}
                  onPress={this.check.bind(this, item.name)}
                  style={{ flex: 1 }}>
                  <LinearGradient
                    colors={['#B2FEFA', '#00223e']} style={{
                      width: widthsize * 85 / 100,
                      padding: widthsize * 3 / 100,
                      borderRadius: 15,
                      margin: widthsize * 3 / 100
                    }} >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }} >
                      <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 80, width: 80, justifyContent: 'center' }}
                          source={{ uri: `http://192.168.43.233:4000/photo/Health/${item.image}` }}
                        />
                      </View>
                      <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                          color: "#FFF",
                          fontSize: widthsize * 5 / 100,
                          fontWeight: 'bold',
                          textAlign: 'center',
                        }} >
                          {item.name}
                        </Text>
                      </View>

                    </View>
                  </LinearGradient>

                </TouchableOpacity>


              ))
            }

          </View>
        </ScrollView>
      </View >

    );
  }
}

