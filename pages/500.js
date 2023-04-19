import GraySwoosh from "@/public/Swoosh500.svg";
import Circle500 from "@/public/Circle500.svg";
import Image from "next/image";

export default function Custom500() {
  return (
    <div className="flex items-center justify-center text-white">
      <title>500</title>
      <div className="absolute top-0 left-0 overflow-hidden z-0 bg-beatdrop-lightgrey ">
        <Image src={GraySwoosh} alt="cloud" draggable={false} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
        <Image src={Circle500} alt="cloud" draggable={false} />
      </div>

      <div className="flex flex-col items-center justify-center w-[480px] h-[480px]  z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className=" text-9xl m-0 mt-2">500</p>
        <p className=" text-mg -mt-3">oops...internal server error!</p>
      </div>
    </div>
  );
}
