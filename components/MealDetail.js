import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../config";

const MealDetail = (props) => {
  const { duration, complexity, affordability } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{duration}m</Text>
      <Text style={styles.item}>{complexity.toUpperCase()}</Text>
      <Text style={styles.item}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  item: {
    color: COLORS.QUATERNARY_COLOR,
    fontSize: 10,
    margin: 4,
  },
});
