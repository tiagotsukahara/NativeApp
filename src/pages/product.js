import React from 'react';

import { WebView } from 'react-native-webview';
// import { Text } from 'react-native';

const Product = ({ navigation }) => (
  <WebView source={{ uri: navigation.state.params.product.url }} />
);

Product.navigateOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title,
});

// const Product = () => <Text>Teste</Text>;

export default Product;
