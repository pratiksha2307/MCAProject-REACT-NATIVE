import React from 'react';
import {
  
  View, Button,Text, Dimensions,StyleSheet,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Page extends React.Component{

 
  render(){
  return (
    
        <View>
            <Text>Choose Language</Text>
            <Button title="Englishii" onPress={()=>this.props.navigation.navigate('Home')}></Button>
            <View></View>
            <View  style={styles.container}>
              <Text >Hindi</Text>
            </View>
                  
        </View>
        

    
  );
}
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 8,
    backgroundColor: "#61dafb",
      },
    })


 
