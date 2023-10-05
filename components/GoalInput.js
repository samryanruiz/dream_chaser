import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredText] = useState("");

    function textInputHandler(enteredText) {
        setEnteredText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredText('');
    }

    return(
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal!"
            onChangeText={textInputHandler}
            value={enteredGoalText}
          />
          <Pressable 
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }, styles.buttonContainer]}
            onPress={addGoalHandler}
            unstable_pressDelay={5000}
          >
            <Text style={styles.buttonText}>Add Goal</Text>
          </Pressable>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
      width: "100%",
      paddingHorizontal: 16,
    },
    textInput: {
      borderWidth: 2,
      borderColor: "#7AD3F6",
      backgroundColor: "white",
      flex: 1,
      marginRight: 8,
      padding: 13,
      borderRadius: 30,
      color: "grey",
    },
    buttonContainer: {
      backgroundColor: "#00A5E7",
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20,
      height: 50,
      justifyContent: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    },
  });