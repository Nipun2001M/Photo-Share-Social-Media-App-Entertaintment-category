import { LikeProvider } from "@/contexts/LikeContext";
import { Link, router } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.innerContainer}>
          <Text
            style={{
              fontFamily: "SpaceMono",
              fontSize: 40,
              color: "#808080",
              fontWeight: "400",
            }}
          >
            MeowLens
          </Text>
          <Image
            style={styles.Logo}
            source={require("../assets/images/logo.png")}
          />
          <Text
            style={{
              fontFamily: "SpaceMono",
              fontSize: 25,
              margin: 5,
              color: "#808080",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Share your world, admire theirs!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.inputbuttontext}>Start your journey !</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    fontFamily: "SpaceMono",
  },
  scrollContent: {
    marginTop:50,
    padding: 16,
    fontFamily: "SpaceMono",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center", // Center children horizontally
    marginTop: 20,
    fontFamily: "SpaceMono",
  },
  inputContainer: {
    width: "100%", // Ensures the input container spans full width
    paddingHorizontal: 16, // Add some horizontal padding for aesthetics
    fontFamily: "SpaceMono",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#DE3163",
    borderRadius: 40,
    paddingHorizontal: 10,
    width: "90%",
    marginTop: 30,
    fontFamily: "SpaceMono",
  },
  orangeBox: {
    flex: 2,
    backgroundColor: "darkorange",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    fontFamily: "SpaceMono",
  },
  greenBox: {
    flex: 3,
    backgroundColor: "green",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    fontFamily: "SpaceMono",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    fontFamily: "SpaceMono",
  },
  button: {
    backgroundColor: "#DE3163",
    padding: 10,
    borderRadius: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    fontFamily: "SpaceMono",
    marginTop:90
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontFamily: "SpaceMono",
  },
  inputbuttontext: {
    fontWeight: "300",
    color: "white",
    fontSize: 24,
    fontFamily: "SpaceMono",
  },
  Logo: {
    height: 350,
    width: 350,
    margin:20
  },
});
