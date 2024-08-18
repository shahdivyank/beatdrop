import React from "react";
import { BaseToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
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
export default toastConfig;

// import React from 'react';
// import { ReactNode } from 'react';
// import { BaseToast, BaseToastProps, ToastConfigParams } from 'react-native-toast-message';

// const toastConfig: Record<string, (props: ToastConfigParams<BaseToastProps>) => React.ReactNode> = {

//   success: (props: ToastConfigParams<BaseToastProps>) => (
//     <BaseToast
//       {...props}
//       style={{ borderLeftColor: 'pink' }}
//       contentContainerStyle={{ paddingHorizontal: 24 }}
//       text1Style={{
//         fontSize: 15,
//         fontWeight: '400',
//       }}
//     />
//   ),
// };

// export default toastConfig;
