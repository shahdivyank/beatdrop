import React from "react";
import { FaTimes } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs"
// import { BsMusicNoteBeamed } from "react-icons/fa"

const Upload = ({ setToggleUpload }) => {
  return (
    <>
    
     <div className="bg-[] w-[50vw] h-fit grid grid-cols-9 shadow-sm rounded-4xl">

      <div className="col-span-4 rounded-4xl">
        <div className="bg-[#EBEBEB] w-fit h-fit p-5 rounded-xl m-5">
          <BsMusicNoteBeamed className="text-9xl text-white"/>
        </div>

        
      </div>


      <div className="col-span-5 rounded-4xl">

        <div className="text-lg font-bold">
          Mariam Golwalla
        </div>

        <FaTimes
        className="hover:text-red-500 hover:cursor-pointer flex justify-items-end"
        onClick={() => setToggleUpload(false)}
      />
      </div>
      
    </div>
    
    
    </>
   
  );
};

export default Upload;

