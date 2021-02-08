import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, LogBox, Platform } from "react-native";
import { Container } from "native-base";
import * as Font from "expo-font";
import Login from "./src/screens/Login";
import Chat from "./src/screens/Chat";
import { Ionicons } from "@expo/vector-icons";

!(Platform.OS = "web") &&
  LogBox.ignoreLogs([
    "Setting a timer for a long period of time",
    " FIREBASE WARNING: Exception was thrown by user callback",
  ]);

export default function App() {
  const [userName, setUserName] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    }).then((resp) => {
      setIsLoad(true);
    });
  }, []);

  if (!isLoad)
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );

  return (
    <Container style={styles.container}>
      {!userName ? (
        <Login setUserName={setUserName} />
      ) : (
        <Chat userName={userName} />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16202b",
  },
});
