const IndexSVG = () => {
  return (
    <div>
      <svg
        className="overflow-"
        // width="100vw"
        // height="100%"
        viewBox="0 0 1440 1024"
        fill="none"
        //  xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pattern1"
            patternUnits="userSpaceOnUse"
            width="709"
            height="567"
          >
            <image
              href="map_yellow.png"
              height={567}
              width={709}
              x={0}
              y={0}
              alt="yellowmap"
            />
          </pattern>
        </defs>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-30.8893 919.375C-182.92 1012.54 -210.123 1365.65 -405.574 1293.89C-596.384 1223.84 -842.292 645.257 -925.877 405.05C-994.427 208.052 -289.527 620.378 -242.656 455.812C-200.054 306.232 -638.471 -80.3756 -533.142 -157.71C-396.022 -258.386 -300.228 -578.914 -128.045 -431.786C56.387 -274.192 -104.567 50.3924 -2.51702 295.699C85.3377 506.885 396.937 603.431 387.639 807.818C378.724 1003.8 96.4655 841.333 -30.8893 919.375Z"
          fill="#3B054F" // purple
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M700.548 1268.11C495.91 1447.04 495.884 1897.65 211.971 1889.38C-65.2017 1881.3 -475.513 1263.35 -619.715 999.125C-737.978 782.43 302.659 1003.29 350.976 779.116C394.892 575.35 -266.495 276.04 -126.11 136.166C56.6475 -45.9253 157.115 -484.429 416.354 -372.736C694.037 -253.097 501.961 217.46 672.802 480.376C819.879 706.721 1270.57 697.698 1279.66 955.85C1288.38 1203.38 871.972 1118.23 700.548 1268.11Z"
          fill="#E12A62" // pink
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M700.548 1268.11C495.91 1447.04 495.884 1897.65 211.971 1889.38C-65.2017 1881.3 -475.513 1263.35 -619.715 999.125C-737.978 782.43 302.659 1003.29 350.976 779.116C394.892 575.35 -266.495 276.04 -126.11 136.166C56.6475 -45.9253 157.115 -484.429 416.354 -372.736C694.037 -253.097 501.961 217.46 672.802 480.376C819.879 706.721 1270.57 697.698 1279.66 955.85C1288.38 1203.38 871.972 1118.23 700.548 1268.11Z"
          fill="url(#pattern1)"
          fillOpacity="1"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1417.75 633.728C1259.03 801.043 1266.86 1145.18 1042.19 1181.42C822.855 1216.79 487.599 806.355 368.955 626.181C271.652 478.416 1098.47 491.121 1132.77 312.675C1163.95 150.477 635.69 21.0209 744.273 -106.842C885.63 -273.296 957.441 -623.239 1164.4 -576.794C1386.09 -527.044 1242.39 -138.891 1382.08 36.2921C1502.33 187.108 1858.6 112.669 1870.29 308.457C1881.49 496.189 1550.7 493.569 1417.75 633.728Z"
          fill="#FF7200" // orange
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1173.34 624.042C1056.62 747.557 1065.78 1004.83 898.633 1029.75C735.45 1054.07 481.542 744.08 391.349 608.278C317.38 496.903 933.926 514.379 957.778 381.344C979.458 260.422 584.369 158.571 664.087 64.058C767.867 -58.9812 818.027 -319.827 972.773 -283.117C1138.53 -243.795 1035.14 44.9131 1140.98 177.189C1232.09 291.066 1496.98 238.871 1507.58 385.311C1517.75 525.725 1271.11 520.574 1173.34 624.042Z"
          fill="#FF7200" // orange
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1469.76 976.644C1370.25 1229.6 1577.31 1629.82 1321.36 1752.95C1071.47 1873.16 423.067 1512.9 173.566 1344.5C-31.0548 1206.39 994.68 924.307 934.566 703C879.926 501.845 154.966 539.969 215.366 351.224C293.996 105.512 181.702 -330.113 463.274 -350.053C764.877 -371.411 810.542 134.782 1083.1 289.775C1317.75 423.208 1713.88 208.071 1840.59 433.168C1962.09 649.002 1553.13 764.745 1469.76 976.644Z"
          fill="#218E8A" // teal
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1895.8 37.4005C2162.93 87.7015 2517.21 -190.767 2686.17 37.5486C2851.11 260.444 2618.88 964.923 2500.28 1241.58C2403.01 1468.48 1933.51 513.868 1727.41 614.43C1540.08 705.835 1713.52 1410.77 1516.79 1386.85C1260.69 1355.71 853.865 1547.73 781.459 1274.9C703.903 982.653 1192.54 842.843 1293.66 546.048C1380.7 290.536 1095.08 -58.2039 1292.41 -224.895C1481.62 -384.727 1672.02 -4.73625 1895.8 37.4005Z"
          fill="#FEB538" // yellow
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1895.8 37.4005C2162.93 87.7015 2517.21 -190.767 2686.17 37.5486C2851.11 260.444 2618.88 964.923 2500.28 1241.58C2403.01 1468.48 1933.51 513.868 1727.41 614.43C1540.08 705.835 1713.52 1410.77 1516.79 1386.85C1260.69 1355.71 853.865 1547.73 781.459 1274.9C703.903 982.653 1192.54 842.843 1293.66 546.048C1380.7 290.536 1095.08 -58.2039 1292.41 -224.895C1481.62 -384.727 1672.02 -4.73625 1895.8 37.4005Z"
          fill="url(#pattern1)"
          fillOpacity="1"
        />
      </svg>
    </div>
  );
};

export default IndexSVG;
