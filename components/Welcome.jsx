import React from "react";

const Welcome = () => {
  return (
    <div class="h-screen bg-indigo-500">
      <div class="flex justify-center items-center pt-24">
        <img class="w-20" src="beatdrop-logo-white-headphones.png" />
      </div>

      <div class="flex justify-center items-center pt-4">
        <img class="w-1/2" src="beatdrop-logo-white-text.png" />
      </div>

      <div class="flex justify-center items-center">
        <h3 class="text-2xl mb-8 text-gray-200">
          hear the world from another perspective
        </h3>
      </div>
    </div>
  );
};

export default Welcome;