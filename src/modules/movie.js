import { View, Text, StyleSheet, Image } from "react-native";

const Movie = (props) => {
  const goToMovieDetail = () => {
    props.navigation.navigate("MovieDetail", { id: props.id });
  };

  return (
    <View style={styles.container} onStartShouldSetResponder={goToMovieDetail}>
      <Image
        source={{ uri: props.poster }}
        resizeMode="stretch"
        style={styles.image}
      ></Image>
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 10,
    marginTop: 10,
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
