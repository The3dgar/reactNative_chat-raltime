import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { Item, Input as InputNB, Icon } from "native-base";

const InputMsg = ({ sendMessage }) => {
  const [msg, setMsg] = useState("");

  const onSubmit = () => {
    if(msg.length >= 1) {
      sendMessage(msg)
      setMsg("")
    }
  };
  return (
    <View style={styles.container}>
      <Item style={styles.itemInput}>
        <InputNB
          placeholder="Mensaje..."
          style={styles.input}
          placeholderTextColor="grey"
          onChangeText={setMsg}
          value={msg}
        />
        <TouchableOpacity onPress={onSubmit}>
          <Icon name="send" style={styles.iconSend} />
        </TouchableOpacity>
      </Item>
    </View>
  );
};

export default InputMsg;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16204b",
    paddingHorizontal: 20,
  },
  itemInput: {
    borderColor: "#16204b",
  },
  input: {
    color: "#fff",
  },
  iconSend: {
    color: "#fff",
  },
});
