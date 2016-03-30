/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  DrawerLayoutAndroid
} from 'react-native';

var BASE_URL = 'https://api.github.com/search/repositories?q=';

class My extends Component {
  constructor(props){
    super(props);
    this.state = {
        w:100,
        h:100
    }
  }
  componentWillMount(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }
  _onPress(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({w:this.state.w + 15, h: this.state.h + 15});
  }


  render() {


    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} ></View>

        <TouchableOpacity onPress={this._onPress.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>

      </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  customimg:{
    width: 50,
    height: 50
  },
  searchBarInput:{
    marginTop: 30,
    padding: 5,
    fontSize:15,
    height:30,
    backgroundColor: '#EAEAEA'
  },
  fs:{
    color:'#FFFFFF'
  },
  box:{
    backgroundColor: 'red'
  },
  button:{
    marginTop:10,
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:'black',
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  }
});

AppRegistry.registerComponent('My', () => My);
