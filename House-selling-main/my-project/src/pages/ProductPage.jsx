// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { getListingById } from "../utils/api";

// // export default function ProductPage() {
// //   const { id } = useParams();
// //   const [project, setProject] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchProject = async () => {
// //       try {
// //         const property = await getListingById(id);

// //         setProject(property);
// //       } catch (err) {
// //         console.log(err);
// //         setError("Failed to fetch project data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProject(); // call the async function
// //   }, [id]);

// //   if (loading) return <p className="text-center mt-10">Loading...</p>;
// //   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

// //   return (
// //     <div className="max-w-5xl mx-auto p-4">
// //       {/* Project Title */}
// //       <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

// //       {/* Image Gallery */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// //         {project.images && project.images.length > 0 ? (
// //           project.images.map((img, idx) => (
// //             <img
// //               key={idx}
// //               src={img}
// //               alt={project.title}
// //               className="w-full h-64 object-cover rounded-lg shadow-md"
// //             />
// //           ))
// //         ) : (
// //           <img
// //             src="https://via.placeholder.com/400x250"
// //             alt="placeholder"
// //             className="w-full h-64 object-cover rounded-lg shadow-md"
// //           />
// //         )}
// //       </div>

// //       {/* Details */}
// //       <div className="bg-white p-6 rounded-2xl shadow-md">
// //         <p className="text-gray-600 mb-2">{project.description}</p>
// //         <p className="text-blue-600 font-semibold text-xl mb-2">
// //           ₹{Number(project.price).toLocaleString()}
// //         </p>
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
// //           <p>
// //             <strong>Type:</strong> {project.type}
// //           </p>
// //           <p>
// //             <strong>BHK:</strong> {project.bhk}
// //           </p>
// //           <p>
// //             <strong>Bathrooms:</strong> {project.bathrooms}
// //           </p>
// //           <p>
// //             <strong>Furnishing:</strong> {project.furnishing}
// //           </p>
// //           <p>
// //             <strong>Project Status:</strong> {project.projectStatus}
// //           </p>
// //           <p>
// //             <strong>Listed By:</strong> {project.listedBy}
// //           </p>
// //           <p>
// //             <strong>Super Area:</strong> {project.superArea} sq ft
// //           </p>
// //           <p>
// //             <strong>Carpet Area:</strong> {project.carpetArea} sq ft
// //           </p>
// //           <p>
// //             <strong>Maintenance:</strong> ₹{project.maintenance}
// //           </p>
// //           <p>
// //             <strong>Total Floors:</strong> {project.totalFloors}
// //           </p>
// //           <p>
// //             <strong>Floor No:</strong> {project.floorNo}
// //           </p>
// //           <p>
// //             <strong>Car Parking:</strong> {project.carParking}
// //           </p>
// //           <p>
// //             <strong>Facing:</strong> {project.facing}
// //           </p>
// //           <p>
// //             <strong>Project Name:</strong> {project.projectName}
// //           </p>
// //           <p>
// //             <strong>State:</strong> {project.state}
// //           </p>
// //           <p>
// //             <strong>City:</strong> {project.city}
// //           </p>
// //           <p>
// //             <strong>Neighbourhood:</strong> {project.neighbourhood}
// //           </p>
// //           <p>
// //             <strong>Seller Name:</strong> {project.sellerName}
// //           </p>
// //           <p>
// //             <strong>Phone Number:</strong> {project.phoneNumber}
// //           </p>
// //           <p>
// //             <strong>Subcategory:</strong> {project.subcategory}
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getListingById } from "../utils/api";

// export default function ProductPage() {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const property = await getListingById(id);
//         setProject(property);
//       } catch (err) {
//         console.log(err);
//         setError("Failed to fetch project data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProject();
//   }, [id]);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
//       {/* Main Content Area: Image and Right Panel - (Unchanged) */}
//       <div className="flex flex-col lg:flex-row gap-6 mb-6">
//         {/* Left Side: Image Gallery */}
//         <div className="lg:w-2/3">
//           <div className="relative bg-gray-200 h-[400px] md:h-[500px] flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
//             {/* Placeholder for a sliding image gallery. You'll need to implement this. */}
//             <p className="text-gray-500">Image Slider Goes Here</p>
//             {/* Example of a single image */}
//             {project.images && project.images.length > 0 ? (
//               <img
//                 src={project.images[0]}
//                 alt={project.title}
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
//                 No Image Available
//               </div>
//             )}
//             <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full cursor-pointer">
//               {"<"}
//             </div>
//             <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full cursor-pointer">
//               {">"}
//             </div>
//           </div>
//           {/* Thumbnail gallery can be added here */}
//           <div className="mt-4 flex gap-2 overflow-x-auto">
//             {project.images &&
//               project.images.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`Thumbnail ${idx}`}
//                   className="w-20 h-20 object-cover rounded cursor-pointer border-2 border-transparent hover:border-blue-500"
//                 />
//               ))}
//           </div>
//         </div>

