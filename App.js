import * as React from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Components/Main';
import Bottomtab from './Components/Bottomtab';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    global.widthsize = Dimensions.get('window').width;
    global.heightsize = Dimensions.get('window').height;
    global.backgroundcolor = 'black';
    global.highlightcolor = '#C33764';
    global.logohighlightcolor = '#096ad8';
    global.textcolor = '#ffffff';
    global.buttonbackground = '#096ad8';
    global.homeboxbackground = '#ffffff';
    global.check = `http://192.168.43.233:4000/category`;
    global.update = `http://192.168.43.233:4000/update`;
    global.fileuploadurl = `http://192.168.43.233:4000/fileupload`;
    global.subcategory = `http://192.168.43.233:4000/subcategory`;
    global.subcategory2 = `http://192.168.43.233:4000/subcategory2`;

    global.educationkid = `http://192.168.43.233:4000/educationkid`;
    global.educationjunior = `http://192.168.43.233:4000/educationjunior`;
    global.educationhigher = `http://192.168.43.233:4000/educationhigher`;
    global.educationgraduation = `http://192.168.43.233:4000/educationgraduation`;
    global.educationpostgraduation = `http://192.168.43.233:4000/educationpostgraduation`;
    global.educationforeign = `http://192.168.43.233:4000/educationforeign`;
    global.educationphd = `http://192.168.43.233:4000/educationphd`;
    global.educationjob = `http://192.168.43.233:4000/educationjob`;
    global.healthcancer = `http://192.168.43.233:4000/healthcancer`;
    global.healthbrain = `http://192.168.43.233:4000/healthbrain`;
    global.healthchild = `http://192.168.43.233:4000/healthchild`;
    global.healthesophagus = `http://192.168.43.233:4000/healthesophagus`;
    global.healthheart = `http://192.168.43.233:4000/healthheart`;
    global.healthkidney = `http://192.168.43.233:4000/healthkidney`;
    global.sportsbadminton = `http://192.168.43.233:4000/sportsbadminton`;
    global.sportsbasketball = `http://192.168.43.233:4000/sportsbasketball`;
    global.sportsboxing = `http://192.168.43.233:4000/sportsboxing`;
    global.sportsbicycle = `http://192.168.43.233:4000/sportsbicycle`;
    global.sportscricket = `http://192.168.43.233:4000/sportscricket`;

    global.agriculturebudget = `http://192.168.43.233:4000/agriculturebudget`;
    global.agriculturecensus = `http://192.168.43.233:4000/agriculturecensus`;
    global.agriculturecredit = `http://192.168.43.233:4000/agriculturecredit`;
    global.agriculturecrops = `http://192.168.43.233:4000/agriculturecrops`;
    global.agriculturedigital = `http://192.168.43.233:4000/agriculturedigital`;
    global.agriculturemarketing = `http://192.168.43.233:4000/agriculturemarketing`;


  }

  render() {
    const Stack = createStackNavigator();

    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' headerMode='none'>

          <Stack.Screen
            name="Main"
            component={Main}
          />

          <Stack.Screen
            name='Bottomtab'
            component={Bottomtab}
          />

        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}
