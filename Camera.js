import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native';
import { RNCamera } from 'react-native-camera';




export default class Camera extends React.Component {
 
  render() {
   

    return (
      <View style={styles.container}>

       <Text>Camera Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})
