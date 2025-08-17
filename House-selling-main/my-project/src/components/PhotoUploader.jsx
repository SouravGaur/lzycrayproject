import { useRef } from "react";
import { PlusCircle, X } from "lucide-react";
import { TbCameraPlus } from "react-icons/tb";

export default function PhotoUploader({ photos, setPhotos }) {
  const fileInputRef = useRef(null);

  // Handles adding new photos
  const handleFileChange = (e) => {
    // Limit to 20 photos
    const newFiles = Array.from(e.target.files).slice(0, 20 - photos.length);
    setPhotos((prevPhotos) => [...prevPhotos, ...newFiles]);
  };

  // Handles removing a photo by its index
  const handleRemovePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Upload up to 20 Photos
      </label>
      <div className="grid grid-cols-4 gap-4">
        {/* Render uploaded photos with remove button */}
        {photos &&
          photos.map((file, index) => (
            <div
              key={index}
              className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`Uploaded photo ${index + 1}`}
                className="object-cover w-full h-full"
              />
              {/* Remove photo button */}
              <button
                type="button"
                onClick={() => handleRemovePhoto(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-75 transition"
                aria-label="Remove photo"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        {/* Render 'Add Photo' buttons for empty spots */}
        {Array.from({ length: 20 - (photos ? photos.length : 0) }).map(
          (_, index) => (
            <div key={`placeholder-${index}`}>
              <label className="flex flex-col items-center justify-center w-26 h-26 bg-white border-[2px] border-[#020812] rounded-sm  cursor-pointer hover:bg-gray-200 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={fileInputRef}
                />
                <TbCameraPlus className="text-3xl  text-gray-500 hover:text-black"></TbCameraPlus>
                <span className="text-xs text-gray-500 mt-1">Add Photo</span>
              </label>
            </div>
          )
        )}
      </div>
    </div>
  );
}
