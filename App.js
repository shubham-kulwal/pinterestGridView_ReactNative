/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Header from './src/Components/Header'
import ListItems from './src/Components/ListItems';
import Masonry from 'react-native-masonry';
import FastImage from 'react-native-fast-image'; 


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component<Props> {
  
     //state={dataSource:[]}
     constructor(props) {
      super(props);
      this.state = {
        columns: 4
      };
    }
  
  componentDidMount() {
      setTimeout(() => {
        this.setState({ columns: 2, padding: 5 });
      }, 500);
  
    }
  
  
  render() {
    console.log('response',this.state.dataSource)
    return (
      <View style={styles.container}>
       <Header />
       
       <Masonry
          //sorted
          columns={this.state.columns}
          bricks={[
            { uri: 'https://s.aolcdn.com/hss/storage/midas/1c38860b2eafca9d23de549e74b15286/204650181/nikehyperadaptlede.jpg'},
            { uri: 'https://i.pinimg.com/736x/a4/b2/98/a4b298e715660b8e5b9402d21276fb88--shoes-platform-sneakers-suede-puma-shoes.jpg' },
            { uri: 'https://i.pinimg.com/736x/63/bf/51/63bf51af7b5e322329af89d795962fe0--nike-knit-shoes-tennis-shoes-womens-nike-running.jpg' },
            { uri: 'https://i.pinimg.com/736x/cf/cc/bb/cfccbbe0784bdd37084aa6ee709c31b4--mens-sneakers-fashion-sneakers-mens.jpg'},
            { uri: 'https://i.pinimg.com/736x/a4/b2/98/a4b298e715660b8e5b9402d21276fb88--shoes-platform-sneakers-suede-puma-shoes.jpg' },
            { uri: 'https://i.pinimg.com/736x/63/bf/51/63bf51af7b5e322329af89d795962fe0--nike-knit-shoes-tennis-shoes-womens-nike-running.jpg' },
            { uri: 'https://s.aolcdn.com/hss/storage/midas/1c38860b2eafca9d23de549e74b15286/204650181/nikehyperadaptlede.jpg'},
            { uri: 'https://i.pinimg.com/736x/cf/cc/bb/cfccbbe0784bdd37084aa6ee709c31b4--mens-sneakers-fashion-sneakers-mens.jpg'},
            { uri: 'https://i.pinimg.com/736x/a4/b2/98/a4b298e715660b8e5b9402d21276fb88--shoes-platform-sneakers-suede-puma-shoes.jpg' },
            { uri: 'https://i.pinimg.com/736x/63/bf/51/63bf51af7b5e322329af89d795962fe0--nike-knit-shoes-tennis-shoes-womens-nike-running.jpg' },
            { uri: 'https://s.aolcdn.com/hss/storage/midas/1c38860b2eafca9d23de549e74b15286/204650181/nikehyperadaptlede.jpg'},
            
          
          ]}
          
          customImageComponent={FastImage}
        />
      
      </View>
    );
  }
}

const fastProps = {
  //onProgress: { e : console.log(e.nativeEvent.loaded / e.nativeEvent.total) },
  resizeMode: FastImage.resizeMode.contain
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
});
