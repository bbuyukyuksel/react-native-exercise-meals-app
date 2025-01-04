import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FavoriteContextProvider from "./store/context/favorites-context";

import CONFIG from "./config";
import CategoryScreen from "./screens/CategoryScreen";
import OverviewScreen from "./screens/OverviewScreen";
import DetailScreen from "./screens/DetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Categories"
      screenOptions={CONFIG.SCREEN.OPTIONS}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={CONFIG.SCREEN.OPTIONS}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ title: "All Categories", headerShown: false }}
              // options={CONFIG.SCREEN.Categories}
            />
            <Stack.Screen
              name="MealOverview"
              component={OverviewScreen}
              // options={({ route, navigation, theme }) => {
              //   const categoryId = route.params.categoryId;
              //   return {
              //     title: CATEGORIES.find((category) => category.id === categoryId)
              //       .title,
              //   };
              // }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              // options={{
              //   ...CONFIG.SCREEN.Detail,
              //   headerRight: () => <Text> header </Text>,
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
