import React, { useState } from "react";
import {Modal, Dimensions, StyleSheet, Text, Pressable, View } from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false); // Definindo as constantes para a visibilidade do Modal;
  const windowWidth = Dimensions.get('screen').width.toFixed(); // Definindo a constante para receber o valor da largura da tela;
  const windowHeight = Dimensions.get('screen').height.toFixed(); // Definindo a constante para receber o valor da altura da tela;

  return (
    <View style={styles.centeredView}>
      <Modal // Inicializando o componente Modal;
        animationType="fade" // Aplicando a animação do tipo fade ao Modal;
        transparent={true} // Setando a transparência do Modal;
        visible={modalVisible} // Instanciando a visibilidade do Modal;
      >
        <View style={styles.centeredView}> // Componente respectivo à estilização do Modal;
          <View style={styles.modalView}> // Componente respectivo à estilização do Modal;
            <Text style={styles.modalText}>Dados do dispositivo {'\n\n'} Altura: {windowHeight} {'\n'} Largura: {windowWidth}</Text> // Exibindo as informações das constantes dentro do Modal;
            <Pressable // Componente Pressable iniciado;
              style={[styles.button, styles.buttonClose]} //Definindo o estilo do botão;
              onPress={() => setModalVisible(!modalVisible)} // Instanciando a função para alterar a visibilidade do Modal;
            >
              <Text style={styles.textStyle}>Fechar</Text> // Iniciando o botão para fechar o Modal;
            </Pressable> // Encerrando o componente Pressable;
          </View>
        </View>
      </Modal>

      <Pressable // Iniciando um novo componente Pressable;
        style={[styles.button, styles.buttonOpen]} // Estilizando o componente;
        onPress={() => setModalVisible(true)} // A função neste estado vai estar como true, então o Modal será exibido;
      >
        <Text style={styles.textStyle}>Exibir Modal</Text> // Iniciando o texto do botão de abrir o Modal;
      </Pressable>
    </View>
  );
};

// PARTE DE ESTILIZAÇÃO
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 40,
    backgroundColor: "#32322C",
    borderRadius: 15,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "white",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color: "white",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center"
  }
});
