import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
} from "react-native";

import MealDetail from "./MealDetail";
import { COLORS } from "../config";

const MealItem = ({
  id,
  title,
  duration,
  complexity,
  affordability,
  imageUrl,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.pressedStyle}
        onPress={navigation.navigate.bind(this, "Detail", { mealId: id })}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 10,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    backgroundColor: COLORS.SECONDARY_COLOR,
    elevation: 4, // For Android
    shadowColor: "black", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 8, // For iOS
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  pressedStyle: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    color: COLORS.QUATERNARY_COLOR,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 10,
  },
});
