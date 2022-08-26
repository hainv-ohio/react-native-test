import { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../modules/home";
import Search from "../modules/search";

const General = ({ navigation, route }) => {
  const [tabBarState, setTabBarState] = useState("Home");

  return (
    <SafeAreaView style={styles.container}>
      {tabBarState == "Home" && <Home navigation={navigation} />}
      {tabBarState == "Search" && <Search navigation={navigation} />}

      <View style={styles.tabBarSection}>
        <View style={styles.buttonView}>
          <MaterialCommunityIcons.Button
            style={styles.button}
            name="home-variant"
            color={tabBarState == "Home" ? "#fc9c2e" : "#5a5e5e"}
            backgroundColor="#ffffff"
            size={30}
            iconStyle={styles.iconStyle}
            onPress={() => {
              setTabBarState(...[], "Home");
            }}
          >
            <Text
              style={
                tabBarState == "Home"
                  ? styles.activeButtonText
                  : styles.nonActiveButtonText
              }
            >
              Home
            </Text>
          </MaterialCommunityIcons.Button>
        </View>
        <View style={styles.buttonView}>
          <FontAwesome.Button
            style={styles.button}
            name="search"
            color={tabBarState == "Search" ? "#fc9c2e" : "#5a5e5e"}
            backgroundColor="#ffffff"
            size={30}
            iconStyle={styles.iconStyle}
            onPress={() => {
              setTabBarState(...[], "Search");
            }}
          >
            <Text
              style={
                tabBarState == "Search"
                  ? styles.activeButtonText
                  : styles.nonActiveButtonText
              }
            >
              Search
            </Text>
          </FontAwesome.Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  tabBarSection: {
    position: "absolute",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "row",
  },

  button: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  activeButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "#fc9c2e",
  },
  nonActiveButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "#5a5e5e",
  },
  iconStyle: {
    marginRight: 0,
  },
  buttonView: {
    width: "50%",
  },
});

export default General;
