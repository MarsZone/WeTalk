import * as React from 'react';
import { StyleSheet,Alert} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// import { WebView } from 'react-native-webview';

export default function TabOneScreen() {
  const [counter, setCounter] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 232332 One测试</Text>
      {/* <WebView source={html} style={{height: 100, width: 400}}/> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:"MFZhiHei",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
