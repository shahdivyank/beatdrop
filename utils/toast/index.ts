import Toast from "react-native-toast-message";
import { ToastType } from "react-native-toast-message";

const toaster: Record<ToastType, (message: string) => void> = {
  success: (message: string) =>
    Toast.show({
      type: "success",
      text1: message,
      text2: "UNDO",
      position: "bottom",
      bottomOffset: 60,
      visibilityTime: 4000,
    }),
  error: (message: string) =>
    Toast.show({
      type: "error",
      text1: message,
      position: "bottom",
      bottomOffset: 60,
    }),
  info: (message: string) =>
    Toast.show({
      type: "info",
      text1: message,
      position: "bottom",
      bottomOffset: 60,
    }),
};

const Toaster = (message: string, type: ToastType): void => {
  toaster[type](message);
};

export default Toaster;
