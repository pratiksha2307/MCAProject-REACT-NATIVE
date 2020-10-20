import React from 'react';
import {
  StyleSheet,
  View,BackHandler,
  Text, TouchableOpacity,ScrollView, Image,Button, Linking
} from 'react-native';

export default class Visit extends React.Component{
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
        Contact Us
            </Text>
    </View>
    <ScrollView style={{ flex: 1, backgroundColor: backgroundcolor }}>


      <View style={styles.gridContainer} >

            <View style={styles.rowContainer}>
            <View style={styles.MainContainer}>
 
 
</View>
         <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.facebook.com/') } > 
            <View  style= {styles.item } >
            <Image style={styles.image} source={require("../assets/Visit/facebook.png")} /> 
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.instagram.com/') }> 
            <View  style= {styles.item } >
            <Image style={styles.image} source={require("../assets/Visit/instagram.png")} /> 
            </View>
           </TouchableOpacity>
           </View>
       <View style={styles.rowContainer}>
         <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.linkedin.com/in/pratiksha-sharma-25983012b/') }> 
           
            <View  style= {styles.item } >
            <Image style={styles.image} source={require("../assets/Visit/linkedin.png")} /> 
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={ ()=> Linking.openURL('https://twitter.com/explore') }>
            <View  style= {styles.item } >
            <Image style={styles.image} source={require("../assets/Visit/twitter.png")} /> 
            </View>
           </TouchableOpacity>
           </View>
           <View style={styles.rowContainer}>
           <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.youtube.com/watch?v=vXzpEJeVmi8') }> 
            <View  style= {styles.item } >
            <Image style={styles.image} source={require("../assets/Visit/youtube.png")} /> 
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.blogger.com/about/') }> 
            <View  style= {styles.item } >
            <Image style={styles.image} source={require("../assets/Visit/blogger.png")} /> 
            </View>
           </TouchableOpacity>
           </View>
      </View>
    </ScrollView>
    </View>
    
  );
}
}

const styles = StyleSheet.create({
container:{
  flex:1,
  height:'100%',
  width:'100%',
  backgroundColor:"black",
},
gridContainer:{
  flex:1,
  margin: 30
},
rowContainer:{
  flexDirection: "row"
},
item:{
  flex:2,
  alignItems:"center",
  justifyContent:"center",
  margin:5,
  marginTop:10,
  width:140,
  height:140,
  borderRadius:140,
  opacity:1,
},
image:{
    justifyContent:"center",
   width:80,
   height:80,
},
})
 