//         {/* Right Side: Price, Title, Seller Info, Contact */}
//         <div className="lg:w-1/3 flex flex-col gap-4">
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <div className="flex justify-between items-center mb-2">
//               <h2 className="text-3xl font-bold text-gray-900">
//                 ₹{Number(project.price).toLocaleString()}
//               </h2>
//               <div className="flex gap-2 text-gray-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 cursor-pointer"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 cursor-pointer"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8.684 13.342C8.88 15.688 9.5 17.842 12 17.842c2.5 0 3.12-2.154 3.316-4.5.196-2.455-.992-4.992-3.316-4.992-2.324 0-3.512 2.537-3.316 4.992zM12 21a9 9 0 100-18 9 9 0 000 18z"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
//               {project.title || "Project Title"}
//             </h1>
//             <p className="text-sm text-gray-500 mb-4">
//               {project.city}, {project.state}
//             </p>

//             <hr className="my-4" />

//             {/* Contact Details */}
//             <div className="flex items-center mb-4">
//               <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8 text-gray-500"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-semibold">
//                   {project.sellerName || "Seller Name"}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Member since {new Date().getFullYear()}
//                 </p>
//               </div>
//             </div>
//             <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
//               Chat with seller
//             </button>
//           </div>

//           {/* Location Map Placeholder */}
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="font-semibold text-lg mb-2">Posted in</h3>
//             <p className="text-sm text-gray-500 mb-4">
//               {project.city}, {project.state}, India
//             </p>
//             <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
//               <p className="text-gray-500">Map Goes Here</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MODIFIED "Details" Section */}
//       <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
//         <h3 className="text-xl font-bold mb-4">Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm">
//           <div className="flex gap-2">
//             <span className="text-gray-500">Type:</span>
//             <span className="font-semibold text-gray-800">{project.type}</span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">BHK:</span>
//             <span className="font-semibold text-gray-800">{project.bhk}</span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Bathrooms:</span>
//             <span className="font-semibold text-gray-800">
//               {project.bathrooms}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Furnishing:</span>
//             <span className="font-semibold text-gray-800">
//               {project.furnishing}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Super Area:</span>
//             <span className="font-semibold text-gray-800">
//               {project.superArea} sq ft
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Carpet Area:</span>
//             <span className="font-semibold text-gray-800">
//               {project.carpetArea} sq ft
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Project Status:</span>
//             <span className="font-semibold text-gray-800">
//               {project.projectStatus}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Listed By:</span>
//             <span className="font-semibold text-gray-800">
//               {project.listedBy}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Maintenance:</span>
//             <span className="font-semibold text-gray-800">
//               ₹{project.maintenance}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Total Floors:</span>
//             <span className="font-semibold text-gray-800">
//               {project.totalFloors}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Floor No:</span>
//             <span className="font-semibold text-gray-800">
//               {project.floorNo}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Car Parking:</span>
//             <span className="font-semibold text-gray-800">
//               {project.carParking}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Facing:</span>
//             <span className="font-semibold text-gray-800">
//               {project.facing}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Project Name:</span>
//             <span className="font-semibold text-gray-800">
//               {project.projectName}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">State:</span>
//             <span className="font-semibold text-gray-800">{project.state}</span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">City:</span>
//             <span className="font-semibold text-gray-800">{project.city}</span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Neighbourhood:</span>
//             <span className="font-semibold text-gray-800">
//               {project.neighbourhood}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Seller Name:</span>
//             <span className="font-semibold text-gray-800">
//               {project.sellerName}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Phone Number:</span>
//             <span className="font-semibold text-gray-800">
//               {project.phoneNumber}
//             </span>
//           </div>
//           <div className="flex gap-2">
//             <span className="text-gray-500">Subcategory:</span>
//             <span className="font-semibold text-gray-800">
//               {project.subcategory}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Description Section - (Unchanged) */}
//       <div className="bg-white p-6 mt-6 rounded-2xl shadow-md">
//         <h3 className="text-xl font-bold mb-4">Description</h3>
//         <p className="text-gray-600 leading-relaxed">
//           {project.description || "No description provided."}
//         </p>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListingById } from "../utils/api";

