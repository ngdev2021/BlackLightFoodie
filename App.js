import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";

console.log(StatusBar.currentHeight);

const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? 20 : 0 }}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <TextInput style={styles.textInput}>Search</TextInput>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
