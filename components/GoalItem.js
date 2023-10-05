import React, { useState } from "react";
import { StyleSheet, Text, View, CheckBox, Pressable } from "react-native";

function GoalItem(props) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.goalItems}>
      <CheckBox
        value={isSelected}
        onValueChange={(newValue) => setSelection(newValue)}
        style={styles.checkbox}
      />
      <Text
        style={[
          styles.goalText,
          { textDecorationLine: isSelected ? "line-through" : "none" },
        ]}
      >
        {props.text}
      </Text>
      <Pressable
        onPress={props.onDelete}
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          styles.deleteButton,
        ]}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    backgroundColor: "#7AD3F6",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
  },
  goalText: {
    color: "white",
    textAlign: "left",
    marginLeft: 8,
    flex: 1,
  },
  checkbox: {
    alignSelf: "center",
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "center",
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});
