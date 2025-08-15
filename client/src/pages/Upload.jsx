import { useState } from "react";
import { createListing } from "../utils/api";
import { FiCamera } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const types = ["Flat", "Independent Floor", "Farm House", "House/Villa"];
const bhkOptions = ["1", "2", "3", "4", "4+"];
const bathroomOptions = ["1", "2", "3", "4", "4+"];
const furnishingOptions = ["Furnished", "Semi Furnished", "Unfurnished"];
const statusOptions = ["New Launch", "Ready to Move", "Under Construction"];
const listedByOptions = ["Builder", "Dealer", "Owner"];
const carParkingOptions = ["0", "1", "2", "3", "3+"];
const facing = [
  "North",
  "South",
  "East",
  "West",
  "North-East",
  "North-West",
  "South-East",
  "South-West",
];
const states = [
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
export default function Upload() {
  const [form, setForm] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    projectStatus: "", // renamed
    listedBy: "",
    superArea: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    projectName: "",
    title: "", // renamed
    description: "",
    price: "",
    sellerName: "", // renamed
    phoneNumber: "", // renamed
    facing: "",
    state: "",
    city: "",
    neighbourhood: "",
  });

  const [files, setFiles] = useState(Array(20).fill(null));
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (index, file) => {
    const updated = [...files];
    updated[index] = file;
    setFiles(updated);
  };

  const toggleSelect = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field] === value ? "" : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMsg("");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      files.forEach((f) => f && fd.append("images", f));

      await createListing(fd);
      setMsg("Listing created successfully!");

      setForm({
        type: "",
        bhk: "",
        bathrooms: "",
        furnishing: "",
        projectStatus: "",
        listedBy: "",
        superArea: "",
        carpetArea: "",
        maintenance: "",
        totalFloors: "",
        floorNo: "",
        carParking: "",
        projectName: "",
        title: "",
        description: "",
        price: "",
        sellerName: "",
        phoneNumber: "",
        facing: "",
        state: "",
        city: "",
        neighbourhood: "",
      });
      setFiles(Array(20).fill(null));
      navigate("/");
    } catch (err) {
      console.error(err);
      setMsg("Failed to create listing");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <h2 className="section-title">Select Category</h2>
        <p className="selected-category">Selected Category: House/Flat Sale</p>

        <hr />
        <h2 className="section-title">Include Some Details</h2>
        <hr className="section-divider" />

        {/* Type */}
        <div className="form-field">
          <label>Type *</label>
          <div className="option-row">
            {types.map((t) => (
              <button
                key={t}
                type="button"
                className={`option-btn ${form.type === t ? "selected" : ""}`}
                onClick={() => toggleSelect("type", t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* BHK */}
        <div className="form-field">
          <label>BHK *</label>
          <div className="option-row">
            {bhkOptions.map((b) => (
              <button
                key={b}
                type="button"
                className={`option-btn ${form.bhk === b ? "selected" : ""}`}
                onClick={() => toggleSelect("bhk", b)}
              >
                {b} BHK
              </button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div className="form-field">
          <label>Bathrooms *</label>
          <div className="option-row">
            {bathroomOptions.map((b) => (
              <button
                key={b}
                type="button"
                className={`option-btn ${
                  form.bathrooms === b ? "selected" : ""
                }`}
                onClick={() => toggleSelect("bathrooms", b)}
              >
                {b} Bath
              </button>
            ))}
          </div>
        </div>

        {/* Furnishing */}
        <div className="form-field">
          <label>Furnishing</label>
          <div className="option-row">
            {furnishingOptions.map((f) => (
              <button
                key={f}
                type="button"
                className={`option-btn ${
                  form.furnishing === f ? "selected" : ""
                }`}
                onClick={() => toggleSelect("furnishing", f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project Status */}
        <div className="form-field">
          <label>Project Status</label>
          <div className="option-row">
            {statusOptions.map((s) => (
              <button
                key={s}
                type="button"
                className={`option-btn ${
                  form.projectStatus === s ? "selected" : ""
                }`}
                onClick={() => toggleSelect("projectStatus", s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Listed By */}
        <div className="form-field">
          <label>Listed By</label>
          <div className="option-row">
            {listedByOptions.map((l) => (
              <button
                key={l}
                type="button"
                className={`option-btn ${
                  form.listedBy === l ? "selected" : ""
                }`}
                onClick={() => toggleSelect("listedBy", l)}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="form-field">
          <label>Super Builtup Area (sqft) *</label>
          <input
            name="superArea"
            type="number"
            value={form.superArea}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label>Carpet Area (sqft)</label>
          <input
            name="carpetArea"
            type="number"
            value={form.carpetArea}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Maintenance (Monthly)</label>
          <input
            name="maintenance"
            type="number"
            value={form.maintenance}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Total Floors</label>
          <input
            name="totalFloors"
            type="number"
            value={form.totalFloors}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Floor No</label>
          <input
            name="floorNo"
            type="number"
            value={form.floorNo}
            onChange={handleChange}
          />
        </div>

        {/* Car Parking */}
        <div className="form-field">
          <label>Car Parking</label>
          <div className="option-row">
            {carParkingOptions.map((c) => (
              <button
                key={c}
                type="button"
                className={`option-btn ${
                  form.carParking === c ? "selected" : ""
                }`}
                onClick={() => toggleSelect("carParking", c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="form-field">
          <label>Project Name</label>
          <input
            name="projectName"
            type="text"
            value={form.projectName}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Title *</label>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label>Description *</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <div className="form-field">
          <label>Price *</label>
          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <hr />

        {/* Upload Photos */}
        <h2 className="section-title">Upload Photos (Max 20)</h2>
        <div className="thumbs">
          {files.map((f, i) => (
            <div key={i} className="thumb">
              {f ? (
                <img
                  src={URL.createObjectURL(f)}
                  alt={`upload-${i}`}
                  className="thumb-img"
                />
              ) : (
                <label className="thumb-empty cursor-pointer">
                  <FiCamera className="camera-icon" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) =>
                      e.target.files[0] &&
                      handleFileChange(i, e.target.files[0])
                    }
                  />
                </label>
              )}
            </div>
          ))}
        </div>

        <hr />

        {/* Location Fields */}
        <h2 className="section-title">Confirm Your Location</h2>
        <div className="form-field">
          <label>State *</label>
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label>City *</label>
          <input
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Neighbourhood</label>
          <input
            name="neighbourhood"
            type="text"
            value={form.neighbourhood}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Facing</label>
          <select name="facing" value={form.facing} onChange={handleChange}>
            <option value="">Select Facing</option>
            {facing.map((dir) => (
              <option key={dir} value={dir}>
                {dir}
              </option>
            ))}
          </select>
        </div>

        <hr />

        {/* Seller Info */}
        <h2 className="section-title">Seller Information</h2>
        <div className="review-section">
          <div className="profile-icon">
            <FaUserCircle size={60} color="#888" />
          </div>
          <div className="review-info">
            <label>Seller Name</label>
            <input
              name="sellerName"
              type="text"
              value={form.sellerName}
              onChange={handleChange}
              placeholder="Enter Name"
            />
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone"
            />
          </div>
        </div>

        {msg && <p className="error">{msg}</p>}
        <button type="submit" disabled={submitting} className="btn">
          {submitting ? "Submitting…" : "Submit Listing"}
        </button>
      </form>
    </div>
  );
}
