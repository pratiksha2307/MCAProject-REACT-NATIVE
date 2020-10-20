import React from 'react';
import {
  View, BackHandler,
  Text, TouchableOpacity, ScrollView, Image,Linking
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class Women extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
      subwomen: [],
    };
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backpress);
    this.checkwomendata();

  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backpress);
  }
  //backpress
  backpress = () => {
    this.props.navigation.goBack();
    return true;
  }
  checkwomendata = () => {
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
    postData(check, { name: 'Women' })
      .then(async (data) => {
        this.setState({ subwomen: data });
      })
  }
  check = (data) => {
    if (data == 'Education') {
      this.props.navigation.navigate('WomenEducation');
    }
    else if (data == 'Help Line') {
      Linking.openURL("http://www.hellocounsel.com/wp-content/uploads/2015/02/Women-Helpline-Nos..pdf")
    }
    else if (data == 'Employment') {
      this.props.navigation.navigate('WomenEmployment');
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
            Women
            </Text>
        </View>
        <ScrollView>
          <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', margin: 25, }}>
            {
              this.state.subwomen.map((item, key) => (
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
                          source={{ uri: `http://192.168.43.233:4000/photo/Women/${item.image}` }}
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

