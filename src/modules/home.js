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

import Movie from "./movie";

const Home = ({ navigation, route }) => {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var movies = [];
    for (let i = 0; i < 10; i++) {
      await fetch(`${API_URL}?t=${i}&apikey=${API_KEY}`)
        .then((response) => response.json())
        .then((json) => movies.push(json))
        .catch((error) => console.error(error));
    }
    setMovieList(movies);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.movieListView}>
          {movieList?.map((movie) => {
            return (
              <Movie
                key={movie.imdbID}
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  movieListView: {
    alignItems: "center",
  },
});

export default Home;
