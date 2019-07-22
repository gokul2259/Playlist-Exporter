import React from "react";
import { StyleSheet, Text, Picker, View } from "react-native";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";
import { Header } from "react-native-elements";


const exportFromSoruce = [
  {
    label: 'Shazam',
    value: 'shazam',
  },
  {
    label: 'Spotify',
    value: 'spotify',
  },
  {
    label: 'YouTube',
    value: 'youtube',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "PLAYLIST EXPORTER",
          style: { color: "#fff" }
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <Text style={styles.exportFromLabel}>Export From: </Text>
      <RNPickerSelect
        placeholder="Select a source"
        items={exportFromSoruce}
        style={pickerSelectStyles}
        value="shazam"
        useNativeAndroidPickerStyle={false}
      />
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  exportFromLabel: {
    fontSize: 22
  }
});
