import { View, Text, Image } from "react-native";
import React from "react";

interface Post {
  imageUrl: string;
  user: string;
  likes: number;
  caption: string;
  profile_picture: string;
  comments: {
    user: string;
    comment: string;
  }[];
}

const Post = ({ post }: { post: Post }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <View style={styles.divider} />
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          paddingVertical: 2,
          paddingHorizontal: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text
          style={{
            color: "white",
            marginLeft: 5,
            fontSize: 12.5,
            fontWeight: 500,
          }}
        >
          {post.user}
        </Text>
      </View>
      <View
        style={{
          width: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "900" }}>
          ⋯
        </Text>
      </View>
    </View>
  );
};

const styles = {
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 5,
    opacity: 0.3,
  },
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#c13584",
  },
};

export default Post;
