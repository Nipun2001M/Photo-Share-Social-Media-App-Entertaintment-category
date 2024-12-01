import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLikeContext } from "@/contexts/LikeContext";

const ImageCard = ({
  creator,
  downloads,
  imageURL,
}: {
  creator: string;
  downloads: string;
  imageURL:string;
}) => {
  const [Liked, setLiked] = useState(false);

  const heartIcon = Liked
    ? require("../../assets/icons/heartrose.png")
    : require("../../assets/icons/heart.png");

  const staticHeartIcon = require("../../assets/icons/download.png"); 
  const { incrementLike, decrementLike } = useLikeContext();

   const toggleLike = () => {
     if (Liked) {
       decrementLike();
     } else {
       incrementLike();
     }
     setLiked(!Liked);
   };

  return (
    <View style={{ flexDirection: "column" }}>
      <Image
        style={styles.displayimg}
        source={{
          uri: imageURL,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity  onPress={toggleLike}>
          <Image style={{ height: 25, width: 25 }} source={heartIcon} />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image style={{ height: 25, width: 25 }} source={staticHeartIcon} />
          <Text
            style={{ fontFamily: "SpaceMono", fontSize: 17, marginLeft: 7 }}
          >
            {downloads}
          </Text>
        </View>

        <Text style={{ fontFamily: "SpaceMono", fontSize: 17 }}><Text style={{color:'grey'}}>creator</Text>   {creator}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  displayimg: {
    height: 350,
    width: 350,
    margin: 20,
    borderRadius: 25,
  },
});

export default ImageCard;
