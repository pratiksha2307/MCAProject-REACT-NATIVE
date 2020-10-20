import React from 'react';
import {
  StyleSheet,
  View,BackHandler,
  Text, TouchableOpacity,ScrollView,
} from 'react-native';


export default class About extends React.Component{
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backpress);
    }
    componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backpress);
    }
    //backpress
    backpress = () => {
    this.props.navigation.goBack();
    return true;
    }

  render(){
  return (
    <View style={{ flex: 1, backgroundColor: backgroundcolor }}>

    <View style={{
      height: heightsize * 9 / 100, backgroundColor: buttonbackground, width:
        widthsize, justifyContent: 'center', alignItems: 'center'
    }}>
      <Text style={{ color: textcolor, fontSize: widthsize * 8 / 100, fontWeight: 'bold' }}>
        About
            </Text>
    </View>
    <ScrollView style={{ flex: 1, backgroundColor: backgroundcolor }}>


      <View style={styles.gridContainer} >

            <View style={styles.rowContainer}>
              <TouchableOpacity 
                      style= {[{  margin:heightsize/120,width:widthsize-40,
                      },styles.item] } 
                  > 
                      <Text style={[{fontSize:widthsize*0.06,margin:heightsize/100},styles.itemText]}>Disha help is an online platform that provides you with all the necessary 
              information regarding the solution of your problem through the help of various 
              govt policies, charity organisation, NGO and Company. This will help the individual 
              to know more about the benefits that are been given by the government to the individual. 
              This will ensure that people don’t get affected due to the lack of knowledge about the policies. </Text>
                  </TouchableOpacity>
                  </View>
            
      </View>
      <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={{color:"pink",fontSize:20,}}>Login</Text>
            </TouchableOpacity>
    </ScrollView>
    </View>
    
  );
}
}

const styles = StyleSheet.create({
gridContainer:{
  flex:1,
  margin:18,
  backgroundColor:'#DBDBDB',
  borderRadius:40,
},
rowContainer:{
  flexDirection: "row",
 
},
item:{
  opacity:1,
  flex:8,
    borderRadius:40,
    borderColor:'#096ad8',
    borderWidth:4,
    alignItems:'center'
},
itemText:{
textAlign:'center',
fontWeight:'bold',
},
})
 
