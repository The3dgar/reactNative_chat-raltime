import React, { useState } from "react";
import { StyleSheet, View, Image, SafeAreaView, StatusBar, Alert } from "react-native";
import { Item, Input, Text, Button } from "native-base";
import LogoApp from "../../assets/chatLogo.png";

const Login = ({ setUserName }) => {
  const [name, setName] = useState(null);
  const onSubmit = () => {
    if(name.length > 4){
      setUserName(name)
    }else{
      Alert.alert("Nombre muy corto","Mínimo 4 digitos")
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image resizeMode="contain" source={LogoApp} style={styles.logo} />
      </View>
      <Item>
        <Input
          placeholder="Nombre de usuario"
          style={{ color: "#fff" }}
          placeholderTextColor="grey"
          onChangeText={setName}
        />
      </Item>
      <Button style={styles.btnLogin} block onPress={onSubmit}>
        <Text>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  logo: {
    width: "100%",
    height: 200,
    marginBottom: 30,
  },
  btnLogin: {
    marginTop: 40,
    justifyContent: "center",
    backgroundColor: "#0098d3",
  },
});
