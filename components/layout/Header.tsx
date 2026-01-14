import React from "react";

const Header = () => {
  return (
    <header className="w-full shadow-md px-6 py-4 flex flex-col gap-4 bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold">StayFinder</div>

      {/* Search bar */}
      <div>
        <input
          type="text"
          placeholder="Search locations..."
          className="border w-full p-2 rounded-md"
        />
      </div>

      {/* Auth */}
      <div className="flex gap-4">
        <button className="px-4 py-2 border rounded-md">Sign In</button>
        <button className="px-4 py-2 bg-black text-white rounded-md">Sign Up</button>
      </div>

      {/* Accommodation Types */}
      <div className="flex gap-4 overflow-x-auto">
        {["Rooms", "Mansion", "Countryside", "Beachfront", "Luxury Villa"].map(
          (item) => (
            <span
              key={item}
              className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer"
            >
              {item}
            </span>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
