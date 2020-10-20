import React from 'react'
import {
  View,
  PermissionsAndroid,
  Button,
  Alert,
  TextInput,
  ScrollView, Text, TouchableOpacity, BackHandler
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Update extends React.Component {
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
  constructor(props) {
    super(props);
    this.state = {
      singleFileOBJ: '',
      email: '',
      fullName: '',
      phoneNumber: '',
      category: '',
      subcategory: '',
    };
    this.validates = this.validates.bind(this);
  }
  validates = () => {
    {
      let text = this.state.email;
      let emailError = this.state.emails;
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(text) === false) {
        console.warn("Invalid email")
        this.setState({ email: text })
        return false;
      }
      else {
        this.setState({ email: text })
        console.log("Email is Correct");
      }
    }
    let text = this.state.phoneNumber;
    let phoneNumberError = this.state.phoneNumber;
    let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    if (phoneRGEX.test(text) === false) {
      console.warn("Invalid phoneNumber ")
      this.setState({ phoneNumber: text })
      return false;
    }
    else {
      this.setState({ phoneNumber: text })
      console.log("phoneNumber is Correct");
    }
    {
      let text = this.state.fullName;
      let fullNameError = this.state.fullName;
      let fullNameRGEX = /^[a-zA-Z]+$/;

      if (fullNameRGEX.test(text) === false) {
        console.warn("Invalid fullName ")
        this.setState({ fullName: text })
        return false;
      }
      else {
        this.setState({ fullName: text })
        console.log("fullName is Correct");
      }
    }
    {
      let text = this.state.category;
      let categoryError = this.state.category;
      let categoryRGEX = /^[a-zA-Z]+$/;

      if (categoryRGEX.test(text) === false) {
        console.warn("Invalid category")
        this.setState({ category: text })
        return false;
      }
      else {
        this.setState({ category: text })
        console.log("category is Correct");
      }
    }
    {
      let text = this.state.subcategory;
      let subcategoryError = this.state.subcategory;
      let subcategoryRGEX = /^[a-zA-Z]+$/;

      if (subcategoryRGEX.test(text) === false) {
        console.warn("Invalid subcategory")
        this.setState({ subcategory: text })
        return false;
      }
      else {
        this.setState({ subcategory: text })
        console.log("subcategory is Correct");
      }
    }
    this.uploadfile();
  }
  // check permission
  async Permissioncheck() {
    await AsyncStorage.multiGet(['cameraaccess', 'readstorageaccess', 'writestorageaccess']).then(data => {
      const cameraaccess = data[0][1];
      const readstorageaccess = data[1][1];
      const writestorageaccess = data[2][1];

      if (cameraaccess == 'granted') {
        if (readstorageaccess == 'granted') {
          if (writestorageaccess == 'granted') {
            this.SingleFilePicker();
          }
          else {
            this.getpermission();
          }
        }
        else {
          this.getpermission();
        }
      }
      else {
        this.getpermission();
      }
    });
  }

  // get permission
  async getpermission() {
    let userpermission = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);

    let access = [
      ['cameraaccess', userpermission['android.permission.CAMERA']],
      ['readstorageaccess', userpermission['android.permission.READ_EXTERNAL_STORAGE']],
      ['writestorageaccess', userpermission['android.permission.WRITE_EXTERNAL_STORAGE']],
    ];
    await AsyncStorage.multiSet(access);

    if (userpermission['android.permission.CAMERA'] == 'granted') {
      if (userpermission['android.permission.READ_EXTERNAL_STORAGE'] == 'granted') {
        if (userpermission['android.permission.WRITE_EXTERNAL_STORAGE'] == 'granted') {
          this.SingleFilePicker();
        }
        else {
          null;
        }
      }
      else {
        null;
      }
    }
    else {
      null;
    }
  }

  // file pick
  async SingleFilePicker() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],

      });

      this.setState({ singleFileOBJ: res });

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  uploadfile = async () => {
    const data = new FormData();
    data.append("document", this.state.singleFileOBJ);
    fetch(fileuploadurl, {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: data
    }).then(response => {
      this.submit();
    }).catch(err => {
      console.log(err)
    });
  }


  submit = () => {
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
    postData(update, {
      fullname: this.state.fullName,
      email: this.state.email,
      phoneno: this.state.phoneNumber,
      category: this.state.category,
      subcat: this.state.subcategory,
      filename: `${Date.now()}_${this.state.singleFileOBJ.name}`,
    })
      .then(async (data) => {
        if (data.message == "Success") {
          alert("Thank you for submitting !!");
          this.setState({
            singleFileOBJ: '',
            email: '',
            fullName: '',
            phoneNumber: '',
            category: '',
            subcategory: '',
          });
        }
      })
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: backgroundcolor }}>

        <View style={{
          height: heightsize * 9 / 100, backgroundColor: buttonbackground, width:
            widthsize, justifyContent: 'center', alignItems: 'center'
        }}>
          <Text style={{ color: textcolor, fontSize: widthsize * 8 / 100, fontWeight: 'bold' }}>
            Update
              </Text>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: backgroundcolor, padding: widthsize * 3 / 100 }}>

          <TouchableOpacity>
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, borderColor: 'white', borderWidth: widthsize * 0.3 / 100, margin: widthsize * 4 / 100 }}>
              <TextInput

                placeholder='Full Name'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={(text) => this.setState({ fullName: text })}
                type='fullName'
                value={this.state.fullName}
                style={{
                  flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                  color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold',
                }}
              />
              <MaterialCommunityIcons name="human-male" size={widthsize * 8 / 100}
                color={highlightcolor}
                style={{ padding: widthsize * 3 / 100 }} />

            </View>
          </TouchableOpacity>


          <TouchableOpacity>
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, borderColor: 'white', borderWidth: widthsize * 0.3 / 100, margin: widthsize * 4 / 100 }}>
              <TextInput
                placeholder='Email'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={(text) => this.setState({ email: text })}
                type='email'
                value={this.state.email}
                keyboardType='email-address'
                style={{
                  flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                  color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold',
                }}

              />
              <MaterialCommunityIcons name="email" size={widthsize * 8 / 100}
                color={highlightcolor}
                style={{ padding: widthsize * 3 / 100 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, borderColor: 'white', borderWidth: widthsize * 0.3 / 100, margin: widthsize * 4 / 100 }}>

              <TextInput
                placeholder='Phone Number'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={(text) => this.setState({ phoneNumber: text })}
                type='phoneNumber'
                value={this.state.phoneNumber}
                style={{
                  flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                  color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold',
                }}
              />
              <MaterialCommunityIcons name="cellphone-basic" size={widthsize * 8 / 100}
                color={highlightcolor}
                style={{ padding: widthsize * 3 / 100 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, borderColor: 'white', borderWidth: widthsize * 0.3 / 100, margin: widthsize * 4 / 100 }}>
              <TextInput
                placeholder='Category'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={(text) => this.setState({ category: text })}
                type='category'
                value={this.state.category}
                style={{
                  flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                  color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold',
                }}
              />
              <MaterialCommunityIcons name="chart-timeline" size={widthsize * 8 / 100}
                color={highlightcolor}
                style={{ padding: widthsize * 3 / 100 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, borderColor: 'white', borderWidth: widthsize * 0.3 / 100, margin: widthsize * 4 / 100 }}>

              <TextInput
                placeholder='Sub-Category'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={(text) => this.setState({ subcategory: text })}
                type='subcategory'
                value={this.state.subcategory}
                style={{
                  flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                  color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold',
                }}
              />
              <MaterialCommunityIcons name="chart-scatter-plot" size={widthsize * 8 / 100}
                color={highlightcolor}
                style={{ padding: widthsize * 3 / 100 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, borderColor: 'white', borderWidth: widthsize * 0.3 / 100, margin: widthsize * 4 / 100 }}>


              <Text style={{
                flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold',
              }}>
                File Name: {this.state.singleFileOBJ.name ? this.state.singleFileOBJ.name : ''}
              </Text>
              <MaterialCommunityIcons name="file-find-outline" size={widthsize * 8 / 100}
                color={highlightcolor}
                style={{ padding: widthsize * 3 / 100 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, borderColor: 'white', borderWidth: widthsize * 0.3 / 100, margin: widthsize * 4 / 100 }}>



              <Text style={{
                flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold',
              }}>
                File URI: {this.state.singleFileOBJ.uri ? this.state.singleFileOBJ.uri : ''}
              </Text>
              <MaterialCommunityIcons name="curling" size={widthsize * 8 / 100}
                color={highlightcolor}
                style={{ padding: widthsize * 3 / 100 }} />

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.Permissioncheck()}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, borderColor: 'white', borderWidth: widthsize * 0.3 / 100, margin: widthsize * 4 / 100 }}>
              <Text style={{
                flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold',
              }}>
                Upload File
                </Text>
              <MaterialCommunityIcons name="file-upload" size={widthsize * 8 / 100}
                color={highlightcolor}
                style={{ padding: widthsize * 3 / 100 }} />

            </View>
          </TouchableOpacity>
          <TouchableOpacity

            activeOpacity={0.5}
            onPress={this.validates}
          >
            <View style={{ justifyContent: 'center', flexDirection: 'row', borderRadius: widthsize * 25 / 100, backgroundColor: buttonbackground, margin: widthsize * 4 / 100 }}>

              <Text style={{
                flex: 1, paddingTop: widthsize * 3 / 100, paddingRight: widthsize * 3 / 100, paddingBottom: widthsize * 3 / 100, paddingLeft: widthsize * 3 / 100,
                color: textcolor, fontSize: widthsize * 4 / 100, borderRadius: 25, fontWeight: 'bold', textAlign: 'center',
              }}>Submit</Text>


            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

    )
  }
}