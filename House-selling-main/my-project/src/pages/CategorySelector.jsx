import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { TbBuildingCommunity } from "react-icons/tb";
import {
  PiCarSimple,
  PiSuitcaseSimpleLight,
  PiTShirt,
  PiDog,
  PiCallBellLight,
} from "react-icons/pi";
import { CiMobile2 } from "react-icons/ci";
import { RiMotorbikeLine, RiSofaLine } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { GiCarDoor } from "react-icons/gi";
import { LiaGuitarSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";

// Categories with icons
const categories = [
  { name: "Cars", icon: <PiCarSimple /> },
  {
    name: "Properties",
    icon: <TbBuildingCommunity />,
    subcategories: [
      "For Sale: Houses & Apartments",
      "For Rent: Houses & Apartments",
      "Lands & Plots",
      "For Rent: Shops & Offices",
      "For Sale: Shops & Offices",
      "PG & Guest Houses",
    ],
  },
  { name: "Mobiles", icon: <CiMobile2 /> },
  { name: "Jobs", icon: <PiSuitcaseSimpleLight /> },
  { name: "Bikes", icon: <RiMotorbikeLine /> },
  { name: "Electronics & Appliances", icon: <FiMonitor /> },
  { name: "Commercial Vehicles & Spares", icon: <GiCarDoor /> },
  { name: "Furniture", icon: <RiSofaLine /> },
  { name: "Fashion", icon: <PiTShirt /> },
  { name: "Books, Sports & Hobbies", icon: <LiaGuitarSolid /> },
  { name: "Pets", icon: <PiDog /> },
  { name: "Services", icon: <PiCallBellLight /> },
];

export default function CategorySelector() {
  const [selected, setSelected] = useState("Properties");

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-md border rounded-md w-[800px]">
        <h3 className="p-5 text-xl text-left border-b font-bold">
          Choose A Category
        </h3>
        <div className="bg-white flex">
          {/* Left Categories */}
          <div className="w-1/2 border-r">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`px-4 py-3 cursor-pointer flex items-center justify-between border-b p-2 text-[#8d9094] text-16px
                hover:bg-[#0e040533] ${
                  selected === cat.name ? "bg-gray-200 font-semibold" : ""
                }`}
                onClick={() => setSelected(cat.name)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <span>{cat.name}</span>
                </div>

                <IoIosArrowForward className=" text-2xl text-[#8d9094]" />
              </div>
            ))}
          </div>

          {/* Right Subcategories */}
          <div className="w-1/2">
            {categories
              .find((cat) => cat.name === selected)
              ?.subcategories?.map((sub) => (
                <Link
                  key={sub}
                  to={`/upload?category=${selected}&subcategory=${encodeURIComponent(
                    sub
                  )}`} // pass category and subcategory as query params
                  className="block py-4 cursor-pointer hover:bg-[#0e040533] border-b text-16px text-[#8d9094]"
                >
                  {sub}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
