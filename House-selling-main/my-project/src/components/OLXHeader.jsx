// import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaPlus } from "react-icons/fa";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { MdMyLocation, MdLocationOn } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// export default function OLXHeader() {
//   const [search, setSearch] = useState("");
//   const [language, setLanguage] = useState("English");
//   const [open, setOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [location, setLocation] = useState("India");
//   const [onlyCars, setOnlyCars] = useState(false);
//   const navigate = useNavigate();

//   const popularLocations = [
//     "Delhi",
//     "Mumbai",
//     "Bangalore",
//     "Hyderabad",
//     "Chennai",
//   ];

//   const categories = [
//     {
//       title: "Cars",
//       items: [],
//     },
//     {
//       title: "Bikes",
//       items: ["Motorcycles", "Scooters", "Spare Parts", "Bicycles"],
//     },
//     {
//       title: "Properties",
//       items: [
//         "For Sale: Houses & Apartments",
//         "For Rent: Houses & Apartments",
//         "Lands & Plots",
//         "For Rent: Shops & Offices",
//         "For Sale: Shops & Offices",
//         "PG & Guest Houses",
//       ],
//     },
//     {
//       title: "Electronics & Appliances",
//       items: [
//         "TVs, Video - Audio",
//         "Kitchen & Other Appliances",
//         "Computers & Laptops",
//         "Cameras & Lenses",
//         "Games & Entertainment",
//         "Fridges",
//         "Computer Accessories",
//       ],
//     },
//     {
//       title: "Mobiles",
//       items: ["Mobile Phones", "Accessories", "Tablets"],
//     },
//     {
//       title: "Commercial Vehicles & Spares",
//       items: ["Commercial & Other Vehicles", "Spare Parts"],
//     },
//     {
//       title: "Jobs",
//       items: [
//         "Data entry & Back office",
//         "Sales & Marketing",
//         "BPO & Telecaller",
//         "Driver",
//         "Office Assistant",
//         "Delivery & Collection",
//         "Teacher",
//         "Cook",
//         "Receptionist & Front office",
//         "Operator & Technician",
//         "IT Engineer & Developer",
//         "Hotel & Travel Executive",
//         "Accountant",
//         "Designer",
//       ],
//     },
//     {
//       title: "Furniture",
//       items: [
//         "Sofa & Dining",
//         "Beds & Wardrobes",
//         "Home Decor & Garden",
//         "Kids Furniture",
//         "Other Household Items",
//       ],
//     },
//     {
//       title: "Fashion",
//       items: ["Men", "Women", "Kids"],
//     },
//     {
//       title: "Pets",
//       items: [
//         "Fishes & Aquarium",
//         "Pet Food & Accessories",
//         "Dogs",
//         "Other Pets",
//       ],
//     },
//     {
//       title: "Books, Sports & Hobbies",
//       items: [
//         "Books",
//         "Gym & Fitness",
//         "Musical Instruments",
//         "Sports Equipment",
//         "Other Hobbies",
//       ],
//     },
//     {
//       title: "Services",
//       items: [
//         "Education & Classes",
//         "Tours & Travel",
//         "Electronics Repair & Services",
//         "Health & Beauty",
//         "Home Renovation & Repair",
//         "Cleaning & Pest Control",
//         "Legal & Documentation Services",
//         "Packers & Movers",
//         "Other Services",
//       ],
//     },
//   ];

//   return (
//     <header className="bg-white border-b border-gray-200">
//       {/* Top Header */}
//       <div className="container mx-auto flex items-center justify-between py-3 px-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <a href="/">
//             <img
//               src="/images.png"
//               alt="OLX India"
//               className="w-12 min-w-[48px]"
//             />
//           </a>
//         </div>

//         {/* Location + Search */}
//         <div className="flex-1 flex items-center mx-4 gap-4 justify-around">
//           {/* Location Input */}
//           <div className="relative w-80">
//             {/* Search + Dropdown Bar */}
//             <div className="flex items-center border border-black-300 rounded-lg px-3 py-2 w-full shadow-sm">
//               <FiSearch className="text-gray-500 text-xl mr-2" />
//               <span className="flex-1 text-gray-700 text-sm">{location}</span>
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="ml-2 text-gray-600 hover:text-black"
//               >
//                 <IoMdArrowDropdown className="text-2xl" />
//               </button>
//             </div>

//             {/* Dropdown Menu */}
//             {isOpen && (
//               <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
//                 {/* Live Location */}
//                 <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 cursor-pointer">
//                   <MdMyLocation className="text-gray-500 text-lg" />
//                   <span className="text-sm text-gray-600">
//                     Location blocked. Check browser/phone settings
//                   </span>
//                 </div>

//                 {/* Divider */}
//                 <hr className="my-1 border-gray-200" />

