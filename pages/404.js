import GraySwoosh from "@/public/Swoosh400.svg";
import Circle400 from "@/public/Circle400.svg";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center text-white">
      <title>404</title>
      <div className="absolute top-0 left-0 overflow-hidden z-0 bg-beatdrop-lightgrey ">
        <Image src={GraySwoosh} alt="cloud" draggable={false} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
        <Image src={Circle400} alt="cloud" draggable={false} />
      </div>

      <div className="flex flex-col items-center justify-center w-[480px] h-[480px]  z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 p-0">
        <p className=" text-9xl m-0 mt-2 ">404</p>
        <p className=" text-mg -mt-3">oops...page not found!</p>
      </div>
    </div>
  );
}
