const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const createConfig = () => {
  // eslint-disable-next-line no-undef
  return getDefaultConfig(__dirname);
};

const config = createConfig();
module.exports = withNativeWind(config, { input: "./globals.css" });
