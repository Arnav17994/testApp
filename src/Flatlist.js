import React from 'react'
import {FlatList, TouchableOpacity, Text} from 'react-native'
export class TestFlatListScreen extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <FlatList
  data={[{key: 'a'}, {key: 'b'}, {key: 'c'}]}
  renderItem={({item}) => <TouchableOpacity accessible={true} accessibilityLabel={'Tap to select option'} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#DDDDDD', padding: 10, height: 500, borderRadius: 8, margin: 10}}><Text>{item.key}</Text></TouchableOpacity> } />
) 
}
}