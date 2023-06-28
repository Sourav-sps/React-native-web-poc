
import {ScrollView} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import {DrawerItem} from '@react-navigation/drawer';
import {Drawer} from 'expo-router/drawer';

function CustomDrawerContent({drawerPosition, navigation}) {
  const insets = useSafeAreaInsets();
  

  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingTop: insets.top + 4,
          paddingLeft: drawerPosition === 'left' ? insets.left : 0,
          paddingRight: drawerPosition === 'right' ? insets.right : 0,
        },
      ]}
      style={{flex: 1}}
    >
      <DrawerItem
        label="Screen1"
        onPress={() => {
          navigation.navigate('screen1');
        }}
      />
      <DrawerItem
        label="Screen2"
        onPress={() => {
          navigation.navigate('screen2');
        }}
      />
      <DrawerItem
        label="Close"
        onPress={() => {
          navigation.closeDrawer();
        }}
      />

      {/* <DrawerItem
        label="Back"
        onPress={() => {
          router.replace('/');
        }}
      /> */}
    </ScrollView>
  );
}

export default function Layout() {
  return (
    <SafeAreaView style={{flex:1}}>
    <Drawer
    screenOptions={{headerShown:false}}
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props) => (
        <CustomDrawerContent drawerPosition={undefined} {...props} />
      )}
    >
      <Drawer.Screen name="screen1" />
      <Drawer.Screen name="screen2" />
    </Drawer>
    </SafeAreaView>
  );
}