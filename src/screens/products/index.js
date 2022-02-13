import {
    Button,
    SafeAreaView,
    Text,
    View
} from 'react-native';

import React from 'react';
import styles from './styles'

const Product = ({navigation}) => {
   
     
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Product</Text>   
          <Button  title='go Product Detail' onPress={() => navigation.navigate('ProductDetail')}/>
        </View>
      </SafeAreaView>    
    );
  };
  export default Product;  