export default function ProductPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const property = await getListingById(id);
        setProject(property);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch project data");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  // Function to handle moving to the previous image
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle moving to the next image
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      {/* Main Content Area: Image and Right Panel */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Left Side: Image Gallery */}
        <div className="lg:w-2/3">
          <div className="relative bg-gray-200 h-[400px] md:h-[500px] flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
            {project.images && project.images.length > 0 ? (
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
                No Image Available
              </div>
            )}
            {project.images && project.images.length > 1 && (
              <>
                <div
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full cursor-pointer hover:bg-white transition"
                  onClick={handlePrevClick}
                >
                  {"<"}
                </div>
                <div
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full cursor-pointer hover:bg-white transition"
                  onClick={handleNextClick}
                >
                  {">"}
                </div>
              </>
            )}
          </div>
          {project.images && project.images.length > 0 && (
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition-border duration-200 ${
                    currentImageIndex === idx
                      ? "border-blue-500"
                      : "border-transparent hover:border-blue-300"
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Price, Title, Seller Info, Contact */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-3xl font-bold text-gray-900">
                ₹{Number(project.price).toLocaleString()}
              </h2>
              {/* Add heart/share icons here */}
              <div className="flex gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.88 15.688 9.5 17.842 12 17.842c2.5 0 3.12-2.154 3.316-4.5.196-2.455-.992-4.992-3.316-4.992-2.324 0-3.512 2.537-3.316 4.992zM12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
              {project.title || "Project Title"}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              {project.city}, {project.state}
            </p>

            <hr className="my-4" />

            {/* Contact Details */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">
                  {project.sellerName || "Seller Name"}
                </p>
                <p className="text-sm text-gray-500">
                  Member since {new Date().getFullYear()}
                </p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Chat with seller
            </button>
          </div>

          {/* Location Map Placeholder */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-2">Posted in</h3>
            <p className="text-sm text-gray-500 mb-4">
              {project.city}, {project.state}, India
            </p>
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
              <p className="text-gray-500">Map Goes Here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-sm">
          <div className="flex gap-2">
            <span className="text-gray-500">Type:</span>
            <span className="font-semibold text-gray-800">{project.type}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">BHK:</span>
            <span className="font-semibold text-gray-800">{project.bhk}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Bathrooms:</span>
            <span className="font-semibold text-gray-800">
              {project.bathrooms}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Furnishing:</span>
            <span className="font-semibold text-gray-800">
              {project.furnishing}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Super Area:</span>
            <span className="font-semibold text-gray-800">
              {project.superArea} sq ft
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Carpet Area:</span>
            <span className="font-semibold text-gray-800">
              {project.carpetArea} sq ft
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Project Status:</span>
            <span className="font-semibold text-gray-800">
              {project.projectStatus}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Listed By:</span>
            <span className="font-semibold text-gray-800">
              {project.listedBy}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Maintenance:</span>
            <span className="font-semibold text-gray-800">
              ₹{project.maintenance}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Total Floors:</span>
            <span className="font-semibold text-gray-800">
              {project.totalFloors}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Floor No:</span>
            <span className="font-semibold text-gray-800">
              {project.floorNo}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Car Parking:</span>
            <span className="font-semibold text-gray-800">
              {project.carParking}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Facing:</span>
            <span className="font-semibold text-gray-800">
              {project.facing}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Project Name:</span>
            <span className="font-semibold text-gray-800">
              {project.projectName}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">State:</span>
            <span className="font-semibold text-gray-800">{project.state}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">City:</span>
            <span className="font-semibold text-gray-800">{project.city}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Neighbourhood:</span>
            <span className="font-semibold text-gray-800">
              {project.neighbourhood}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Seller Name:</span>
            <span className="font-semibold text-gray-800">
              {project.sellerName}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Phone Number:</span>
            <span className="font-semibold text-gray-800">
              {project.phoneNumber}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">Subcategory:</span>
            <span className="font-semibold text-gray-800">
              {project.subcategory}
            </span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white p-6 mt-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-bold mb-4">Description</h3>
        <p className="text-gray-600 leading-relaxed">
          {project.description || "No description provided."}
        </p>
      </div>
    </div>
  );
}
