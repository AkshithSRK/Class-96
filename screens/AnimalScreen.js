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
    Dimensions,
  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
  import firebase from 'firebase';
  import axios from 'axios';

  export default class AnimalScreen extends React.Component {

render(){
    return(
        <View>
        <View>
            <Text>Animal Details </Text>

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
    )
}




  }