import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdMyLocation, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function OLXHeader() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("English");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("India");
  const [onlyCars, setOnlyCars] = useState(false);
  const navigate = useNavigate();

  const popularLocations = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
  ];

  const categories = [
    {
      title: "Cars",
      items: [],
    },
    {
      title: "Bikes",
      items: ["Motorcycles", "Scooters", "Spare Parts", "Bicycles"],
    },
    {
      title: "Properties",
      items: [
        "For Sale: Houses & Apartments",
        "For Rent: Houses & Apartments",
        "Lands & Plots",
        "For Rent: Shops & Offices",
        "For Sale: Shops & Offices",
        "PG & Guest Houses",
      ],
    },
    {
      title: "Electronics & Appliances",
      items: [
        "TVs, Video - Audio",
        "Kitchen & Other Appliances",
        "Computers & Laptops",
        "Cameras & Lenses",
        "Games & Entertainment",
        "Fridges",
        "Computer Accessories",
      ],
    },
    {
      title: "Mobiles",
      items: ["Mobile Phones", "Accessories", "Tablets"],
    },
    {
      title: "Commercial Vehicles & Spares",
      items: ["Commercial & Other Vehicles", "Spare Parts"],
    },
    {
      title: "Jobs",
      items: [
        "Data entry & Back office",
        "Sales & Marketing",
        "BPO & Telecaller",
        "Driver",
        "Office Assistant",
        "Delivery & Collection",
        "Teacher",
        "Cook",
        "Receptionist & Front office",
        "Operator & Technician",
        "IT Engineer & Developer",
        "Hotel & Travel Executive",
        "Accountant",
        "Designer",
      ],
    },
    {
      title: "Furniture",
      items: [
        "Sofa & Dining",
        "Beds & Wardrobes",
        "Home Decor & Garden",
        "Kids Furniture",
        "Other Household Items",
      ],
    },
    {
      title: "Fashion",
      items: ["Men", "Women", "Kids"],
    },
    {
      title: "Pets",
      items: [
        "Fishes & Aquarium",
        "Pet Food & Accessories",
        "Dogs",
        "Other Pets",
      ],
    },
    {
      title: "Books, Sports & Hobbies",
      items: [
        "Books",
        "Gym & Fitness",
        "Musical Instruments",
        "Sports Equipment",
        "Other Hobbies",
      ],
    },
    {
      title: "Services",
      items: [
        "Education & Classes",
        "Tours & Travel",
        "Electronics Repair & Services",
        "Health & Beauty",
        "Home Renovation & Repair",
        "Cleaning & Pest Control",
        "Legal & Documentation Services",
        "Packers & Movers",
        "Other Services",
      ],
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Header */}
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="/images.png"
              alt="OLX India"
              className="w-12 min-w-[48px]"
            />
          </a>
        </div>

        {/* Location + Search */}
        <div className="flex-1 flex items-center mx-4 gap-4 justify-around">
          {/* Location Input */}
          <div className="relative w-80">
            {/* Search + Dropdown Bar */}
            <div className="flex items-center border border-black-300 rounded-lg px-3 py-2 w-full shadow-sm">
              <FiSearch className="text-gray-500 text-xl mr-2" />
              <span className="flex-1 text-gray-700 text-sm">{location}</span>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 text-gray-600 hover:text-black"
              >
                <IoMdArrowDropdown className="text-2xl" />
              </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                {/* Live Location */}
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <MdMyLocation className="text-gray-500 text-lg" />
                  <span className="text-sm text-gray-600">
                    Location blocked. Check browser/phone settings
                  </span>
                </div>

                {/* Divider */}
                <hr className="my-1 border-gray-200" />

                {/* Popular Locations */}
                <h4 className="px-4 py-2 text-xs font-semibold text-gray-400">
                  POPULAR LOCATIONS
                </h4>
                <ul className="text-sm">
                  {popularLocations.map((city) => (
                    <li
                      key={city}
                      onClick={() => {
                        setLocation(city);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                    >
                      <MdLocationOn className="text-gray-500 text-lg" />
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Main Search Input */}
          <div className="flex items-center border border-black-300 rounded-lg px-3 py-2 w-3xl shadow-sm bg-white">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none text-md text-gray-700 min-w-0"
            />

            {/* Checkbox + Label */}
            <label className="flex items-center gap-1 ml-3 text-sm text-gray-600 cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                checked={onlyCars}
                onChange={(e) => setOnlyCars(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              Only in Cars
            </label>

            {/* Search Button with Icon */}
            <button
              type="submit"
              aria-label="Search"
              className="ml-3 flex items-center justify-center bg-black text-white p-2 rounded-md hover:bg-gray-800 flex-shrink-0"
            >
              <FiSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center">
          {/* Language Selector */}
          <div className="px-3 py-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-2 text-md font-bold outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>

          {/* Login Button */}
          <button className="flex items-center gap-1 px-4 py-2 text-lg font-bold text-gray-700 hover:text-red-600 transition">
            Login
            <svg
              width="24"
              height="24"
              viewBox="0 0 1030 768"
              fill="currentColor"
            >
              <path d="..."></path>
              <path d="..."></path>
            </svg>
          </button>

          {/* Sell Button */}
          <div
            className="relative inline-flex rounded-full p-1"
            style={{
              background:
                "linear-gradient(to right, #facc15 33%, #14b8a6 33%, #14b8a6 66%, #2563eb 66%)",
            }}
          >
            <button
              onClick={() => navigate("/CategorySelector")} // direct navigation
              className="flex items-center bg-white rounded-full px-5 py-2 text-blue-900 font-semibold shadow"
            >
              <FaPlus className="mr-2" size={16} />
              SELL
            </button>
          </div>
        </div>
      </div>

      {/* Sub Header / Navigation */}
      <div
        className="bg-gray-50 border-t border-gray-200 px-4"
        data-aut-id="subHeader"
      >
        <div className="container mx-auto flex items-center justify-between space-x-6">
          {/* Left side: Dropdown trigger */}
          <div className="relative inline-block text-left flex-shrink-0">
            <button
              onClick={() => setOpen((v) => !v)}
              className="font-semibold px-4 py-3 flex items-center space-x-2 hover:text-blue-600 transition-colors duration-150"
              aria-expanded={open}
              aria-controls="categories-dropdown"
            >
              <span>ALL CATEGORIES</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {open && (
              <div
                id="categories-dropdown"
                className="absolute left-0 top-full mt-2 w-[96vw] max-w-[1280px] bg-white shadow-lg border rounded-lg z-50 p-8"
                style={{ minHeight: "320px" }}
              >
                <div className="columns-4 gap-12">
                  {categories.map((cat) => (
                    <div key={cat.title} className="mb-6 break-inside-avoid">
                      <h3 className="font-semibold text-base mb-2 text-gray-800">
                        {cat.title}
                      </h3>
                      <ul className="text-sm space-y-1">
                        {cat.items.map((item) => (
                          <li key={item}>
                            <a
                              href={`/${item
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`} // link slug
                              className="hover:text-blue-600 cursor-pointer text-gray-600 block"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right side: Navigation links */}
          <nav className="flex items-center space-x-8 whitespace-nowrap text-gray-700 text-sm sm:text-base font-medium">
            <a href="/Cars" className="hover:text-blue-600">
              Cars
            </a>
            <a href="/Mobile-Phones" className="hover:text-blue-600">
              Mobile Phones
            </a>
            <a href="/Electronics" className="hover:text-blue-600">
              Electronics
            </a>
            <a href="/Furniture" className="hover:text-blue-600">
              Furniture
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
