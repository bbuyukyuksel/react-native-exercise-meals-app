import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../config";
import { useNavigation } from "@react-navigation/native";

const FavoriteItem = (props) => {
  const selectedMeal = props.selectedMeal;
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("Detail", { mealId: selectedMeal.id });
  };

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPressHandler}
    >
      <View style={styles.container}>
        <View style={styles.shadowContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: selectedMeal.imageUrl }}
            />
          </View>
        </View>
        <Text style={[styles.title, styles.boxShadow]}>
          {selectedMeal.title}
        </Text>
      </View>
    </Pressable>
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  container: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  boxShadow: {
    shadowColor: "black",
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
  },
  shadowContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    borderRadius: 4,
    fontSize: 20,
    textAlign: "center",
    marginTop: -40,
    color: COLORS.PRIMARY_COLOR,
    backgroundColor: COLORS.QUATERNARY_COLOR,
    padding: 3,
  },
});
