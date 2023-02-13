import Welcome from "@/components/Welcome";
import React from "react";

const index = () => {
  return (
    <div>
      <title> home</title>
      <svg
        width="100vw"
        height="100%"
        viewBox="0 0 1440 1693"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M703.356 1214.83C335.498 1057.57 -123.872 1124.04 -372.755 868.005C-615.729 618.046 -357.683 158.595 -219.037 -9.81947C-105.331 -147.94 612.685 818.64 884.995 828.923C1132.51 838.269 838.184 200.495 1108 305.852C1459.26 443.008 1997.31 468.47 2118.41 717.624C2248.12 984.503 1594.37 881.552 1481.2 1073.68C1383.77 1239.09 1801.44 1642.26 1546.53 1688.51C1302.11 1732.87 1011.51 1346.57 703.356 1214.83Z"
          fill="#218E8A"
        />
      </svg>

      <Welcome />
    </div>
  );
};

export default index;
