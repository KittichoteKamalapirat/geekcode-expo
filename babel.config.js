module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // "nativewind/babel",

      [
        "module:react-native-dotenv",
        {
          moduleName: "react-native-dotenv",
          verbose: false,
        },
      ],
      "react-native-reanimated/plugin", //Reanimated plugin has to be listed last.
    ],
  };
};
