import Link from "next/link";
import React from "react";

const AboutNav = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <Link
        className="text-beatdrop-black no-underline text-xl"
        href="/about/#introduction"
      >
        What is Beatdrop?
      </Link>
      <Link
        className="text-beatdrop-black no-underline text-xl"
        href="/about/#developers"
      >
        Meet the Team
      </Link>
    </div>
  );
};

export default AboutNav;
