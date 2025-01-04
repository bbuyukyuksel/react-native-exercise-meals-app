import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { useLayoutEffect, useRef } from "react";
import { COLORS } from "../config";

const IconButton = (props) => {
  const toggleRef = useRef(false);

  useLayoutEffect(() => {
    toggleRef.current = props.isFavorite;
  }, [toggleRef, props.isFavorite]);

  const toggleHandler = () => {
    toggleRef.current = !toggleRef.current;
    if (props.onPress) {
      props.onPress(toggleRef.current);
    }
  };

  return (
    <Pressable
      onPress={toggleHandler}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <Ionicons name={props.name} size={24} color={props.color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
