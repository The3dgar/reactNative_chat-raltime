import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Header, Body, Title } from "native-base";
import LogoApp from "../../assets/chatLogo.png";
import * as Font from "expo-font";
import InputMsg from "../components/InputMsg";
import firebase from "../utils/firebase";
import moment from "moment";
import Message from "../components/Message";

const chat = firebase.database().ref("general");

const Chat = ({ userName }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const chatScrollRef = useRef();

  useEffect(() => {
    chat.on("value", (snap) => {
      const newState = [];
      const data = snap.val();
      for (let item in data) {
        newState.push(data[item]);
      }
      setMessages(newState);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (chatScrollRef && !loading) {
      chatScrollRef.current.scrollTo({ y: 100000 });
    }
  }, [messages, loading]);

  const sendMessage = (text) => {
    const time = moment().format("hh:mm a");
    chat.push({
      userName,
      text,
      time,
    });
  };

  if (loading)
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );

  return (
    <>
      <Header style={styles.header} iosBarStyle="light-content">
        <Body>
          <Title style={{ color: "#fff" }}>Chat App</Title>
        </Body>
      </Header>
      <View style={styles.content}>
        <ScrollView style={styles.chatView} ref={chatScrollRef}>
          {messages.length &&
            messages.map((m, i) => (
              <Message data={m} name={userName} key={i} />
            ))}
        </ScrollView>

        <InputMsg sendMessage={sendMessage} />
      </View>
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#16202b",
  },
  chatView: {
    backgroundColor: "#1b2734",
  },
});
