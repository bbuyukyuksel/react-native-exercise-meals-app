import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../config";
const Subtitle = (props) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{props.title}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.TERTIARY_COLOR,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginVertical: 10,
    borderBottomColor: COLORS.QUATERNARY_COLOR,
    borderBottomWidth: 2,
  },
});
