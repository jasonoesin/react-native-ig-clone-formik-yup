import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { USERS } from "@/data/Users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => {
          return (
            <View key={index} style={{ alignItems: "center", padding: 4 }}>
              <Image source={{ uri: story.image }} style={styles.story} />
              <Text style={{ color: "white" }}>
                {story.user.length > 11
                  ? story.user.slice(0, 10).toLowerCase() + "..."
                  : story.user}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#c13584",
  },
});

export default Stories;
