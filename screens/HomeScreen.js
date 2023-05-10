import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    FlatList
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { TouchableOpacity } from 'react-native-gesture-handler';
  import firebase from 'firebase';

export default class HomeScreen extends React.Component {

constructor(){
  super();
  this.state = {
    
  }
}

  render() {
    return (
      <View style={styles.container}>
        <View>
      <SafeAreaView style={styles.droidSafeArea} />
      <TouchableOpacity>
      <FlatList
        keyExtractor={this.keyExtractor}
        data={animals}
        renderItem={this.renderItem}
        horizontal={true}
      />
      </TouchableOpacity>
      </View>
      <View>
        <Text> 
          This app is going to give all the information you need about the most endangered animals on this planet!
          Animals are a jewel to us as they are a symbol of nature and evolution. SAVE ANIMALS!

          Developed by Akshith SRK and Whitehat Jr Team.

          To follow us are recieve more updates, visit:
          https://github.com/AkshithSRK
        </Text>
      </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
 
});


