import React from "react";
import { BaseToast } from "react-native-toast-message";

const config = {
  success: (props: any) => (
    <BaseToast
      {...props}
      visibility
      style={{ backgroundColor: "#231F20", borderLeftWidth: 0 }}
      contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
      text1Style={{
        fontSize: 16,
        fontWeight: "400",
        color: "white",
        width: "50%",
      }}
      text2Style={{
        fontSize: 16,
        fontWeight: "400",
        color: "white",
        textAlign: "right",
        width: "50%",
      }}
      text2Props={{
        onPress: () => console.log("UNDO!"),
      }}
    />
  ),
};
export default config;
