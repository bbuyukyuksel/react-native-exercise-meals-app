import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import FavoriteItem from "../components/FavoriteItem";
import { COLORS } from "../config";

const FavoriteScreen = (props) => {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id),
  );

  if (favoriteMeals.length == 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> You have no any favorite meals! </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <FavoriteItem selectedMeal={itemData.item} />}
    />
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: COLORS.TERTIARY_COLOR,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
