import React, { useState } from "react";

interface SeatBookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  seatInfo: { group: number; side?: string } | null;
  onSubmit: (seatInfo: any, formData: any, profilePic?: File) => void;
}

export const SeatBookingForm: React.FC<SeatBookingFormProps> = ({
  isOpen,
  onClose,
  seatInfo,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    pcName: "",
    account: "",
    position: "",
    anydesk: "",
    vnc: "",
    sibsEmail: "",
    sibsPass: "",
    genericEmail: "",
    genericPass: "",
    sharedEmail: "",
    sharedPass: "",
    ntUsername: "",
    ntPass: "",
  });

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
      setPreviewUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (seatInfo) {
      onSubmit(seatInfo, formData, profilePic ?? undefined);

      // Reset form
      setFormData({
        name: "",
        pcName: "",
        account: "",
        position: "",
        anydesk: "",
        vnc: "",
        sibsEmail: "",
        sibsPass: "",
        genericEmail: "",
        genericPass: "",
        sharedEmail: "",
        sharedPass: "",
        ntUsername: "",
        ntPass: "",
      });
      setProfilePic(null);
      setPreviewUrl(null);
      onClose();
    }
  };

  if (!isOpen) return null;

  const inputClasses =
    "w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition";

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start backdrop-blur-sm bg-black/40 overflow-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl my-8 p-12 relative">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Seat Booking</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
          {/* Profile Picture - Top Left */}
          <div className="col-span-3 flex flex-col items-start gap-4">
            <label className="w-64 h-64 relative cursor-pointer border border-gray-300 rounded-md overflow-hidden bg-gray-200 flex items-center justify-center text-center text-lg font-medium">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500">Choose File</span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>

          {/* Top Right - Basic Info */}
          <div className="col-span-9 grid grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
            <input
              type="text"
              name="pcName"
              placeholder="PC Name"
              value={formData.pcName}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="text"
              name="account"
              placeholder="Account"
              value={formData.account}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={formData.position}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="text"
              name="anydesk"
              placeholder="Anydesk"
              value={formData.anydesk}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="text"
              name="vnc"
              placeholder="VNC"
              value={formData.vnc}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          {/* Credentials Section */}
          <div className="col-span-12 mt-8">
            <h3 className="text-2xl font-semibold mb-6">Credentials</h3>

            {/* Emails */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {["sibs", "generic", "shared"].map((type) => (
                <div key={type}>
                  <label className="block text-lg font-medium text-gray-700 capitalize">{type} Email</label>
                  <input
                    type="email"
                    name={`${type}Email`}
                    placeholder="Email"
                    value={formData[`${type}Email` as keyof typeof formData] as string}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <input
                    type="password"
                    name={`${type}Pass`}
                    placeholder="Password"
                    value={formData[`${type}Pass` as keyof typeof formData] as string}
                    onChange={handleChange}
                    className={inputClasses + " mt-2"}
                  />
                </div>
              ))}
            </div>

            {/* NT Log In - Label above, inputs side by side */}
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">NT Log In</label>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="ntUsername"
                  placeholder="Username"
                  value={formData.ntUsername}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <input
                  type="password"
                  name="ntPass"
                  placeholder="Password"
                  value={formData.ntPass}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-12 flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-10 py-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition text-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Assign
            </button>
          </div>
        </form>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-3xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
