import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { useRouter } from 'expo-router';


function App() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/drawer')
    }, 1000)
  }, [])


  return <View style={{flex:1,justifyContent:'center',alignContent:'center'}}><Text>Splash screen</Text></View>;

}

export default App;