import { USERS } from "@/data/Users";

export const POSTS = [
  {
    imageUrl: "https://i.ibb.co/182bP1y/4k.png",
    user: USERS[0].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts. 🚂✨",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "theqazman",
        comment: "Wow! This build looks fire. Super excited about this!",
      },
      {
        user: "amaanath.dev",
        comment: "Once I wake up, I’ll finally be ready to code this up!",
      },
    ],
  },
  {
    imageUrl: "https://i.ibb.co/7KygWGg/forest.png",
    user: USERS[1].user,
    likes: 10230,
    caption: "Exploring the beauty of the forest 🌲🌳",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "johndoe123",
        comment: "This place looks serene. Need to visit!",
      },
      {
        user: "naturelover99",
        comment: "I can almost feel the fresh air looking at this.",
      },
    ],
  },
  {
    imageUrl: "https://i.ibb.co/2nW2Qfn/tech.png",
    user: USERS[2].user,
    likes: 5230,
    caption: "Working on the next big tech thing 💻🔧",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "codemaster2023",
        comment: "Can’t wait to see what you build!",
      },
      {
        user: "devguru55",
        comment: "This is gonna be huge!",
      },
    ],
  },
  {
    imageUrl: "https://i.ibb.co/albumPic/space.png",
    user: USERS[3].user,
    likes: 2340,
    caption: "A glimpse into the cosmos 🚀🌌",
    profile_picture: USERS[3].image,
    comments: [
      {
        user: "astrofan",
        comment: "Space is so fascinating! What a view.",
      },
      {
        user: "starchild88",
        comment: "This is a reminder of how small we are!",
      },
    ],
  },
  {
    imageUrl: "https://i.ibb.co/albumPic/beach.png",
    user: USERS[4].user,
    likes: 4540,
    caption: "Relaxing by the beach 🏖️☀️",
    profile_picture: USERS[4].image,
    comments: [
      {
        user: "surferdude",
        comment: "The perfect spot to catch some waves!",
      },
      {
        user: "seabreeze",
        comment: "I can almost hear the ocean waves!",
      },
    ],
  },
];
