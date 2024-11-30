import React from "react";
import { Tabs } from "expo-router";
import { Image, View, StyleSheet } from "react-native";

const PlaceholderIcon = ({ source, color }: { source: any; color: string }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={source}
        style={[styles.iconImage, { tintColor: color }]} // Add tintColor for dynamic color
        resizeMode="contain"
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          borderRadius: 24,
          height: 45,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          position: "absolute",
          width: "80%",
          alignSelf: "center",
          marginBottom: 10,
          marginLeft: 40,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <PlaceholderIcon
              source={require("../../assets/icons/home.png")}
              color={color}
            />
          ),
        }}
      />

      {/* Favorite Tab */}
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <PlaceholderIcon
              source={require("../../assets/icons/create.png")}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 25,
    height: 25,
  },
});

export default TabLayout;
