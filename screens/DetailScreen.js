import { useLayoutEffect } from "react";
import { View, Image, Text, ScrollView, StyleSheet } from "react-native";

import MealDetail from "../components/MealDetail";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";

import { MEALS } from "../data/dummy-data";
import { COLORS } from "../config";
import { useFavorites } from "../store/context/favorites-context";

const DetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const { favoriteMealIds, addToFavorites, removeFromFavorites } =
    useFavorites();

  const headerButtonPressHandler = (value) => {
    value
      ? addToFavorites(selectedMeal.id)
      : removeFromFavorites(selectedMeal.id);
  };

  const isFavorite = favoriteMealIds.includes(selectedMeal.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <IconButton
          isFavorite={isFavorite}
          name={isFavorite ? "heart" : "heart-outline"}
          color={COLORS.QUATERNARY_COLOR}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, selectedMeal, headerButtonPressHandler]);

  return (
    <View style={styles.screen}>
      <View style={styles.shadowContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        </View>
      </View>
      <Text style={[styles.title, styles.boxShadow]}>{selectedMeal.title}</Text>
      <MealDetail {...selectedMeal} />
      <View style={styles.contentContainer}>
        <ScrollView>
          <View>
            <Subtitle title="Ingredients" />
            <List data={selectedMeal.ingredients} style={styles.boxShadow} />
            <Subtitle title="Steps" />
            <List data={selectedMeal.steps} style={styles.boxShadow} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "black",
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
  },
  screen: {
    flex: 1,
    padding: 16,
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
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
