const commentContent = {
  one: {
    read: false,
    i: "avatar-mark-webber.webp",
    a: "reacted to your recent post",
    s: "Mark Webber",
    o: "My first tournament today!",
    t: "1m",
  },
  two: {
    read: false,
    i: "avatar-angela-gray.webp",
    a: "followed you",
    s: "Angela Gray",
    o: "",
    t: "5m",
  },
  three: {
    read: false,
    i: "avatar-jacob-thompson.webp",
    a: "has joined your group",
    s: "Jacob Thompson",
    o: "Chess Club",
    t: "1day",
  },
  four: {
    read: true,
    i: "avatar-rizky-hasanuddin.webp",
    a: "send you a private message",
    s: "Rizky Hasanuddin",
    o: "",
    t: "5day",
    m: "Hello, thanks for setting up the Chess Club, I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  five: {
    read: true,
    i: "avatar-kimberly-smith.webp",
    a: "comented on your picture",
    s: "Kimberly Smith",
    o: "",
    t: "1week",
    p: require("../assets/images/image-chess.webp"),
  },
  six: {
    read: true,
    i: "avatar-nathan-peterson.webp",
    a: "reacted to your recent post",
    s: "Nathan Peterson",
    o: "5 end-game strategies to increase your win rate",
    t: "2weeks",
  },
  seven: {
    read: true,
    i: "avatar-anna-kim.webp",
    a: "left the group",
    s: "Anna Kim",
    o: "Chess Club",
    t: "2weeks",
  },
};

export default JSON.stringify(commentContent);
