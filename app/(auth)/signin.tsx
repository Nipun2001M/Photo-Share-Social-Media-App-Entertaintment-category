import { Link, router } from "expo-router";
import React, { useState } from "react";
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

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    setErrors({ username: "", password: "" });

    let isValid = true;
    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
      isValid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    } else if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
      isValid = false;
    }

    if (isValid) {
    
      router.push(`/home?username=${username}`);
      


    
      
      
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.innerContainer}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Image
              style={styles.Logo}
              source={require("../../assets/images/logo.png")}
            />

            <Text
              style={{
                color: "#808080",
                fontFamily: "SpaceMono",
                fontSize: 17,
              }}
            >
              Welcome Back to Your Gallery of Wonders!
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            {errors.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.inputbuttontext}>Loginn</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{ fontFamily: "SpaceMono", paddingTop: 10 }}>
              Don't You Have an Account?{" "}
              <Link href={"/signup"}>
                <Text
                  style={{
                    color: "#DE3163",
                    fontWeight: "bold",
                    fontFamily: "SpaceMono",
                  }}
                >
                  Create Account
                </Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    fontFamily: "SpaceMono",
    justifyContent: "center",
    marginTop: 90,
  },
  scrollContent: {
    padding: 16,
    fontFamily: "SpaceMono",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center", 
    fontFamily: "SpaceMono",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 16, 
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
  },
  inputbuttontext: {
    fontWeight: "300",
    color: "white",
    fontSize: 24,
  },
  Logo: {
    height: 50,
    width: 50,
    margin: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Signin;
