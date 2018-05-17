import React from 'react'
import {View, Text, TextInput, Button} from 'react-native'

export class LoginScreen extends React.Component {

  constructor(props)  {
    super(props)
    this.state = {
      userName: "",
      emailId: ""
    }
  }
static navigationOptions = {
  header: null
}
  render(){
    return(
      <View style={{flex:1, justifyContent: 'center', padding: 25}}>
        <Text>User Name</Text>
        <TextInput accessible={true} accessibilityLabel={"Tap here to enter User Name"} onChangeText={(text) => this.setState({userName: text})} />
        <Text>Email Id</Text>
        <TextInput accessible={true} accessibilityLabel={"Tap here to enter Email Id"} onChangeText={(text) => this.setState({emailId: text})} />
        <Button accessible={true} accessibilityLabel={"Tap to proceed to next screen"} title="Login" onPress={() => this.props.navigation.navigate('Flatlist')}/>
      </View>
    )
  }
}
