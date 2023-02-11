// pages/404.js
export default function Custom404() {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute top-0 left-0 overflow-hidden z-0">
        <title> 404</title>
        <svg
          width="100vw"
          height="100vh"
          className="block"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M437.203 795.855C173.227 595.871 -209.059 557.268 -357.691 301.772C-502.795 52.3418 -203.515 -265.02 -58.4251 -372.528C60.5668 -460.697 443.718 459.47 660.383 522.264C857.32 579.339 748.636 8.12468 944.259 146.784C1198.93 327.294 1626 455.498 1673.37 679.875C1724.12 920.214 1219.63 706.599 1090.25 838.258C978.869 951.603 1233.61 1359.08 1019.59 1345.18C814.389 1331.86 658.334 963.381 437.203 795.855Z"
            fill="#E9E9E9"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center w-[480px] h-[480px] rounded-full bg-gray-300 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className=" text-9xl font-bold m-0">404</p>
        <p className=" text-mg font-bold  m-0">oops...page not found!</p>
      </div>
    </div>
  );
}
