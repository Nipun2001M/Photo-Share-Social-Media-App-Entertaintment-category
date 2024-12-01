import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

const favorite = () => {
  const [imageName, setImageName] = useState<string>(""); 
  const [uploadedImage, setUploadedImage] = useState<any>(null); 

  const handleUploadImage = () => {
    Alert.alert("Upload", "Image upload functionality not implemented yet.");
  };

  const handleSubmit = () => {
    if (!imageName) {
      Alert.alert("Error", "Please provide an image name.");
      return;
    }

    if (!uploadedImage) {
      Alert.alert("Error", "Please upload an image.");
      return;
    }

    Alert.alert("Success", `Image "${imageName}" uploaded successfully!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
        <View style={styles.greetingContainer}>
          <Text style={styles.welcomeText}>Create Post</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.innerContainer}>
          {/* Image Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter image name"
            value={imageName}
            onChangeText={(text) => setImageName(text)}
          />

          {/* Upload Image */}
          <TouchableOpacity
            style={styles.uploadContainer}
            onPress={handleUploadImage}
          >
            {uploadedImage ? (
              <Image
                source={{ uri: uploadedImage }}
                style={styles.uploadedImage}
              />
            ) : (
              <Image
                source={require("../../assets/images/upload.png")}
                style={styles.uploadIcon}
              />
            )}
          </TouchableOpacity>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Upload</Text>
          </TouchableOpacity>
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
    marginTop: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 50,
    margin: 20,
  },
  greetingContainer: {
    flexDirection: "column",
  },
  welcomeText: {
    color: "black",
    fontFamily: "SpaceMono",
    fontSize: 25,
  },
  scrollContent: {
    padding: 16,
    fontFamily: "SpaceMono",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#DE3163",
    borderRadius: 40,
    paddingHorizontal: 16,
    width: "80%",
    fontFamily: "SpaceMono",
    marginBottom: 20,
  },
  uploadContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 150,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#DE3163",
    marginBottom: 20,
  },
  uploadIcon: {
    width: 60,
    height: 60,
    tintColor: "#DE3163",
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  submitButton: {
    backgroundColor: "#DE3163",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 40,
  },
  submitButtonText: {
    color: "white",
    fontFamily: "SpaceMono",
    fontSize: 16,
  },
});

export default favorite;
