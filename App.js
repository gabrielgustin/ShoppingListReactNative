import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Modal from "./src/components/Modal";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [modalVisable, setModalVisable] = useState(false);

  const onHandleChangeItem = (text) => {
    setTextItem(text);
  };
  const addItem = () => {
    setList((ActualState) => [...ActualState, textItem]);
    setTextItem("");
  };
  const handleModal = (item) => {
    console.log(`Se Intento Editar ${item}`);
    setItemSelected(item);
    setModalVisable(true);
  };
  const onHandleDelet = (item) => {
    console.log(`Se Elimino ${item}`);
    setList((ActualState) => ActualState.filter((element) => element !== item));
    setModalVisable(!modalVisable);
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.renderItemStyle}>
        <Text>{item}</Text>
        <Button title="Edit" onPress={() => handleModal(item)} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Write your product"
            style={styles.addItemInput}
            onChangeText={onHandleChangeItem}
            value={textItem}
          />
          <Button title="Add" onPress={addItem} style={styles.addItemBotton} />
        </View>
      </View>
      <View style={styles.listCountainer}>
        <FlatList
          data={list}
          keyExtractor={(item) => item}
          renderItem={renderItem}
        />
      </View>
      <Modal
        isVisible={modalVisable}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelet(itemSelected)}
        onDismissModal={() => setModalVisable(false)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a9957b",
  },
  titleContainer: {
    height: 200,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  listCountainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    width: "80%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "500",
    color: "#1E283C",
  },
  Buttons: {},
});
