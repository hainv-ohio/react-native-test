import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { API_URL, API_KEY } from "@env";

const MovieDetail = ({ navigation, route }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    await fetch(`${API_URL}?i=${route.params.id}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.Response == "True") {
          setMovie(json);
        } else {
          setMovie(null);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      {movie && (
        <View>
          <Image
            source={{ uri: movie.Poster }}
            resizeMode="stretch"
            style={styles.image}
          ></Image>
          <View style={styles.informationSection}>
            <Text style={styles.title}>{movie.Title}</Text>
            <Text style={styles.genre}>{movie.Genre}</Text>
            <Text style={styles.runtime}>{`Runtime: ${movie.Runtime}`}</Text>
            <Text style={styles.plot}>{movie.Plot}</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    height: 300,
    borderRadius: 10,
  },
  informationSection: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  genre: {
    fontSize: 16,
    fontWeight: "100",
    marginTop: 10,
  },
  runtime: {
    fontSize: 16,
    fontWeight: "100",
    marginTop: 10,
  },
  plot: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
});

export default MovieDetail;
