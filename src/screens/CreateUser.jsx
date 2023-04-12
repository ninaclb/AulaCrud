import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { styles } from "../config/styles";

export default function CreateUser() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  function cadastrarPessoa() {
    console.log(nome);
    console.log(telefone);

    //criar função firebase para cadastrar
    const docRef = addDoc(collection(db, "pessoas"), {
      nomeDaPessoa: nome, //nome do campo do bando e nome da criatura
      telefoneDaPessoa: telefone,
    }); //selecionar banco e sua cpleção
  }
  return (
    <View style={styles.container}>
      <Text>Cadastrar pessoa</Text>
      <View>
        <TextInput
          label={"Nome"}
          placeholder={"Digite o nome"}
          mode={"outlined"}
          //aqui recebe o valor da variavel
          value={nome}
          //aqui recebe o valor do input
          onChangeText={setNome}
        />
        <TextInput
          label={"telefone"}
          placeholder={"Digite o telefone"}
          mode={"outlined"}
          value={telefone}
          onChangeText={setTelefone}
        />
        <Button onPress={cadastrarPessoa}>Cadastrar Pessoa</Button>
      </View>
    </View>
  );
}
