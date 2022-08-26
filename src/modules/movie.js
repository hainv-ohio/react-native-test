import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Movie = (props) => {
  const goToMovieDetail = () => {
    props.navigation.navigate("MovieDetail", { id: props.id });
  };

  return (
    <TouchableOpacity onPress={goToMovieDetail} style={styles.container}>
      <Image
        source={{ uri: props.poster }}
        resizeMode="stretch"
        style={styles.image}
      ></Image>
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 10,
    borderRadius: 50,
  },
  image: {
    height: 300,
  },
  titleView: {
    height: 50,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Movie;
