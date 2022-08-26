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

const Search = ({ navigation, route }) => {
  const [movie, setMovie] = useState(null);

  const onSearch = async (e) => {
    await fetch(`${API_URL}?t=${e.text}&apikey=${API_KEY}`)
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
      <View style={styles.searchSection}>
        <TextInput
          style={styles.search}
          selectionColor="#fc9c2e"
          placeholder="Search by title"
          onSubmitEditing={({ nativeEvent }) => onSearch(nativeEvent)}
        />
      </View>
      <View style={styles.movieListView}>
        {movie && (
          <Movie
            id={movie.omdbID}
            poster={movie.Poster}
            title={movie.Title}
            navigation={navigation}
          />
        )}
      </View>
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
  searchSection: {
    alignItems: "center",
  },
  search: {
    marginTop: 50,
    padding: 10,
    height: 45,
    width: "90%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#aaa5a5",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Search;
