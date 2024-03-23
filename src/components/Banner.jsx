import React from "react";
import bannerImage from "../assets/AvengerLogo.jpg";

function Banner() {
  return (
    // <div
    //   className="h-[20vh] md:h-[85vh] bg-cover bg-center flex items-end pb-0"
    //   style={{ backgroundImage: `url(${bannerImage})` }}
    // >
    //   <div className="text-white w-full text-center text-xl bg-gray-900/60 p-4">
    //     Avengers Endgame
    //   </div>
    // </div>

    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-title">Avengers Endgame</div>
    </div>
  );
}

export default Banner;
