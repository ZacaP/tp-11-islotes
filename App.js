import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [text,setText]= useState("");
  const [contador, setContador] = useState(0);

  function Contar(){
    let contador= 0
    for (let i= 1; i<text.length; i++){
      if (text[i - 1] === text[i + 1]){
        contador++;
      }
    }
    setContador(contador);
  }

  return (
    <View style={styles.container}>
      <TextInput   
        onChangeText={setText}
        value={text}
        placeHolder="Ingrese la frase"
        style={styles.input}
      />
      <Button
        title="Contar"
        onPress={Contar}
        style={styles.separacion}
      />
      <Text>Contador: {contador}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 25,
    marginBottom: 25,
  },
  separacion: {
    marginTop: 25,
    marginBottom: 25,
  },
});
