import { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, FlatList, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const OverviewScreen = (props) => {
  const route = useRoute();
  const { navigation } = props;
  const categoryId = route.params.categoryId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId).title,
    });
  }, [navigation, categoryId]);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  function renderMealItem(itemData) {
    const item = itemData.item;
    const data = {
      imageUrl: item.imageUrl,
      title: item.title,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    };

    return <MealItem {...data} />;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
      />
    </View>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