//                 {/* Popular Locations */}
//                 <h4 className="px-4 py-2 text-xs font-semibold text-gray-400">
//                   POPULAR LOCATIONS
//                 </h4>
//                 <ul className="text-sm">
//                   {popularLocations.map((city) => (
//                     <li
//                       key={city}
//                       onClick={() => {
//                         setLocation(city);
//                         setIsOpen(false);
//                       }}
//                       className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
//                     >
//                       <MdLocationOn className="text-gray-500 text-lg" />
//                       <span>{city}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Main Search Input */}
//           <div className="flex items-center border border-black-300 rounded-lg px-3 py-2 w-3xl shadow-sm bg-white">
//             {/* Search Input */}
//             <input
//               type="text"
//               placeholder="Find Cars, Mobile Phones and more..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="flex-1 outline-none text-md text-gray-700 min-w-0"
//             />

//             {/* Checkbox + Label */}
//             <label className="flex items-center gap-1 ml-3 text-sm text-gray-600 cursor-pointer whitespace-nowrap">
//               <input
//                 type="checkbox"
//                 checked={onlyCars}
//                 onChange={(e) => setOnlyCars(e.target.checked)}
//                 className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               Only in Cars
//             </label>

//             {/* Search Button with Icon */}
//             <button
//               type="submit"
//               aria-label="Search"
//               className="ml-3 flex items-center justify-center bg-black text-white p-2 rounded-md hover:bg-gray-800 flex-shrink-0"
//             >
//               <FiSearch className="text-lg" />
//             </button>
//           </div>
//         </div>

//         {/* Right Action Buttons */}
//         <div className="flex items-center">
//           {/* Language Selector */}
//           <div className="px-3 py-2">
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="px-3 py-2 text-md font-bold outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               <option value="English">English</option>
//               <option value="Hindi">Hindi</option>
//               <option value="Spanish">Spanish</option>
//               <option value="French">French</option>
//               <option value="German">German</option>
//             </select>
//           </div>

//           {/* Login Button */}
//           <button className="flex items-center gap-1 px-4 py-2 text-lg font-bold text-gray-700 hover:text-red-600 transition">
//             Login
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 1030 768"
//               fill="currentColor"
//             >
//               <path d="..."></path>
//               <path d="..."></path>
//             </svg>
//           </button>

//           {/* Sell Button */}
//           <div
//             className="relative inline-flex rounded-full p-1"
//             style={{
//               background:
//                 "linear-gradient(to right, #facc15 33%, #14b8a6 33%, #14b8a6 66%, #2563eb 66%)",
//             }}
//           >
//             <button
//               onClick={() => navigate("/CategorySelector")} // direct navigation
//               className="flex items-center bg-white rounded-full px-5 py-2 text-blue-900 font-semibold shadow"
//             >
//               <FaPlus className="mr-2" size={16} />
//               SELL
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Sub Header / Navigation */}
//       <div
//         className="bg-gray-50 border-t border-gray-200 px-4"
//         data-aut-id="subHeader"
//       >
//         <div className="container mx-auto flex items-center justify-between space-x-6">
//           {/* Left side: Dropdown trigger */}
//           <div className="relative inline-block text-left flex-shrink-0">
//             <button
//               onClick={() => setOpen((v) => !v)}
//               className="font-semibold px-4 py-3 flex items-center space-x-2 hover:text-blue-600 transition-colors duration-150"
//               aria-expanded={open}
//               aria-controls="categories-dropdown"
//             >
//               <span>ALL CATEGORIES</span>
//               <svg
//                 className={`w-4 h-4 transition-transform ${
//                   open ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>

