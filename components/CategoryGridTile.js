import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";
const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => {
          return [pressed && styles.pressablePressed, styles.pressable];
        }}
        onPress={props.onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: props.color }]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, // For Android
    shadowColor: "black", // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowRadius: 8, // For iOS
    overflow: Platform.select({ android: "hidden" }),
  },
  pressable: {
    flex: 1,
  },
  pressablePressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
