import React from "react";
import {
  View,
  StyleSheet,
  Modal as NewModal,
  Text,
  Button,
} from "react-native";

const Modal = ({isVisible, actionDeleteItem,itemSelected,onDismissModal }) => {
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalCountainer}>
        <View style={styles.modalStyle}>
          <Text style={styles.modalTextStyle}>{itemSelected}</Text>
          <Button title="Delete" onPress={() => actionDeleteItem()} />
          <Button title="Dismiss" onPress={() => onDismissModal()} />
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalCountainer: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 27,
  },
});
