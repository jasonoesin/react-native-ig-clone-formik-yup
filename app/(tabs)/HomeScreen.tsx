import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/home/Header";
import Stories from "@/components/home/Stories";
import Post from "@/components/home/Post";
import { POSTS } from "@/data/Posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView showsVerticalScrollIndicator={false}>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}

        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}

        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
