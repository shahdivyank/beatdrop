import React from "react";
import { BaseToast } from "react-native-toast-message";

const config = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "pink" }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
};
export default config;
