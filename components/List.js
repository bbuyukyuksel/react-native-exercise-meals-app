import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../config";

const List = (props) => {
  return props.data.map((item, index) => (
    <View style={[styles.container, props.style]} key={index}>
      <Text style={styles.item}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.SECONDARY_COLOR,
    margin: 4,
    borderRadius: 6,
  },
  item: {
    textAlign: "center",
    marginVertical: 4,
    color: COLORS.QUATERNARY_COLOR,
    padding: 2,
    fontSize: 12,
  },
});