//             {/* Dropdown */}
//             {open && (
//               <div
//                 id="categories-dropdown"
//                 className="absolute left-0 top-full mt-2 w-[96vw] max-w-[1280px] bg-white shadow-lg border rounded-lg z-50 p-8"
//                 style={{ minHeight: "320px" }}
//               >
//                 <div className="columns-4 gap-12">
//                   {categories.map((cat) => (
//                     <div key={cat.title} className="mb-6 break-inside-avoid">
//                       <h3 className="font-semibold text-base mb-2 text-gray-800">
//                         {cat.title}
//                       </h3>
//                       <ul className="text-sm space-y-1">
//                         {cat.items.map((item) => (
//                           <li key={item}>
//                             <a
//                               href={`/${item
//                                 .toLowerCase()
//                                 .replace(/\s+/g, "-")}`} // link slug
//                               className="hover:text-blue-600 cursor-pointer text-gray-600 block"
//                             >
//                               {item}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right side: Navigation links */}
//           <nav className="flex items-center space-x-8 whitespace-nowrap text-gray-700 text-sm sm:text-base font-medium">
//             <a href="/Cars" className="hover:text-blue-600">
//               Cars
//             </a>
//             <a href="/Mobile-Phones" className="hover:text-blue-600">
//               Mobile Phones
//             </a>
//             <a href="/Electronics" className="hover:text-blue-600">
//               Electronics
//             </a>
//             <a href="/Furniture" className="hover:text-blue-600">
//               Furniture
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { IoMdArrowDropdown, IoIosMenu } from "react-icons/io";
import { MdMyLocation, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function OLXHeader() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("English");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState("India");
  const [onlyCars, setOnlyCars] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const mobileMenuCategories = [
    { title: "Cars", href: "/Cars" },
    { title: "Mobile Phones", href: "/Mobile-Phones" },
    { title: "Electronics", href: "/Electronics" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Header for Mobile */}
      <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:hidden">
        <a href="/">
          <img
            src="/images.png"
            alt="OLX India"
            className="w-12 min-w-[48px]"
          />
        </a>
        <div className="flex-1 ml-4 mr-2">
          <div className="flex items-center border border-black-300 rounded-lg px-3 py-2 shadow-sm bg-white">
            <input
              type="text"
              placeholder="Find anything..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none text-sm text-gray-700 min-w-0"
            />
            <button
              type="submit"
              aria-label="Search"
              className="ml-2 flex items-center justify-center bg-black text-white p-2 rounded-md hover:bg-gray-800 flex-shrink-0"
            >
              <FiSearch className="text-lg" />
            </button>
          </div>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-gray-700 hover:text-red-600"
          aria-label="Open menu"
        >
          <IoIosMenu size={24} />
        </button>
      </div>

      {/* Top Header for Desktop */}
      <div className="container mx-auto hidden lg:flex items-center justify-between py-3 px-4 flex-wrap">
        <a href="/" className="flex-shrink-0 mr-4">
          <img
            src="/images.png"
            alt="OLX India"
            className="w-12 min-w-[48px]"
          />
        </a>

        <div className="flex-1 flex items-center flex-wrap md:flex-nowrap gap-x-4">
          <div className="relative flex-shrink-0 w-full md:w-auto">
            <div className="flex items-center border border-black-300 rounded-lg px-3 py-2 w-full shadow-sm">
              <FiSearch className="text-gray-500 text-xl mr-2" />
              <span className="flex-1 text-gray-700 text-sm truncate">
                {location}
              </span>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 text-gray-600 hover:text-black"
                aria-label="Change location"
              >
                <IoMdArrowDropdown className="text-2xl" />
              </button>
            </div>
            {isOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <MdMyLocation className="text-gray-500 text-lg" />
                  <span className="text-sm text-gray-600">
                    Location blocked. Check browser/phone settings
                  </span>
                </div>
                <hr className="my-1 border-gray-200" />
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

          <div className="flex items-center border border-black-300 rounded-lg px-3 py-2 w-full md:w-auto shadow-sm bg-white mt-2 md:mt-0">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none text-md text-gray-700 min-w-0"
            />
            <button
              onClick={() => setOnlyCars(!onlyCars)}
              className="hidden lg:flex items-center gap-1 ml-3 text-sm text-gray-600 cursor-pointer whitespace-nowrap"
            >
              <input
                type="checkbox"
                checked={onlyCars}
                readOnly
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              Only in Cars
            </button>
            <button
              type="submit"
              aria-label="Search"
              className="ml-3 flex items-center justify-center bg-black text-white p-2 rounded-md hover:bg-gray-800 flex-shrink-0"
            >
              <FiSearch className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex items-center mt-2 md:mt-0 ml-auto">
          <div className="px-3 py-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-2 text-md font-bold outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <button className="flex items-center gap-1 px-4 py-2 text-lg font-bold text-gray-700 hover:text-red-600 transition">
            Login
          </button>
          <div
            className="relative inline-flex rounded-full p-1"
            style={{
              background:
                "linear-gradient(to right, #facc15 33%, #14b8a6 33%, #14b8a6 66%, #2563eb 66%)",
            }}
          >
            <button
              onClick={() => navigate("/CategorySelector")}
              className="flex items-center bg-white rounded-full px-5 py-2 text-blue-900 font-semibold shadow"
            >
              <FaPlus className="mr-2" size={16} />
              SELL
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-gray-50 border-t border-gray-200 px-4 hidden lg:block"
        data-aut-id="subHeader"
      >
        <div className="container mx-auto flex items-center justify-between space-x-6">
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
            {open && (
              <div
                id="categories-dropdown"
                className="absolute left-0 top-full mt-2 w-[96vw] max-w-[1280px] bg-white shadow-lg border rounded-lg z-50 p-8"
                style={{ minHeight: "320px" }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                  {categories.map((cat) => (
                    <div key={cat.title} className="mb-6">
                      <h3 className="font-semibold text-base mb-2 text-gray-800">
                        {cat.title}
                      </h3>
                      <ul className="text-sm space-y-1">
                        {cat.items.map((item) => (
                          <li key={item}>
                            <a
                              href={`/${item
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
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

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          <div className="relative w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between pb-4 border-b">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-gray-700 hover:text-red-600"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Account</h3>
              <button className="w-full text-left px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 rounded">
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/CategorySelector");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 pointer-cursor
                 text-blue-900 font-bold hover:bg-gray-200 rounded mt-2"
              >
                <FaPlus className="inline mr-2" />
                SELL
              </button>
              <h3 className="text-lg font-bold text-gray-800 mb-4 mt-8">
                Categories
              </h3>
              <ul className="text-sm space-y-1">
                {mobileMenuCategories.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
