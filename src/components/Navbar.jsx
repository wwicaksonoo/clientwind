import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Cek apakah halaman sudah discroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between py-4">
          {/* Logo dengan efek outline */}
          <h1
            className={`text-2xl font-medium transition-all ${
              isScrolled
                ? "text-gray-800"
                : "text-transparent stroke-1 stroke-white"
            }`}
          >
            TurmeriK🫚
          </h1>

          {/* Menu Navigasi Desktop */}
          <nav className="hidden md:flex gap-8">
            <a
              href="#kunyit"
              className={`transition ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-500"
                  : "text-transparent stroke-1 stroke-white"
              }`}
            >
              Kunyit
            </a>
            <a
              href="#vitezi"
              className={`transition ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-500"
                  : "text-transparent stroke-1 stroke-white"
              }`}
            >
              Vitez
            </a>
            <a
              href="#herb"
              className={`transition ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-500"
                  : "text-transparent stroke-1 stroke-white"
              }`}
            >
              More Herb
            </a>
          </nav>

          {/* Tombol Menu Mobile */}
          <button
            className={`md:hidden text-3xl transition ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsOpen(true)}
          >
            <i className="ri-menu-4-line"></i>
          </button>
        </div>
      </div>

      {/* Overlay Transparan (Hanya muncul di mode mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu Mobile (Hanya muncul di mode mobile) */}
      <div
        className={`fixed top-0 right-4 mt-16 p-4 bg-white bg-opacity-90 rounded-lg shadow-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Tombol Close */}
        <button
          className="absolute top-2 right-2 text-2xl text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <i className="ri-close-line"></i>
        </button>

        {/* Menu */}
        <nav className="flex flex-col space-y-4 mt-4">
          <a href="#kunyit" className="text-gray-700 hover:text-blue-500 transition">
            Kunyit
          </a>
          <a href="#vitezi" className="text-gray-700 hover:text-blue-500 transition">
            Vitez
          </a>
          <a href="#herb" className="text-gray-700 hover:text-blue-500 transition">
            More Herb
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
