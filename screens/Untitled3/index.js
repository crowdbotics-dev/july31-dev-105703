import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { Switch } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <ImageBackground style={styles.LLVIQAgU} source={require("./sachin.jpeg")} resizeMode="cover"></ImageBackground>
        <Switch style={styles.HaBEFPFV}></Switch>
        <TextInput style={styles.VwCiEqoD}></TextInput>
      <View style={styles.wpoxcxOK}></View><Text style={styles.vprFlbgu}>Lorem ipsum…</Text><FlatList style={styles.vgqykvjw} renderItem={({
        item
      }) => <View style={styles.rWfakAzT}></View>} ItemSeparatorComponent={() => <View style={styles.KKSKEIyB} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList><ActivityIndicator style={styles.UnWFDfPD}></ActivityIndicator></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  LLVIQAgU: {
    width: 107,
    height: 62
  },
  HaBEFPFV: {
    width: 100,
    height: 25
  },
  VwCiEqoD: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  wpoxcxOK: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  vprFlbgu: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  vgqykvjw: {
    position: "absolute",
    width: 100,
    height: 150
  },
  rWfakAzT: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  KKSKEIyB: {
    backgroundColor: "#000000",
    height: 1
  },
  UnWFDfPD: {
    width: 50,
    height: 50
  }
});
export default Untitled3;