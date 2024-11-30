import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

const VideoCard = () => {
  const [play, setPlay] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          {/* <Image source={{ uri: avatar }} style={styles.avatar} resizeMode="cover" /> */}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
          title sample
          </Text>
          <Text style={styles.creator} numberOfLines={1}>
           creator sample
          </Text>
        </View>

        <TouchableOpacity style={styles.menuIconContainer}>
          <Image source="" style={styles.menuIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {/* Video/Thumbnail Section */}
      {play ? (
        <Video
          source={{ uri: video }}
          style={styles.video}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          style={styles.thumbnailContainer}
        >
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} resizeMode="cover" />
          <Image source={icons.play} style={styles.playIcon} resizeMode="contain" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 56,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 8,
  },
  avatarContainer: {
    width: 46,
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  creator: {
    fontSize: 12,
    fontWeight: "400",
    color: "#AAAAAA",
    marginTop: 2,
  },
  menuIconContainer: {
    paddingTop: 6,
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  video: {
    width: "100%",
    height: 240,
    borderRadius: 12,
    marginTop: 12,
  },
  thumbnailContainer: {
    width: "100%",
    height: 240,
    borderRadius: 12,
    marginTop: 12,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  playIcon: {
    position: "absolute",
    width: 48,
    height: 48,
  },
});

export default VideoCard;
