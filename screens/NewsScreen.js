import React from 'react';
import { WebView } from 'react-native-webview';


export const NewsScreen = ({navigation, route}) => {
  return (
    
     <WebView
      source={{ uri: 'https://1news.az/' }}
      style={{ marginTop: 20 }}
     />
  );
};