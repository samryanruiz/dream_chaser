import { StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, } from "react-native";
import { useState, useEffect } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [initialRender, setInitialRender] = useState(true); // Add state for initial render

  useEffect(() => {
    if (initialRender) {
      const initialGoals = Array.from({ length: 50 }, (_, index) => ({
        text: `Goal ${index + 1}`,
        key: Math.random().toString(),
      }));

      setCourseGoals(initialGoals);
      setInitialRender(false); 
    }
  }, [initialRender]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
  }

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoals) =>
    currentCourseGoals.filter((goal) => goal.key !== key)
    );
  }

  return (
    <ImageBackground
      source={{uri: "https://img.freepik.com/free-vector/blue-wavy-patterned-background-vector_53876-177391.jpg?w=740&t=st=1694525610~exp=1694526210~hmac=9871f4dd00575460a9e90084cf29f08f8eac52b9882d6005ef203497e3e34b44"}}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.appTitle}>Dream Chaser</Text>
          <Text style={styles.tagline}>
            Track Your Goals, Achieve Your Dreams
          </Text>
        </View>
        <GoalInput onAddGoal={addGoalHandler}/>
        <Text style={styles.listOfGoalsText}>List of Goals</Text>
        <View style={styles.goalsListContainer}>
          <FlatList 
            data={courseGoals}
            renderItem={(itemData) => {
              return(
                <GoalItem 
                  text={itemData.item.text}
                  onDelete={() => deleteGoalHandler(itemData.item.key)} 
                />
              )
          }}/>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    color: "#00A5E7",
  },
  tagline: {
    fontSize: 16,
    color: "#00A5E7",
  },
  listOfGoalsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00A5E7",
  },
  goalsListContainer: {
    width: '100%',
    flex: 1,
    padding: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginTop: 20,
    maxHeight: 550,
  },
});