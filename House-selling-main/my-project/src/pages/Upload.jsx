import { useState } from "react";
import PhotoUploader from "../components/PhotoUploader";
import { createListing } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// This is a simple, reusable button component defined for use in this file.
const PillButton = ({ label, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      px-4 py-2 rounded-sm font-medium text-sm transition-colors duration-200 ease-in-out cursor-pointer
      ${
        isSelected
          ? "bg-[#d9ebfe] border  border-black  shadow-md"
          : "bg-transparent text-gray-800 border border-[#dbdbdb] hover:border-black hover:bg-[#d9ebfe] hover:shadow-md"
      }
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    `}
  >
    {label}
  </button>
);

// Reusable section title component defined within the component file
const SectionTitle = ({ title, subTitle, className = "" }) => (
  <div className={` pb-4 mb-3  lg:max-w-120 sm:max-w-200 ${className} `}>
    <h2 className="text-xl font-bold text-black">{title}</h2>
    {subTitle && <p className="mt-1 text-sm text-gray-500">{subTitle}</p>}
  </div>
);

// This is the main component that composes the entire form.
export default function Upload() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get query params
  const searchParams = new URLSearchParams(location.search);
  const subcategory = searchParams.get("subcategory"); // "For Sale: Houses & Apartments"
  // State for all form fields
  const [projectName, setProjectName] = useState("");
  const [adTitle, setAdTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [bhk, setBhk] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [projectStatus, setProjectStatus] = useState("");
  const [listedBy, setListedBy] = useState("");
  const [superBuiltupArea, setSuperBuiltupArea] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [totalFloors, setTotalFloors] = useState("");
  const [floorNo, setFloorNo] = useState("");
  const [carParking, setCarParking] = useState("");
  const [facing, setFacing] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("Harsh Yadav");
  const [mobileNumber, setMobileNumber] = useState("");
  const [city, setCity] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  // A standalone async function to handle the "upload" or submission logic
  // In a real app, this would make an API call.
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Validate required fields
      if (!photos.length) throw new Error("At least one image is required");
      if (!neighbourhood) throw new Error("Neighbourhood is required");

      const fd = new FormData();

      fd.append("type", propertyType || "");
      fd.append("bhk", bhk || "");
      fd.append("bathrooms", bathrooms || "");
      fd.append("furnishing", furnishing || "");
      fd.append("projectStatus", projectStatus || "");
      fd.append("listedBy", listedBy || "");
      fd.append("superArea", Number(superBuiltupArea) || 0);
      fd.append("carpetArea", Number(carpetArea) || 0);
      fd.append("maintenance", maintenance ? Number(maintenance) : 0);
      fd.append("totalFloors", totalFloors ? Number(totalFloors) : 0);
      fd.append("floorNo", floorNo || "");
      fd.append("carParking", carParking || "");
      fd.append("facing", facing || "");
      fd.append("projectName", projectName || "");
      fd.append("description", description || "");
      fd.append("title", adTitle || "");
      fd.append("price", price || 0);
      fd.append("state", state || "");
      fd.append("city", city || "");
      fd.append("neighbourhood", neighbourhood || "");
      fd.append("sellerName", name || "Harsh Yadav");
      fd.append("phoneNumber", mobileNumber || "");
      fd.append("subcategory", subcategory);
      // Append photos directly
      photos.forEach((file) => fd.append("images", file));

      console.log("Submitting FormData:");
      for (let [key, value] of fd.entries()) {
        console.log(key, value);
      }

      const res = await createListing(fd);
      console.log(res);

      if (res.success) {
        setSubmissionStatus("success");

        // Reset form
        setPropertyType("");
        setBhk("");
        setBathrooms("");
        setFurnishing("");
        setProjectStatus("");
        setListedBy("");
        setSuperBuiltupArea("");
        setCarpetArea("");
        setMaintenance("");
        setTotalFloors("");
        setFloorNo("");
        setCarParking("");
        setFacing("");
        setProjectName("");
        setDescription("");
        setAdTitle("");
        setPrice("");
        setState("");
        setCity("");
        setNeighbourhood("");
        setName("Harsh Yadav");
        setMobileNumber("");
        setPhotos([]);

        navigate("/");
      } else {
        setSubmissionStatus("error");
      }
    } catch (err) {
      console.error("Error submitting listing:", err);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    let value = e.target.value.replace(/,/g, ""); // commas hatao
    if (!isNaN(value)) {
      setPrice(
        Number(value).toLocaleString("en-IN") // Indian format me convert
      );
    }
  };

  const handlePillClick = (setter, value) => {
    setter((prevValue) => (prevValue === value ? "" : value));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 border border-gray-500">
      <div className="max-w-4xl mx-auto bg-white rounded-1xl shadow-lg overflow-hidden">
        {/* Form Header */}
        <div className="p-6  bg-white text-center border-b border-[#0e040533]">
          <h3
            className="text-2xl font-semibold text-center text-black
          "
          >
            POST YOUR AD
          </h3>
        </div>
        <div className="p-6  bg-white text-center border-b border-[#0e040533]">
          <h3
            className="text-xl font-semibold text-left mb-5 text-black
          "
          >
            SELECTED CATEGORY
          </h3>
          <p className="text-left mb-0 text-sm text-[#0e040533]">
            Propeties/For Sale & Appartments{" "}
            <span>
              <a href="" className="text-blue-900 font-semibold decoration-2">
                Change
              </a>
            </span>
          </p>
        </div>

        {/* The Main Form */}
        <div className="p-6 md:p-10 space-y-10">
          <form onSubmit={handleFormSubmission} className="space-y-10">
            {/* "INCLUDE SOME DETAILS" Section (Property-specific fields) */}
            <div className="space-y-6 lg:max-w-120 sm:max-w-200">
              <SectionTitle title="INCLUDE SOME DETAILS" />

              {/* Type Pills */}
              <div>
                <label className="block text-black mb-2">Type*</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Flat",
                    "Independent Floor",
                    "Farm House",
                    "House/Villa",
                  ].map((type) => (
                    <PillButton
                      key={type}
                      label={type}
                      isSelected={propertyType === type}
                      onClick={() => handlePillClick(setPropertyType, type)}
                    />
                  ))}
                </div>
              </div>

              {/* BHK Pills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  BHK*
                </label>
                <div className="flex flex-wrap gap-2">
                  {["1", "2", "3", "4", "4+"].map((bhkOption) => (
                    <PillButton
                      key={bhkOption}
                      label={bhkOption}
                      isSelected={bhk === bhkOption}
                      onClick={() => handlePillClick(setBhk, bhkOption)}
                    />
                  ))}
                </div>
              </div>

              {/* Bathrooms Pills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bathrooms*
                </label>
                <div className="flex flex-wrap gap-2">
                  {["1", "2", "3", "4", "4+"].map((b) => (
                    <PillButton
                      key={b}
                      label={b}
                      isSelected={bathrooms === b}
                      onClick={() => handlePillClick(setBathrooms, b)}
                    />
                  ))}
                </div>
              </div>

              {/* Furnishing Pills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Furnishing
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Furnished", "Semi Furnished", "Unfurnished"].map((f) => (
                    <PillButton
                      key={f}
                      label={f}
                      isSelected={furnishing === f}
                      onClick={() => handlePillClick(setFurnishing, f)}
                    />
                  ))}
                </div>
              </div>

              {/* Project Status Pills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Status
                </label>
                <div className="flex flex-wrap gap-2">
                  {["New Launch", "Ready to Move", "Under Construction"].map(
                    (status) => (
                      <PillButton
                        key={status}
                        label={status}
                        isSelected={projectStatus === status}
                        onClick={() =>
                          handlePillClick(setProjectStatus, status)
                        }
                      />
                    )
                  )}
                </div>
              </div>

              {/* Listed by Pills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Listed by
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Builder", "Dealer", "Owner"].map((listed) => (
                    <PillButton
                      key={listed}
                      label={listed}
                      isSelected={listedBy === listed}
                      onClick={() => handlePillClick(setListedBy, listed)}
                    />
                  ))}
                </div>
              </div>

              {/* Each field on its own row */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Super Builtup area sqft.*
                </label>
                <input
                  type="number"
                  value={superBuiltupArea}
                  onChange={(e) => setSuperBuiltupArea(e.target.value)}
                  className="w-full mt-1 p-3 border rounded-lg border-[#dbdbdb] focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Carpet Area sqft.*
                </label>
                <input
                  type="number"
                  value={carpetArea}
                  onChange={(e) => setCarpetArea(e.target.value)}
                  className="w-full mt-1 p-3 border rounded-lg border-[#dbdbdb] focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Maintenance (Monthly)
                </label>
                <input
                  type="number"
                  value={maintenance}
                  onChange={(e) => setMaintenance(e.target.value)}
                  className="w-full mt-1 p-3 border rounded-lg border-[#dbdbdb] focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Total Floors
                </label>
                <input
                  type="number"
                  value={totalFloors}
                  onChange={(e) => setTotalFloors(e.target.value)}
                  className="w-full mt-1 p-3 border rounded-lg border-[#dbdbdb] focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Floor No
                </label>
                <input
                  type="number"
                  value={floorNo}
                  onChange={(e) => setFloorNo(e.target.value)}
                  className="w-full mt-1 p-3 border rounded-lg border-[#dbdbdb] focus:ring focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Car Parking
                </label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["0", "1", "2", "3+"].map((p) => (
                    <PillButton
                      key={p}
                      label={p}
                      isSelected={carParking === p}
                      onClick={() => handlePillClick(setCarParking, p)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Facing dropdown (separated as in image) */}
            <div className="space-y-6">
              <div className="lg:max-w-120 sm:max-w-200">
                <label className="block text-sm font-semibold text-gray-700">
                  Facing
                </label>
                <select
                  value={facing}
                  onChange={(e) => setFacing(e.target.value)}
                  className="w-full mt-1 p-3 border border-[#dbdbdb] rounded-lg focus:ring focus:ring-blue-400 appearance-none"
                >
                  <option value="">Select Facing</option>
                  <option value="North">North</option>
                  <option value="South">South</option>
                  <option value="East">East</option>
                  <option value="West">West</option>
                  <option value="North-East">North-East</option>
                  <option value="North-West">North-West</option>
                  <option value="South-East">South-East</option>
                  <option value="South-West">South-West</option>
                </select>
              </div>
            </div>
            {/* Horizontal line after this section */}
            <hr className="my-8 border-t border-[#dbdbdb]" />

            {/* Basic Details Section (now re-ordered) */}
            <div className="space-y-6 lg:max-w-120 sm:max-w-200">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full mt-1 p-3 border border-[#dbdbdb] rounded-lg focus:ring focus:ring-blue-400"
                  placeholder="Enter project name"
                  maxLength={70}
                />
                <p className="text-right text-xs text-gray-500 mt-1">
                  {projectName.length}/70
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Ad Title*
                </label>
                <input
                  type="text"
                  value={adTitle}
                  onChange={(e) => setAdTitle(e.target.value)}
                  className="w-full mt-1 p-3 border border-[#dbdbdb] rounded-lg focus:ring focus:ring-blue-400"
                  placeholder="Enter product title"
                  maxLength={70}
                  required
                />
                <p className="text-right text-xs text-gray-500 mt-1">
                  {adTitle.length}/70
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 ">
                  Description*
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full mt-1 p-3 border border-[#dbdbdb] rounded-lg focus:ring focus:ring-blue-400"
                  rows="4"
                  placeholder="Include condition, features and reason for selling."
                  maxLength={4096}
                  required
                />
                <p className="text-right text-xs text-gray-500 mt-1">
                  {description.length}/4096
                </p>
              </div>
            </div>
            {/* Horizontal line after this section */}
            <hr className="my-8 border-t border-[#dbdbdb]" />

            {/* Pricing Section (now re-ordered) */}
            <div className="space-y-6 lg:max-w-120 sm:max-w-200">
              <SectionTitle title="SET A PRICE" />
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Price*
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500">₹</span>
                  </div>
                  <input
                    type="text" // number ki jagah text use karna hoga
                    value={price}
                    onChange={handleChange}
                    className="block w-full border-[#dbdbdb] rounded-lg pl-8 pr-3 py-3 border focus:ring-blue-400 focus:border-blue-400"
                    placeholder="Enter price"
                    required
                  />
                </div>
              </div>
            </div>
            {/* Horizontal line after this section */}
            <hr className="my-8 border-t border-[#dbdbdb]" />

            {/* Photos Section (now re-ordered) */}
            <div className="space-y-6 lg:max-w-120 sm:max-w-200">
              <SectionTitle title="UPLOAD UP TO 20 PHOTOS" />
              <PhotoUploader photos={photos} setPhotos={setPhotos} />
            </div>
            {/* Horizontal line after this section */}
            <hr className="my-8 border-t border-[#dbdbdb]" />

            {/* Location Section */}
            <div className="space-y-6 lg:max-w-120 sm:max-w-200">
              <SectionTitle title="CONFIRM YOUR LOCATION" />

              {/* State */}
              <div className="w-full">
                <label className="block text-sm font-semibold text-gray-700">
                  State*
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full mt-1 p-3 bg-white border rounded-lg focus:ring focus:ring-blue-400 appearance-none"
                  required
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>

                  {/* Union Territories */}
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
                {state === "" && (
                  <p className="text-red-500 text-xs mt-1">
                    This field is mandatory
                  </p>
                )}
              </div>

              {/* Conditional Rendering for City */}
              {state && (
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700">
                    City*
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-400"
                    required
                  />
                    

              {/* Conditional Rendering for Neighbourhood */}
              {city && (
                <div className="w-full">
                  <label className="block text-sm font-semibold text-gray-700">
                    Neighbourhood
                  </label>
                  <input
                    type="text"
                    value={neighbourhood}
                    onChange={(e) => setNeighbourhood(e.target.value)}
                    className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-400"
                    placeholder="Enter neighbourhood or locality"
                  />
                </div>
              )}
            </div>
            {/* Horizontal line after this section */}
            <hr className="my-8 border-t border-[#dbdbdb]" />

            {/* User Details Section */}
            <div className="space-y-6 lg:max-w-120 sm:max-w-200">
              <SectionTitle title="REVIEW YOUR DETAILS" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600">
                  H
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-blue-400"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            </div>

            {/* Account Verification Section */}
            <div className="space-y-6 lg:max-w-120 sm:max-w-200">
              <SectionTitle
                title="Let's verify your account"
                subTitle="We will send you a confirmation code by sms on the next step."
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Mobile Phone Number*
                </label>
                <div className="flex mt-1">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="flex-1 p-3 rounded-r-lg border border-[#dbdbdb] border-l-0 focus:ring focus:ring-blue-400"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-b border-[#0e040533]">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-2 rounded-sm mb-5 font-bold transition lg:max-w-30 sm:max-w-150 cursor-pointer

                  ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#d9dadb] text-white"
                  }
                `}
              >
                {isSubmitting ? "Posting..." : "Post now"}
              </button>
              {submissionStatus === "success" && (
                <p className="text-center mt-4 text-green-600 font-semibold">
                  Form submitted successfully!
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-center mt-4 text-red-600 font-semibold">
                  Submission failed. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
