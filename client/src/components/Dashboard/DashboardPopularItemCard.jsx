import React from "react";

function DashboardPopularItemCard() {
  return (
    <li className="flex gap-6 items-center">
      <p className="text-lg text-gray-400">1</p>
      <img
        className="w-[70px] bg-[#E1E3E5] rounded-tr-sm rounded-bl-sm rounded-tl-[35%] rounded-br-[35%] p-1"
        src="https://cdn.discordapp.com/attachments/518782950129795073/1100445516459954217/CITYPNG.COMHD_Apple_Blue_iPhone_12_Pro__Pro_Max_PNG_-_940x1112.png"
        alt="alt"
      />
      <section>
        <p className="text-[#414479] text-lg">Iphone 4</p>
        <p className="font-bold text-xl text-[#414479]">$456.87</p>
      </section>
    </li>
  );
}

export default DashboardPopularItemCard;
