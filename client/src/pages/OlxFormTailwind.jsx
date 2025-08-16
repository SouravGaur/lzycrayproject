import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { createListing } from "../utils/api";

const PROPERTY_TYPES = [
  "Flats / Apartments",
  "Independent / Builder Floors",
  "Individual House / Villa",
];

const BHK_OPTIONS = ["1", "2", "3", "4", "4+"];
const BATHROOM_OPTIONS = ["1", "2", "3", "4", "4+"];
const FURNISHING_OPTIONS = ["Furnished", "Semi-Furnished", "Unfurnished"];
const LISTED_BY_OPTIONS = ["Builder", "Dealer", "Owner"];
const CAR_PARKING_OPTIONS = ["0", "1", "2", "3", "3+"];
const FACING_OPTIONS = [
  "North",
  "South",
  "East",
  "West",
  "North-East",
  "North-West",
  "South-East",
  "South-West",
];

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Puducherry",
  "Chandigarh",
  "Andaman & Nicobar Islands",
  "Dadra & Nagar Haveli and Daman & Diu",
];

function ToggleButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "px-3 py-2 rounded-md border text-sm transition-colors " +
        (active
          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50")
      }
    >
      {children}
    </button>
  );
}

export default function OlxFormTailwind() {
  const [formValues, setFormValues] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    listedBy: "",
    superArea: "",
    carpetArea: "",
    bachelorsAllowed: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    projectName: "",
    title: "",
    description: "",
    price: "",
    state: "",
    city: "",
    neighbourhood: "",
    sellerName: "",
    phoneNumber: "",
  });

  const [images, setImages] = useState(Array(20).fill(null));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleToggle = (field, value) => {
    setFormValues((previous) => ({
      ...previous,
      [field]: previous[field] === value ? "" : value,
    }));
  };

  const handleImageChange = (index, file) => {
    const updated = [...images];
    updated[index] = file;
    setImages(updated);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const formData = new FormData();
      Object.entries(formValues).forEach(([key, value]) => {
        formData.append(key, value);
      });
      images.forEach((file) => file && formData.append("images", file));

      await createListing(formData);
      setMessage("Listing created successfully!");

      setFormValues({
        type: "",
        bhk: "",
        bathrooms: "",
        furnishing: "",
        listedBy: "",
        superArea: "",
        carpetArea: "",
        bachelorsAllowed: "",
        maintenance: "",
        totalFloors: "",
        floorNo: "",
        carParking: "",
        facing: "",
        projectName: "",
        title: "",
        description: "",
        price: "",
        state: "",
        city: "",
        neighbourhood: "",
        sellerName: "",
        phoneNumber: "",
      });
      setImages(Array(20).fill(null));
    } catch (error) {
      console.error(error);
      setMessage("Failed to create listing");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-4 sm:p-6 md:p-8 space-y-6"
      >
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Selected Category</h2>
          <p className="text-sm text-gray-600 mt-1">Properties / For Rent: Houses & Apartments</p>
        </div>

        <div className="pt-2">
          <h3 className="text-lg font-semibold text-gray-900">Include Some Details</h3>
          <div className="h-px bg-gray-200 mt-3" />
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Type *</label>
            <div className="flex flex-wrap gap-2">
              {PROPERTY_TYPES.map((item) => (
                <ToggleButton
                  key={item}
                  active={formValues.type === item}
                  onClick={() => handleToggle("type", item)}
                >
                  {item}
                </ToggleButton>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">BHK *</label>
            <div className="flex flex-wrap gap-2">
              {BHK_OPTIONS.map((item) => (
                <ToggleButton
                  key={item}
                  active={formValues.bhk === item}
                  onClick={() => handleToggle("bhk", item)}
                >
                  {item}
                </ToggleButton>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Bathrooms *</label>
            <div className="flex flex-wrap gap-2">
              {BATHROOM_OPTIONS.map((item) => (
                <ToggleButton
                  key={item}
                  active={formValues.bathrooms === item}
                  onClick={() => handleToggle("bathrooms", item)}
                >
                  {item}
                </ToggleButton>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Furnishing</label>
            <div className="flex flex-wrap gap-2">
              {FURNISHING_OPTIONS.map((item) => (
                <ToggleButton
                  key={item}
                  active={formValues.furnishing === item}
                  onClick={() => handleToggle("furnishing", item)}
                >
                  {item}
                </ToggleButton>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Listed by</label>
            <div className="flex flex-wrap gap-2">
              {LISTED_BY_OPTIONS.map((item) => (
                <ToggleButton
                  key={item}
                  active={formValues.listedBy === item}
                  onClick={() => handleToggle("listedBy", item)}
                >
                  {item}
                </ToggleButton>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Super Builtup area sqft *</label>
              <input
                required
                type="number"
                name="superArea"
                value={formValues.superArea}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Carpet Area sqft *</label>
              <input
                required
                type="number"
                name="carpetArea"
                value={formValues.carpetArea}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Bachelors Allowed</label>
            <div className="flex flex-wrap gap-2">
              {(["No", "Yes"]).map((item) => (
                <ToggleButton
                  key={item}
                  active={formValues.bachelorsAllowed === item}
                  onClick={() => handleToggle("bachelorsAllowed", item)}
                >
                  {item}
                </ToggleButton>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Maintenance (Monthly)</label>
              <input
                type="number"
                name="maintenance"
                value={formValues.maintenance}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Total Floors</label>
              <input
                type="number"
                name="totalFloors"
                value={formValues.totalFloors}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Floor No</label>
              <input
                type="number"
                name="floorNo"
                value={formValues.floorNo}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Car Parking</label>
              <div className="flex flex-wrap gap-2">
                {CAR_PARKING_OPTIONS.map((item) => (
                  <ToggleButton
                    key={item}
                    active={formValues.carParking === item}
                    onClick={() => handleToggle("carParking", item)}
                  >
                    {item}
                  </ToggleButton>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Facing</label>
              <select
                name="facing"
                value={formValues.facing}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              >
                <option value="">Select Facing</option>
                {FACING_OPTIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Project Name</label>
              <input
                type="text"
                name="projectName"
                value={formValues.projectName}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Ad title *</label>
            <input
              required
              type="text"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            <p className="mt-1 text-xs text-gray-500">Mention the key features of your item (e.g., brand, model, age, type)</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">Description *</label>
            <textarea
              required
              rows={4}
              name="description"
              value={formValues.description}
              onChange={handleChange}
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            />
            <p className="mt-1 text-xs text-gray-500">Include condition, features and reason for renting</p>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-lg font-semibold text-gray-900">Set a price</h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Price *</label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">₹</span>
                <input
                  required
                  type="number"
                  name="price"
                  value={formValues.price}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-gray-300 pl-7 pr-3 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <h3 className="text-lg font-semibold text-gray-900">Upload up to 20 photos</h3>
          <div className="mt-3 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
            {images.map((file, index) => (
              <div key={index} className="aspect-square rounded-lg border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden">
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`upload-${index}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <label className="flex h-full w-full cursor-pointer items-center justify-center text-gray-400 hover:text-gray-600">
                    <FiCamera className="h-6 w-6" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const selected = e.target.files && e.target.files[0];
                        if (selected) handleImageChange(index, selected);
                      }}
                    />
                  </label>
                )}
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-red-500">This field is mandatory</p>
        </div>

        <div className="pt-2">
          <h3 className="text-lg font-semibold text-gray-900">Confirm your location</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">State *</label>
              <select
                required
                name="state"
                value={formValues.state}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              >
                <option value="">Select State</option>
                {INDIAN_STATES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">City *</label>
              <input
                required
                type="text"
                name="city"
                value={formValues.city}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">Neighbourhood</label>
              <input
                type="text"
                name="neighbourhood"
                value={formValues.neighbourhood}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <h3 className="text-lg font-semibold text-gray-900">Your details</h3>
          <div className="mt-3 grid max-w-md grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Name</label>
              <input
                type="text"
                name="sellerName"
                value={formValues.sellerName}
                onChange={handleChange}
                placeholder="Your name"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">Mobile Phone Number</label>
              <input
                required
                type="tel"
                inputMode="tel"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                placeholder="+91XXXXXXXXXX"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
            </div>
          </div>
        </div>

        {message && (
          <p className="text-sm font-medium text-red-600">{message}</p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 disabled:opacity-60"
          >
            {isSubmitting ? "Submitting…" : "Post now"}
          </button>
        </div>
      </form>
    </div>
  );
}