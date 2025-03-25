import React from "react";

const SocialBox = ({ icon, title, description, link }) => {
  return (
    <a
      href={link} // Link yang bisa disesuaikan
      target="_blank" // Buka di tab baru
      rel="noopener noreferrer" // Untuk keamanan
      className="block p-8 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
      style={{ textDecoration: "none", color: "inherit" }} // Hilangkan underline dan warna default link
    >
      <div className="flex flex-col items-center justify-center h-full">
        {icon} {/* Ikon yang diterima dari props */}
        <h2 className="mt-4 text-xl font-semibold">{title}</h2> {/* Judul */}
        <p className="mt-2 text-center">{description}</p> {/* Deskripsi */}
      </div>
    </a>
  );
};

export default SocialBox;