import ImageCard from "@/components/ui/ImageCard";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";

const home = () => {
  type RouteParams = {
    username?: string;
  };

  const route = useRoute();
  const { username } = route.params as RouteParams;

  interface Hit {
    id: number;
    user: string;
    downloads: number;
    webformatURL: string;
    userImageURL: string;
    likes: number;
    comments: number;
  }

  const [hits, setHits] = useState<Hit[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("Nature"); 
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true); 
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=47359681-36a47568ecb654a2ed2b05623&q=${searchTerm}&image_type=photo&pretty=true`
      );
      const data = await response.json();
      setHits(data.hits); 
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")} 
        />

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Dear {username || "Guest"}</Text>
          <Text style={styles.welcomeText}>Welcome to MeowLens</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for images..."
          placeholderTextColor="#DE3163"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)} 
        />

      
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.innerContainer}>
          {loading ? (
            <Text>Loading...</Text> 
          ) : hits.length > 0 ? (
            <View>
              {hits.map((hit) => (
                <ImageCard
                  key={hit.id}
                  creator={hit.user}
                  downloads={`${(hit.downloads / 1000).toFixed(1)}k`} 
                  imageURL={hit.webformatURL}
                />
              ))}
            </View>
          ) : (
            <Text>No results found for {searchTerm}</Text> 
          )}
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
  greetingText: {
    color: "black",
    fontFamily: "SpaceMono",
    fontSize: 20,
  },
  welcomeText: {
    color: "black",
    fontFamily: "SpaceMono",
    fontSize: 25,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
    
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#DE3163",
    borderRadius: 40,
    paddingHorizontal: 10,
    width: "80%",
    fontFamily: "SpaceMono",
  },
  searchButton: {
    backgroundColor: "white",
    borderColor: "#DE3163",
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  searchButtonText: {
    fontSize: 24,
    color: "#DE3163", // Updated icon color
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
});

export default home;